const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Game = new Schema({
  game_title: {
    type: String
  },
  game_platform: {
    type: String
  },
  game_genre: {
    type: String
  },
  game_rating: {
    type: String
  },
  game_publisher:{
    type: String
  },
  game_release: {
    type: String
  },
  game_status: {
    type: String
  }
}, {
  collection: 'games'
})

module.exports = mongoose.model('Game', Game)