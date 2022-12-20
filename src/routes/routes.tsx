import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from '../layouts/Layout';
import APP_ROUTE from './app.routes';

const Analytical = lazy(() => import('../pages/Analytical'));
const Modern = lazy(() => import('../pages/Modern'));
const ECommerce = lazy(() => import('../pages/ECommerce'));

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
            </Route>
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}
