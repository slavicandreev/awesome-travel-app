const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');


Trip.belongsTo(Traveller);
Trip.belongsTo(Location);

module.exports = { Traveller, Location, Trip };
