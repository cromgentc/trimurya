import GenericContent from '../models/GenericContent.js';

export function listContent(type) {
  return async (req, res, next) => {
    try {
      const items = await GenericContent.find({ type }).sort('-createdAt');
      res.json({ success: true, data: items });
    } catch (error) {
      next(error);
    }
  };
}

export function createContent(type) {
  return async (req, res, next) => {
    try {
      const item = await GenericContent.create({ ...req.body, type });
      res.status(201).json({ success: true, data: item });
    } catch (error) {
      next(error);
    }
  };
}
