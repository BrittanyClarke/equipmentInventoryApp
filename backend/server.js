const express = require('express');
const cors = require('cors');
const app = express();
const inventoryRoutes = require('./routes/equipmentInventory');

// Middleware
app.use(cors());  // Allows the frontend to make requests to this backend
app.use(express.json());  // Automatically parses incoming JSON requests

// API Routes
app.use('/api', inventoryRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

