import './styles.scss';

import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Layout = () => {
  return (
    <main className='layout'>
      <Header />
      <Sidebar />
      <div className='layout__main'>
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
