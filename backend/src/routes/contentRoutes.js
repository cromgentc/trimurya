import express from 'express';
import GenericContent from '../models/GenericContent.js';
import User from '../models/User.js';
import { createContent, listContent, getSingleContent, updateContent, deleteContent } from '../controllers/contentController.js';
import { protect, authorize } from '../middlewares/authMiddleware.js';

const router = express.Router();

const resources = [
  'services', 'industries', 'projects', 'clients',
  'team', 'blogs', 'jobs', 'applications', 'resumes',
  'testimonials', 'gallery', 'newsletter', 'appointments',
  'meetings', 'tickets', 'notifications', 'seo', 'settings',
  'analytics', 'activity-logs', 'stats', 'values', 'nav-links',
  'videos'
];

resources.forEach((resource) => {
  router.get(`/${resource}`, protect, authorize('admin', 'employee'), async (req, res, next) => {
    try {
      const result = await listContent(resource);
      res.json(result);
    } catch (error) {
      next(error);
    }
  });

  router.get(`/${resource}/public`, async (req, res, next) => {
    try {
      const filters = { status: 'published' };
      if (req.query.slug) filters.slug = req.query.slug;
      const result = await listContent(resource, filters);
      res.json(result);
    } catch (error) {
      next(error);
    }
  });

  router.get(`/${resource}/:id`, protect, authorize('admin', 'employee'), async (req, res, next) => {
    try {
      const result = await getSingleContent(resource, req.params.id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  });

  router.post(`/${resource}`, protect, authorize('admin'), async (req, res, next) => {
    try {
      const result = await createContent(resource, req.body);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  });

  router.put(`/${resource}/:id`, protect, authorize('admin'), async (req, res, next) => {
    try {
      const result = await updateContent(resource, req.params.id, req.body);
      res.json(result);
    } catch (error) {
      next(error);
    }
  });

  router.delete(`/${resource}/:id`, protect, authorize('admin'), async (req, res, next) => {
    try {
      const result = await deleteContent(resource, req.params.id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  });
});

router.get('/dashboard/summary', async (req, res) => {
  try {
    const [
      projects,
      services,
      blogs,
      industries,
      users
    ] = await Promise.all([
      GenericContent.countDocuments({ type: 'projects' }),
      GenericContent.countDocuments({ type: 'services' }),
      GenericContent.countDocuments({ type: 'blogs' }),
      GenericContent.countDocuments({ type: 'industries' }),
      User.countDocuments()
    ]);

    res.json({
      success: true,
      data: { projects, services, blogs, industries, users }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to load dashboard data' });
  }
});

export default router;
