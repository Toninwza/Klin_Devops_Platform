import express from 'express';
import cors from 'cors';
import perfumeRoutes from './routes/perfumes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/perfumes', perfumeRoutes);

// Health check endpoint (Critical for Docker/K8s)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Backend running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
