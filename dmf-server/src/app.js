import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
// import xss from 'xss-clean';
import hpp from 'hpp';
import compression from 'compression';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import meetingRoutes from './routes/meetingRoutes.js';
import propertyRoutes from './routes/propertyRoutes.js';
import reviewRoutes from "./routes/reviewRoutes.js";
import notFound from './middlewares/notFound.js';
import errorHandler from './middlewares/errorHandler.js';
import verifyRoutes from "./routes/verifyRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

// Core middlewares
app.use(helmet());
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));


// app.use(mongoSanitize());


// 🔒 mongoSanitize עם הגדרות בטוחות:
// רק body מנותח, לא query או params כדי למנוע TypeError
// app.use(mongoSanitize({
//   replaceWith: '_',      // תחליף כל key בעייתי ב־_
//   key: 'body'            // ⚠️ רק req.body - לא משנה getters כמו req.query
// }));


app.use((req, res, next) => {
  if (req.body) {
    req.body = mongoSanitize.sanitize(req.body, { replaceWith: '_' });
  }
  next();
});

// app.use(xss());
app.use(hpp());
app.use(compression());

// CORS

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true
}));

// Logger
if (process.env.NODE_ENV !== 'production') app.use(morgan('dev'));

// Rate limiter for api
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  message: { status: 'fail', message: 'Too many requests, try again later.' }
});
app.use('/api', apiLimiter);



// Routes
app.use('/api/properties', propertyRoutes);
app.use("/api/reviews", reviewRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/meetings', meetingRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/verify", verifyRoutes);
// 404 + error handler
app.use(notFound);
app.use(errorHandler);

export default app;
