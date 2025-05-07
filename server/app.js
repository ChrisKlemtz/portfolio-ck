const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');

// Load env vars
require('dotenv').config({ path: './config/config.env' });

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(cookieParser());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100
});
app.use(limiter);

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Routes will go here
// Example: app.use('/api/v1/auth', require('./routes/auth'));

// Error handling middleware
// Will add later

module.exports = app;