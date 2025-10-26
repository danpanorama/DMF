import 'dotenv/config';
import dotenv from 'dotenv';
dotenv.config();


import app from './src/app.js';
import connectDB from './src/config/db.js';
import logger from './src/utils/logger.js';

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB();
    const server = app.listen(PORT, () => {
      logger.info(`Server listening on port ${PORT}`);
      console.log(`Server listening on port ${PORT}`);
    });

    process.on('unhandledRejection', (err) => {
      logger.error('Unhandled Rejection', { err });
      server.close(() => process.exit(1));
    });

    process.on('uncaughtException', (err) => {
      logger.error('Uncaught Exception', { err });
      process.exit(1);
    });
  } catch (err) {
    // ← החלף את הקוד הזה כאן
    console.error('Failed to start server:', err);
    logger.error('Failed to start', { err: JSON.stringify(err, Object.getOwnPropertyNames(err)) });
    process.exit(1);
  }
};


start();
