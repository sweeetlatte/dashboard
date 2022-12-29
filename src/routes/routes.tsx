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

const Shop = lazy(() => import('../pages/Pages/Shop'));
const Alert = lazy(() => import('../pages/Pages/Alert'));
const UserProfile = lazy(() => import('../pages/Pages/UserProfile'));
const QuillEditor = lazy(() => import('../pages/Pages/QuillEditor'));
const Treeview = lazy(() => import('../pages/Pages/Treeview'));
const Pricing = lazy(() => import('../pages/Pages/Pricing'));
const Typography = lazy(() => import('../pages/Pages/Typography'));
const FeatherIcons = lazy(() => import('../pages/Pages/FeatherIcons'));
const Timeline = lazy(() => import('../pages/Pages/Timeline'));

const FormCustom = lazy(() => import('../pages/Forms/FormCustom'));
const FormElements = lazy(() => import('../pages/Forms/FormElements'));
const FormLayout = lazy(() => import('../pages/Forms/FormLayout'));
const FormWizard = lazy(() => import('../pages/Forms/FormWizard'));

const Tables = lazy(() => import('../pages/Tables/Tables'));

const WidgetFeed = lazy(() => import('../pages/Widgets/WidgetFeed'));
const WidgetApps = lazy(() => import('../pages/Widgets/WidgetApps'));

const LineChart = lazy(() => import('../pages/Charts/LineChart'));
const GradientChart = lazy(() => import('../pages/Charts/GradientChart'));
const DoughnutPieChart = lazy(() => import('../pages/Charts/DoughnutPieChart'));
const AreaChart = lazy(() => import('../pages/Charts/AreaChart'));
const ColumnChart = lazy(() => import('../pages/Charts/ColumnChart'));
const CandlestickChart = lazy(() => import('../pages/Charts/CandlestickChart'));
const RadialbarRadarChart = lazy(() => import('../pages/Charts/RadialbarRadarChart'));

const SignIn = lazy(() => import('../pages/Authentication/SignIn'));
const SignUp = lazy(() => import('../pages/Authentication/SignUp'));
const ResetPassword = lazy(() => import('../pages/Authentication/ResetPassword'));
const Error = lazy(() => import('../pages/Authentication/Error'));

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

              <Route path={APP_ROUTE.SHOP} element={<Shop />} />
              <Route path={APP_ROUTE.ALERT} element={<Alert />} />
              <Route path={APP_ROUTE.USER_PROFILE} element={<UserProfile />} />
              <Route path={APP_ROUTE.QUILL_EDITOR} element={<QuillEditor />} />
              <Route path={APP_ROUTE.TREEVIEW} element={<Treeview />} />
              <Route path={APP_ROUTE.PRICING} element={<Pricing />} />
              <Route path={APP_ROUTE.TYPOGRAPHY} element={<Typography />} />
              <Route path={APP_ROUTE.FEATHER_ICONS} element={<FeatherIcons />} />
              <Route path={APP_ROUTE.TIMELINE} element={<Timeline />} />

              <Route path={APP_ROUTE.FORM_CUSTOM} element={<FormCustom />} />
              <Route path={APP_ROUTE.FORM_ELEMENTS} element={<FormElements />} />
              <Route path={APP_ROUTE.FORM_LAYOUT} element={<FormLayout />} />
              <Route path={APP_ROUTE.FORM_WIZARD} element={<FormWizard />} />

              <Route path={APP_ROUTE.TABLES} element={<Tables />} />

              <Route path={APP_ROUTE.WIDGET_FEED} element={<WidgetFeed />} />
              <Route path={APP_ROUTE.WIDGET_APPS} element={<WidgetApps />} />

              <Route path={APP_ROUTE.LINE_CHART} element={<LineChart />} />
              <Route path={APP_ROUTE.GRADIENT_CHART} element={<GradientChart />} />
              <Route path={APP_ROUTE.DOUGHNUT_PIE_CHART} element={<DoughnutPieChart />} />
              <Route path={APP_ROUTE.AREA_CHART} element={<AreaChart />} />
              <Route path={APP_ROUTE.COLUMN_CHART} element={<ColumnChart />} />
              <Route path={APP_ROUTE.CANDLESTICK_CHART} element={<CandlestickChart />} />
              <Route path={APP_ROUTE.RADIAL_RADAR_CHART} element={<RadialbarRadarChart />} />
            </Route>
            <Route path={APP_ROUTE.SIGN_IN} element={<SignIn />} />
            <Route path={APP_ROUTE.SIGN_UP} element={<SignUp />} />
            <Route path={APP_ROUTE.RESET_PASSWORD} element={<ResetPassword />} />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}
