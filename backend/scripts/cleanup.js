import dotenv from 'dotenv';
import mongoose from 'mongoose';
import GenericContent from '../src/models/GenericContent.js';

dotenv.config();

async function cleanup() {
  await mongoose.connect(process.env.MONGO_URI);
  await GenericContent.deleteMany({ type: { $in: ['services', 'projects', 'industries', 'stats', 'values', 'blogs', 'jobs', 'clients', 'team', 'testimonials'] } });
  console.log('Cleaned up generic content');
  await mongoose.disconnect();
}

cleanup().catch(err => { console.error(err); process.exit(1); });
