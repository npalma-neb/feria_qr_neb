import React, { useCallback, useMemo, useState } from 'react';

interface EmailGateProps {
  open: boolean;
  onClose: () => void;
}

const EMAIL_REGEX = /^(?:[a-zA-Z0-9_'^&+\-])+(?:\.(?:[a-zA-Z0-9_'^&+\-])+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

async function postWithTimeout(input: RequestInfo | URL, init: RequestInit, timeoutMs: number): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(input, { ...init, signal: controller.signal });
    clearTimeout(timeout);
    return response;
  } catch (err) {
    clearTimeout(timeout);
    throw err;
  }
}

async function submitEmailExternal(email: string): Promise<void> {
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;
  const googleFormAction = import.meta.env.VITE_GOOGLE_FORM_ACTION as string | undefined;
  const googleFormEmailEntry = import.meta.env.VITE_GOOGLE_FORM_EMAIL_ENTRY as string | undefined;

  // Try Formspree first if configured
  if (formspreeEndpoint) {
    const body = new URLSearchParams();
    body.set('email', email);
    try {
      await postWithTimeout(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' },
        body: body.toString()
      }, 5000);
      return;
    } catch (_) {
      // continue to next fallback
    }
  }

  // Try Google Forms if configured
  if (googleFormAction && googleFormEmailEntry) {
    const body = new URLSearchParams();
    body.set(googleFormEmailEntry, email);
    try {
      await postWithTimeout(googleFormAction, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        mode: 'no-cors'
      }, 5000);
      return;
    } catch (_) {
      // fall through to local backup
    }
  }
}

function saveEmailLocally(email: string) {
  try {
    const existing = window.localStorage.getItem('capturedEmails');
    const parsed = existing ? (JSON.parse(existing) as Array<{ email: string; ts: number }>) : [];
    parsed.push({ email, ts: Date.now() });
    window.localStorage.setItem('capturedEmails', JSON.stringify(parsed));
  } catch (_) {
    // ignore local storage errors
  }
}

const EmailGate: React.FC<EmailGateProps> = ({ open, onClose }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const isValid = useMemo(() => EMAIL_REGEX.test(email.trim()), [email]);

  const handleSkip = useCallback(() => {
    try {
      window.localStorage.setItem('emailGateDismissed', 'true');
    } catch (_) {}
    onClose();
  }, [onClose]);

  const handleSubmit = useCallback(async () => {
    const trimmed = email.trim();
    if (!EMAIL_REGEX.test(trimmed)) {
      setError('Por favor ingrese un correo válido.');
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      // External destinations (best-effort)
      await submitEmailExternal(trimmed);
    } catch (_) {
      // ignore network errors – still capture locally
    } finally {
      // Always back up locally
      saveEmailLocally(trimmed);
      try {
        window.localStorage.setItem('emailSubmitted', 'true');
      } catch (_) {}
      setSubmitting(false);
      onClose();
    }
  }, [email, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
      <div className="relative w-full max-w-md mx-4 rounded-xl shadow-2xl bg-white dark:bg-gray-800 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Participa en el sorteo</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-5">
          Déjanos tu correo para participar y recibir novedades. Puedes omitir si prefieres.
        </p>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="gate-email">Correo electrónico</label>
        <input
          id="gate-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E6C029]"
          placeholder="tucorreo@ejemplo.com"
          autoComplete="email"
          disabled={submitting}
        />
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleSubmit}
            disabled={submitting || !isValid}
            className="inline-flex justify-center items-center rounded-md bg-[#E6C029] text-black font-semibold px-4 py-2 disabled:opacity-60 disabled:cursor-not-allowed hover:brightness-95 transition"
          >
            {submitting ? 'Enviando…' : 'Participar'}
          </button>
          <button
            onClick={handleSkip}
            disabled={submitting}
            className="inline-flex justify-center items-center rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 font-medium px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            Omitir por ahora
          </button>
        </div>
        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          Al participar aceptas recibir comunicaciones ocasionales. Puedes darte de baja en cualquier momento.
        </p>
      </div>
    </div>
  );
};

export default EmailGate;


