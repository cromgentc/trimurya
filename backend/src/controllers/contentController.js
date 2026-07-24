import GenericContent from '../models/GenericContent.js';

function flatten(item) {
  const obj = item.toObject ? item.toObject() : item;
  if (obj && obj.metadata) {
    const { metadata, ...rest } = obj;
    return { ...rest, ...metadata };
  }
  return obj;
}

export async function listContent(type, filters = {}) {
  const query = { type };
  if (filters.status) query.status = filters.status;
  if (filters.slug) query.slug = filters.slug;
  const items = await GenericContent.find(query).sort('-createdAt');
  return { success: true, data: items.map(flatten) };
}

export async function getSingleContent(type, id) {
  const item = await GenericContent.findOne({ _id: id, type });
  if (!item) throw new Error('Content not found');
  return { success: true, data: flatten(item) };
}

export async function createContent(type, body) {
  const { metadata, ...rest } = body;
  const item = await GenericContent.create({ ...rest, type, metadata: metadata || rest });
  return { success: true, data: flatten(item) };
}

export async function updateContent(type, id, body) {
  const { metadata, ...rest } = body;
  const item = await GenericContent.findOneAndUpdate(
    { _id: id, type },
    { ...rest, metadata: metadata || rest },
    { new: true, strict: false }
  );
  if (!item) throw new Error('Content not found');
  return { success: true, data: flatten(item) };
}

export async function deleteContent(type, id) {
  const item = await GenericContent.findOneAndDelete({ _id: id, type });
  if (!item) throw new Error('Content not found');
  return { success: true, data: flatten(item) };
}
