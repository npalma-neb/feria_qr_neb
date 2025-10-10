import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Theme } from './types';
import Layout from './components/Layout';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme');
      // FIX: Check against theme values and return actual enum members to satisfy TypeScript.
      // `storedTheme` is a string, which is not assignable to the `Theme` enum type even if the string values match.
      if (storedTheme === Theme.DARK) {
        return Theme.DARK;
      }
      if (storedTheme === Theme.LIGHT) {
        return Theme.LIGHT;
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return Theme.DARK;
      }
    }
    return Theme.LIGHT;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;
    if (theme === Theme.DARK) {
      root.classList.add('dark');
      body.classList.add('dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };

  return (
    <Layout theme={theme} toggleTheme={toggleTheme}>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/item/:id" element={<DetailPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
