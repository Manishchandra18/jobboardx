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

const allowedOrigins = process.env.CORS_ORIGIN?.split(',') || [];

// ✅ Before any routes
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// ✅ This MUST be before any routes
app.options('*', cors(corsOptions));



// ✅ JSON parsing
app.use(json());

// ✅ Health check
app.get('/api', (req, res) => {
  res.json({ status: 'OK', message: 'JobBoardX API is running ✨' });
});

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);

// ✅ Server start
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} ✨`));
