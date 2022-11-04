import './App.scss';

import React from 'react';

import ThemeToggle from './components/ThemeToggle';
import { useAppSelector } from './redux/store';

function App() {
  const theme = useAppSelector((state) => state.theme);

  return (
    <div className={`App ${theme}`} data-theme={theme}>
      <ThemeToggle />
      <div className='card'>bfjnweflew</div>
    </div>
  );
}

export default App;
