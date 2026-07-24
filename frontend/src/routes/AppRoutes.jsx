import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Services from '../pages/Services.jsx';
import AiProjectManagement from '../pages/AiProjectManagement.jsx';
import WebsiteDevelopment from '../pages/WebsiteDevelopment.jsx';
import DigitalMarketing from '../pages/DigitalMarketing.jsx';
import BusinessConsultancy from '../pages/BusinessConsultancy.jsx';
import HrConsultancy from '../pages/HrConsultancy.jsx';
import MobileAppDevelopment from '../pages/MobileAppDevelopment.jsx';
import CloudSolutions from '../pages/CloudSolutions.jsx';
import Cybersecurity from '../pages/Cybersecurity.jsx';
import Industries from '../pages/Industries.jsx';
import Projects from '../pages/Projects.jsx';
import ProjectDetail from '../pages/ProjectDetail.jsx';
import Marketplace from '../pages/Marketplace.jsx';
import Careers from '../pages/Careers.jsx';
import Blog from '../pages/Blog.jsx';
import Contact from '../pages/Contact.jsx';
import Auth from '../pages/Auth.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import NotFound from '../pages/NotFound.jsx';
import AdminLayout from '../admin/layout/AdminLayout.jsx';
import AdminLogin from '../admin/pages/AdminLogin.jsx';
import AdminDashboard from '../admin/pages/AdminDashboard.jsx';
import AdminContentManager from '../admin/pages/AdminContentManager.jsx';
import AdminUsers from '../admin/pages/AdminUsers.jsx';
import AdminSettings from '../admin/pages/AdminSettings.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/ai-project-management" element={<AiProjectManagement />} />
        <Route path="services/website-development" element={<WebsiteDevelopment />} />
        <Route path="services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="services/business-consultancy" element={<BusinessConsultancy />} />
        <Route path="services/hr-consultancy" element={<HrConsultancy />} />
        <Route path="services/mobile-app-development" element={<MobileAppDevelopment />} />
        <Route path="services/cloud-solutions" element={<CloudSolutions />} />
        <Route path="services/cybersecurity" element={<Cybersecurity />} />
        <Route path="industries" element={<Industries />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="careers" element={<Careers />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Auth />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="admin/login" element={<AdminLogin />} />
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="content/:type" element={<AdminContentManager />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>
    </Routes>
  );
}
