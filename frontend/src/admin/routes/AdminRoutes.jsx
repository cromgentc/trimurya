import AdminContentManager from './AdminContentManager.jsx';
import AdminDashboard from './AdminDashboard.jsx';
import AdminLogin from './AdminLogin.jsx';
import AdminUsers from './AdminUsers.jsx';

export default function AdminRoutes() {
  return {
    path: 'admin',
    children: [
      { path: 'login', element: <AdminLogin /> },
      {
        path: '',
        element: <AdminLayout />,
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: 'dashboard', element: <AdminDashboard /> },
          { path: 'content/:type', element: <AdminContentManager /> },
          { path: 'users', element: <AdminUsers /> },
          { path: 'settings', element: <AdminSettings /> },
        ],
      },
    ],
  };
}
