import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Services from '../pages/Services.jsx';
import ServiceDetail from '../pages/ServiceDetail.jsx';
import Industries from '../pages/Industries.jsx';
import Projects from '../pages/Projects.jsx';
import Marketplace from '../pages/Marketplace.jsx';
import Careers from '../pages/Careers.jsx';
import Blog from '../pages/Blog.jsx';
import Contact from '../pages/Contact.jsx';
import Auth from '../pages/Auth.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import NotFound from '../pages/NotFound.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:serviceSlug" element={<ServiceDetail />} />
        <Route path="industries" element={<Industries />} />
        <Route path="projects" element={<Projects />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="careers" element={<Careers />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Auth />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
