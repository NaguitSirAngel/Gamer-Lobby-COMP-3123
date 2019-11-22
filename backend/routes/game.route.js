const express = require('express');
const app = express();
const playerRoute = express.Router();

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

module.exports = playerRoute;
  