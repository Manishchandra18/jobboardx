import { Schema, model } from 'mongoose';

const jobSchema = new Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  role: { type: String, required: true }, // e.g., "Full-time", "Part-time"
  description: { type: String, required: true },
  salary: { type: String }, // optional
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

export default model('Job', jobSchema);
