const express = require('express')
const carsData = require('../data/carsdb-config.js')

const router = express.Router()

router.get('/', (req, res) => {
    carsData('cars')
  .then(fruits => {
    res.json(fruits); 
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve cars' });
  });
})

router.post('/', (req, res) => {
    const cars = req.body;
  carsData('cars').insert(cars)
  .then(ids => {
    carsData('cars').where({ id: ids[0] })
    .then(newCarEntry => {
      res.status(201).json(newCarEntry);
    });
})
})


module.exports = router;