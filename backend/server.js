
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import passport from 'passport';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import './passportSetup.js';
import authRoutes from './routes/authRoutes.js';
import posts from './routes/posts.js';
import cors from 'cors';
import adminRoute from './routes/adminRoute.js';
import comments from './routes/comments.js';


dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use(session({
  secret: process.env.COOKIE_KEY,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    ttl: 14 * 24 * 60 * 60,
  }),
}));

app.use(passport.initialize())
app.use(passport.session());
app.use(express.json());
app.use(cors());


app.use('/auth', authRoutes);
app.use('/api/posts', posts);
app.use('/api/admin', adminRoute);
app.use('/api/posts' , comments);


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
