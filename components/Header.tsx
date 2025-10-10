import React from 'react';
import { Link } from 'react-router-dom';
import { Theme } from '../types';
import ThemeToggleButton from './ThemeToggleButton';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const logoSrc = theme === Theme.DARK ? '/neb-logo-oscuro.png' : '/neb-logo-claro.png';
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/">
          <img
            src={logoSrc}
            alt="NEB Chile"
            className="h-10 w-auto select-none"
            draggable={false}
          />
        </Link>
        <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
};

export default Header;
