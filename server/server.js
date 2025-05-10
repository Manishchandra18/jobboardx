import express, { json } from 'express';
import { config } from 'dotenv';
import connectDB from './config/db';
import cors from 'cors';

config();
connectDB();

const app = express();

// CORS handling
app.use(cors());

app.use(json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/profile', require('./routes/profileRoutes'));
app.use('/api/jobs', require('./routes/jobRoutes'));
app.use('/api/applications', require('./routes/applicationRoutes'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} ✨`));

app.get('/', (req, res) => {
    res.json({ status: 'OK', message: 'JobBoardX API is running ✨' });
  });
  

const allowedOrigins = [process.env.CORS_ORIGIN];

app.use(cors({
    origin: process.env.CORS_ORIGIN || '*', // ⚠️ tighten this in prod
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }));
