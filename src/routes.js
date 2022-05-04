import { Navigate, useRoutes } from 'react-router-dom';
import Layout from './layouts';
import DashboardApp from './pages/DashboardApp';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <DashboardApp /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
