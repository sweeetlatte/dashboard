import './styles.scss';

import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Layout = () => {
  return (
    <main className='layout'>
      <Header />
      <div className='layout__main'>
        <div className='layout__sidebar'>
          <div className='layout__custom-scrollbar'>
            <Sidebar />
          </div>
        </div>
        <div className='layout__outlet'>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Layout;
