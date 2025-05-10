import { Schema, model } from 'mongoose';

const applicationSchema = new Schema({
  job: {
    type: Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  
  applicant: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  resumeLink: {
    type: String,
    required: true
  },
  coverLetter: {
    type: String
  },
  status: {
    type: String,
    enum: ['Submitted', 'Under Review', 'Shortlisted', 'Rejected', 'Hired'], 
    default: 'Submitted',
  }
}, { timestamps: true });

export default model('Application', applicationSchema);
