const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get all equipment inventory items
router.get('/equipmentInventory', (req, res) => {
  const query = 'SELECT * FROM equipment';  // Query to fetch all inventory items
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send({ message: 'Database query error', error: err });
    } else {
      res.status(200).json(results);
    }
  });
});

// POST route to add a new equipment
router.post('/addEquipment', (req, res) => {
  const { name, type, quantity, location, notes } = req.body;

  const query = 'INSERT INTO equipment (name, type, quantity, location, notes) VALUES (?, ?, ?, ?, ?)';
  
  db.query(query, [name, type, quantity, location, notes], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error adding equipment', error: err });
    }
    res.status(200).json({ message: 'Equipment added successfully', result });
  });
});

module.exports = router;

