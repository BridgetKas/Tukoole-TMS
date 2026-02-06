const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors()); 
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(" MongoDB Connected via pnpm environment"))
  .catch(err => console.error("MongoDB Error:", err));

// Test Route
app.get('/api/health', (req, res) => {
  res.json({ status: "ok", framework: "Next.js + Express" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server on http://localhost:${PORT}`));