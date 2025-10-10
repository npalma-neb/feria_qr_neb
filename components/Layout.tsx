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
      <footer className="text-center py-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} NEB Chile. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Layout;
