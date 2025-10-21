Coloca aquí los logos requeridos por la app.

Archivos esperados:

- neb-logo-claro.png
- neb-logo-oscuro.png

Rutas de carga en producción/desarrollo:

- /neb-logo-claro.png
- /neb-logo-oscuro.png

Recomendación de tamaños: altura ~40px, fondo transparente (PNG), ancho flexible.

---

# Captura de correos (Email Gate)

Este proyecto incluye un modal opcional para captar correos al entrar. Los usuarios pueden participar con su email o saltar. Los correos se envían a un servicio externo si se configura y además se respaldan en `localStorage`.

## Opciones de destino

1. Formspree (simple y sin backend)

- Crea un formulario en https://formspree.io/ y copia el endpoint (por ejemplo: https://formspree.io/f/abcdefg).
- Crea un archivo `.env` en la raíz con:

```
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/tu_id
```

2. Google Forms (sin backend)

- Crea un Form con una pregunta de tipo "Respuesta corta" para el email.
- Enviar sin CORS: copia la URL de `action` del formulario público y el nombre de la entrada del email (generalmente `entry.########`).
- En `.env`:

```
VITE_GOOGLE_FORM_ACTION=https://docs.google.com/forms/d/e/.../formResponse
VITE_GOOGLE_FORM_EMAIL_ENTRY=entry.1234567890
```

3. Respaldo local

- Siempre se guarda también en `localStorage` bajo la clave `capturedEmails`.
- Marcadores: `emailGateDismissed` (omitido) y `emailSubmitted` (participó).

## Notas

- Si no configuras variables, solo se guardará localmente.
- Puedes exportar correos abriendo la consola del navegador y ejecutando:

```js
JSON.parse(localStorage.getItem("capturedEmails") || "[]");
```
