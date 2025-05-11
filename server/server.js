import express, { json } from 'express';
import { config } from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';

// Route imports (use full paths with .js extensions!)
import authRoutes from './routes/authRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import applicationRoutes from './routes/applicationRoutes.js';

config();
connectDB();

const app = express();

// ✅ Read allowed origins from .env
const allowedOrigins = process.env.CORS_ORIGIN?.split(',') || [];

// ✅ Define consistent CORS options
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error('❌ CORS blocked:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

// ✅ Apply CORS middleware before all routes
app.use(cors(corsOptions));

// ✅ Handle preflight OPTIONS requests with the same options
app.options('*', cors(corsOptions));

// ✅ Parse incoming JSON
app.use(json());

// ✅ Health check route
app.get('/', (req, res) => {
  res.json({ status: 'OK', message: 'JobBoardX API is running ✨' });
});

// ✅ Main API routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);

// ✅ Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} ✨`));
