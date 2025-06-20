// src/config/db.js
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: "1234",
  port: parseInt(process.env.DB_PORT || '5432', 10),
  // Removed ssl block
});

pool.on('connect', () => {
  console.log('✅ Connected to the PostgreSQL database');
});

export default pool;
