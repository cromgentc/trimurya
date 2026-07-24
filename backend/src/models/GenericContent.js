import mongoose from 'mongoose';

const genericContentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, index: true },
    type: { type: String, required: true, index: true },
    summary: String,
    content: String,
    image: String,
    images: [String],
    status: { type: String, enum: ['draft', 'published', 'archived'], default: 'published' },
    metadata: { type: mongoose.Schema.Types.Mixed, default: {} }
  },
  { timestamps: true, strict: false }
);

genericContentSchema.index({ type: 1, slug: 1 }, { unique: true, sparse: true });

export default mongoose.model('GenericContent', genericContentSchema);
