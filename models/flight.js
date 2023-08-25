const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    required: true,
  },
  arrival: {
    type: Date,
    required: true,
    default: function() {
      return Date.now()
    }
  },
});



const flightSchema = new Schema({
    destinations: [destinationSchema],
    airline: {
      type: String,
      enum: ['American', 'Southwest', 'United'],
    },
    airport: {
      type: String,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
      default: 'DEN',
    },
    flightNo: {
      type: Number,
      required: true,
      min: 10,
      max: 9999,
    },
    departs: {
      type: Date,
      default: function () {
        const departDate = new Date();
        departDate.setFullYear(departDate.getFullYear() + 1);
        return departDate;
      },
    },
  });
  
module.exports = mongoose.model('Flight', flightSchema);``