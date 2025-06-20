// src/index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pool from './config/db.js'; // Correctly imports the default export

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Test PostgreSQL connection route
app.get('/test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`The database time is: ${result.rows[0].now}`);
  } catch (error) {
    console.error('❌ Error connecting to the database', error);
    res.status(500).send('Error connecting to the database');
  }
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
