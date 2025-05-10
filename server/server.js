import express, { json } from 'express';
import { config } from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';

config();
connectDB();

const app = express();


const allowedOrigins = [process.env.CORS_ORIGIN || '*'];


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


app.options('*', cors());


app.use(json());


app.get('/', (req, res) => {
  res.json({ status: 'OK', message: 'JobBoardX API is running ✨' });
});


app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/profile', require('./routes/profileRoutes'));
app.use('/api/jobs', require('./routes/jobRoutes'));
app.use('/api/applications', require('./routes/applicationRoutes'));


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} ✨`));
