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
    type: Date
  },
  player_favourite_game:{
    type: String
  },
  player_status: {
    type: String
  },
  player_games_played: {
    type: Array
  }
}, {
  collection: 'players'
})

module.exports = mongoose.model('Player', Player)