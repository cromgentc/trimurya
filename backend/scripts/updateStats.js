import dotenv from 'dotenv';
import mongoose from 'mongoose';
import GenericContent from '../src/models/GenericContent.js';

dotenv.config();

async function update() {
  await mongoose.connect(process.env.MONGO_URI);
  await GenericContent.updateMany({ type: 'stats' }, [
    { $set: { value: { $toInt: { $trim: { input: { $substr: ['$value', 0, { $indexOfCP: ['$value', { $literal: '+' }] > -1 ? { $indexOfCP: ['$value', '+'] } : { $indexOfCP: ['$value', '%'] } > -1 ? { $indexOfCP: ['$value', '%'] } : { $strLenCP: '$value' }] } } } ] }, suffix: { $cond: { then: { $substr: ['$value', { $indexOfCP: ['$value', { $literal: '+' }] > -1 ? { $indexOfCP: ['$value', '+'] } : { $indexOfCP: ['$value', '%'] } > -1 ? { $indexOfCP: ['$value', '%'] } : { $strLenCP: '$value' } }, { $strLenCP: '$value' } ] }, else: '' } } } ]
  });
  console.log('Updated stats');
  await mongoose.disconnect();
}

update().catch(err => { console.error(err); process.exit(1); });
