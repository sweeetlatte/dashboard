import './App.scss';

import React from 'react';

import { useAppSelector } from './redux/store';
import AppRoutes from './routes/routes';

function App() {
  const theme = useAppSelector((state) => state.theme);

  return (
    <div className={`App ${theme}`} data-theme={theme}>
      <AppRoutes />
    </div>
  );
}

export default App;
