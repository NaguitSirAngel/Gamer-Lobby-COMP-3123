const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Player = new Schema({
  player_name: {
    type: String
  },
  player_rank: {
    type: String
  },
  player_score: {
    type: String
  },
  player_time: {
    type: String
  },
  player_favourite_game: {
    type: String
  },
  player_status: {
    type: String
  }
}, {
  collection: 'students'
})

module.exports = mongoose.model('Player', Player)