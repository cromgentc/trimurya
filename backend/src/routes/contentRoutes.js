import express from 'express';
import { createContent, listContent } from '../controllers/contentController.js';
import { protect, authorize } from '../middlewares/authMiddleware.js';

const router = express.Router();
const resources = ['users', 'services', 'industries', 'projects', 'clients', 'team', 'blogs', 'jobs', 'applications', 'resumes', 'testimonials', 'gallery', 'newsletter', 'appointments', 'meetings', 'tickets', 'notifications', 'seo', 'settings', 'analytics', 'activity-logs'];

resources.forEach((resource) => {
  router.get(`/${resource}`, listContent(resource));
  router.post(`/${resource}`, protect, authorize('admin', 'employee'), createContent(resource));
});

router.get('/dashboard/summary', (req, res) => {
  res.json({
    success: true,
    data: {
      projects: 500,
      clients: 250,
      professionals: 100,
      industries: 20
    }
  });
});

export default router;
