const router = require('express').Router();
const { Location, Traveller, Trip } = require('../../models');

// GET all locations
router.get('/', async (req, res) => {
    try{
    const locationData = await Location.findAll()
    res.json(locationData)
    }
    catch(error) {
        res.status(500).json(error)
    }
});

// GET a single location
router.get('/:id', async (req, res) => {

});

// CREATE a location
router.post('/', async (req, res) => {

});

// DELETE a location
router.delete('/:id', async (req, res) => {

});

module.exports = router;
