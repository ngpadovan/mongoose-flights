const Flight = require('../models/flight');

module.exports = {
  create
};

async function create(req, res) {
  const flight = await Flight.findById(req.params.id);
  if (!req.body.arrival) {
    delete req.body.arrival
  }
  console.log(req.body)
  flight.destinations.push(req.body);
  console.log(req.body);

  try {
    await flight.save();
  } catch (err) {
    console.log(err);
  }

  res.redirect(`/flights/${flight._id}`);
}