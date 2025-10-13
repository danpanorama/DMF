import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Property from './models/propertyModel.js';
import connectDB from './config/db.js';
import { products } from './src/database/productData.js'; // הנתונים הישנים שלך

dotenv.config();
await connectDB();

await Property.deleteMany();
await Property.insertMany(products);

console.log('✅ Data imported');
mongoose.connection.close();
