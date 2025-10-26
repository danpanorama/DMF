import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Property from './src/models/propertyModel.js';
import connectDB from './src/config/db.js';
import { products } from '../client/src/database/productData.js'; // הנתונים הישנים שלך

dotenv.config();
await connectDB();

await Property.deleteMany();
await Property.insertMany(products);

console.log('✅ Data imported');
mongoose.connection.close();

