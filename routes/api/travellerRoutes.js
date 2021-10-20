const router = require('express').Router();
const { Traveller, Trip, Location } = require('../../models');

// GET all travellers
router.get('/', async (req, res) => {
    try {
        const travellerData = await Traveller.findAll()
        res.status(200).json(travellerData);
    }
    catch(error) {
        res.status(500).json(error);
    }
    
});

// GET a single traveller
router.get('/:id', async (req, res) => {
    try {
        const travellerData = await Traveller.findByPk(req.params.id, {
            include: [{ model:Location, through: Trip, as: 'planned_trips'}]
        });
        if (!travellerData) {
            res.status(404).json({ message: 'No traveller data found'})
        }
        res.status(200).json(travellerData);
    }
    catch(error) {
        res.status(500).json(error);
    }
});

// CREATE a traveller
router.post('/', async (req, res) => {
    try {
        const travellerData = await Traveller.create({
            traveller_id: req.body.traveller_id,
        });
        res.status(200).json(travellerData);
    }
    catch(error) {
        res.status(400).json(error);
    }
});

// DELETE a traveller
router.delete('/:id', async (req, res) => {
    try{
        const travellerData = await Traveller.destroy({
            where: {
                id: req.params.id,
            }
        });
        if (!travellerData) {
            res.status(404).json({ message: 'No traveller data found'})
            return;
        }
        res.status(200).json(travellerData);
    }
    catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
