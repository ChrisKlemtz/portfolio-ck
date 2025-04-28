const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

// Umgebungsvariablen laden
dotenv.config({ path: './config/config.env' });

// Datenbankverbindung
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

// Routen

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/blogs', require('./routes/blogRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/user', require('./routes/userRoutes'));

//fallback route
app.use((req, res, next) => {   // "next" vll raus <--
    res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port in ${process.env.NODE_ENV} Modus auf Port ${PORT}`);
});

//unbehandelte promises rejections abfragen 
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Server herunterfahren
    server.close(() => process.exit(1));
});

