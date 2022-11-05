import './App.scss';

import React from 'react';

import { toggleMask } from './redux/actions';
import { useAppDispatch, useAppSelector } from './redux/store';
import AppRoutes from './routes/routes';

function App() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme);
  const mask = useAppSelector((state) => state.mask);

  return (
    <div className={`App ${theme}`} data-theme={theme}>
      {mask ? <div className='mask' onClick={() => dispatch(toggleMask())}></div> : <></>}
      <AppRoutes />
    </div>
  );
}

export default App;
