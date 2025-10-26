import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  rooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  floor: { type: String  },
  size: { type: Number },
  address: { type: String },
  images: [{ type: String }], // שמור רק URL או נתיב public
  businessPotential: { type: String },
  price: { type: Number },
}, { timestamps: true });

export default mongoose.model('Property', propertySchema);
