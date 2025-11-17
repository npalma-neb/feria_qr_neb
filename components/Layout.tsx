import React from 'react';
import Header from './Header';
import { Theme } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  theme: Theme;
  toggleTheme: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, theme, toggleTheme }) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 font-sans">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-5 text-gray-600 dark:text-gray-300">
              <a
                href="https://www.youtube.com/@nebchile8019/featured"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Canal de YouTube de NEB Chile"
                title="YouTube"
                className="hover:text-red-500 transition-colors"
              >
                {/* YouTube icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M23.5 6.2a4.6 4.6 0 0 0-3.2-3.2C18.4 2.5 12 2.5 12 2.5s-6.4 0-8.3.5A4.6 4.6 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a4.6 4.6 0 0 0 3.2 3.2c1.9.5 8.3.5 8.3.5s6.4 0 8.3-.5a4.6 4.6 0 0 0 3.2-3.2c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.4V8.6L15.8 12l-6.2 3.4Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/neb-chile/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de NEB Chile"
                title="LinkedIn"
                className="hover:text-blue-600 transition-colors"
              >
                {/* LinkedIn icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.5h4V23h-4V8.5Zm7 0h3.83v1.98h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.09V23h-4v-5.91c0-1.41-.03-3.23-1.97-3.23-1.97 0-2.27 1.54-2.27 3.12V23h-4V8.5Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/neb_chile/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de NEB Chile"
                title="Instagram"
                className="hover:text-pink-500 transition-colors"
              >
                {/* Instagram icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.4.3 1 .4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.4.2-1 .3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.4-.3-1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .4-.2 1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.6.2-1.9.4-.5.2-.8.4-1.1.8-.3.3-.6.6-.8 1.1-.2.4-.3.9-.4 1.9-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.6.4 1.9.2.5.4.8.8 1.1.3.3.6.6 1.1.8.4.2.9.3 1.9.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 1.9-.4.5-.2.8-.4 1.1-.8.3-.3.6-.6.8-1.1.2-.4.3-.9.4-1.9.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.6-.4-1.9-.2-.5-.4-.8-.8-1.1-.3-.3-.6-.6-1.1-.8-.4-.2-.9-.3-1.9-.4-1.2-.1-1.6-.1-4.7-.1Zm0 3.2a6.6 6.6 0 1 1 0 13.2 6.6 6.6 0 0 1 0-13.2Zm0 2a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm5-2.8a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2Z" />
                </svg>
              </a>
              <a
                href="https://www.nebchile.cl/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sitio web de NEB Chile"
                title="Sitio web"
                className="hover:text-emerald-500 transition-colors"
              >
                {/* Globe icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2c1.7 0 3.3.5 4.6 1.4-.6.2-1.2.6-1.7 1.1-.7.6-1.6.9-2.5.9-.9 0-1.8-.3-2.5-.9-.5-.5-1.1-.9-1.7-1.1C8.7 4.5 10.3 4 12 4Zm-8 8c0-1 .2-2 .6-2.9.7.1 1.4.4 2 .9.9.8 2.1 1.2 3.4 1.2s2.5-.4 3.4-1.2c.6-.5 1.3-.8 2-.9.4.9.6 1.9.6 2.9s-.2 2-.6 2.9c-.7-.1-1.4-.4-2-.9-.9-.8-2.1-1.2-3.4-1.2s-2.5.4-3.4 1.2c-.6.5-1.3.8-2 .9-.4-.9-.6-1.9-.6-2.9Zm8 8c-1.7 0-3.3-.5-4.6-1.4.6-.2 1.2-.6 1.7-1.1.7-.6 1.6-.9 2.5-.9.9 0 1.8.3 2.5.9.5.5 1.1.9 1.7 1.1-1.3.9-2.9 1.4-4.6 1.4Z" />
                </svg>
              </a>
            </div>
            <p className="text-center sm:text-right text-gray-500 dark:text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} NEB Chile. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
