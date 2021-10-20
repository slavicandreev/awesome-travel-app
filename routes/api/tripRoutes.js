const router = require('express').Router();
const { Trip } = require('../../models');

// CREATE a trip
router.post('/', async (req, res) => {
  try {
    const {trip_budget, traveller_amount, traveller_id, location_id} = req.body;
    const newRow =  await Trip.create({trip_budget, traveller_amount, traveller_id, location_id});
    res.status(201).json(newRow);
  } catch (err) {
    res.status(500).json(err);
    console.error(err);
  }
});

// DELETE a trip
router.delete('/:id', async (req, res) => {
  try {
    const numRows = await Trip.destroy({id: req.params.id});
    res.status(200).json(numRows);
  } catch (err) {
    res.status(500).json(err);
    console.error(err);
  }
});

module.exports = router;
