const express = require('express');
const app = express();
const gameRoute = express.Router();

// Model
let Game = require('../model/Game');


// Fetch all
gameRoute.route('/').get((req, res) => {
    Game.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

module.exports = gameRoute;
  