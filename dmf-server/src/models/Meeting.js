import mongoose from 'mongoose';

const meetingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subject: { type: String, required: true, trim: true },
  date: { type: Date, required: true },
  location: { type: String }, // optional
  status: { type: String, enum: ['pending','confirmed','cancelled'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

meetingSchema.index({ user: 1, date: 1 });

export default mongoose.model('Meeting', meetingSchema);
