import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from '../layouts/Layout';
import APP_ROUTE from './app.routes';

const Analytical = lazy(() => import('../pages/Dashboard/Analytical'));
const Modern = lazy(() => import('../pages/Dashboard/Modern'));
const ECommerce = lazy(() => import('../pages/Dashboard/ECommerce'));

const Chat = lazy(() => import('../pages/Apps/Chat'));
const Notes = lazy(() => import('../pages/Apps/Notes'));
const Mail = lazy(() => import('../pages/Apps/Mail'));
const Calendar = lazy(() => import('../pages/Apps/Calendar'));
const Customers = lazy(() => import('../pages/Apps/Customers'));

export default function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Router>
        <Routes>
          <Route>
            <Route path='/' element={<Layout />}>
              <Route index element={<Analytical />} />
              <Route path={APP_ROUTE.MODERN} element={<Modern />} />
              <Route path={APP_ROUTE.ECOMMERCE} element={<ECommerce />} />
              <Route path={APP_ROUTE.CHAT} element={<Chat />} />
              <Route path={APP_ROUTE.NOTES} element={<Notes />} />
              <Route path={APP_ROUTE.MAIL} element={<Mail />} />
              <Route path={APP_ROUTE.CALENDAR} element={<Calendar />} />
              <Route path={APP_ROUTE.CUSTOMERS} element={<Customers />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}
