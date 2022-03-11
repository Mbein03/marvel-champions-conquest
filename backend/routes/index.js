const express = require('express');
const server = express.Router();
const Cards = require('../models/card');
const Players = require('../models/player');

server.get('/api/cards', (req, res) => {
  const fetch = async () => {
    try {
      const cards = await Cards.fetch();
      res.status(200).json(cards);
    } catch (error) {
      res.status(500).json({ message: 'Unable to retrieve cards.' });
    }
  };

  fetch();
});

server.get('/api/players', (req, res) => {
  const fetch = async () => {
    try {
      const players = await Players.fetch();
      res.status(200).json(players);
    } catch (error) {
      res.status(500).json({ message: 'Unable to retrieve players.' });
    }
  };

  fetch();
});

server.post('/api/cards/mark-looted', (req, res) => {
  Cards.markLooted(req.body)
    .then((card) => {
      res.status(200).json(card);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'Unable to mark card as looted.' });
    });
});

// server.post('/api/cards/mark-sold', (req, res) => {
//   Cards.markSold(req.body)
//     .then((card) => {
//       res.status(200).json(card);
//     })
//     .catch((error) => {
//       console.log(error);
//       res.status(500).json({ message: 'Unable to mark card as sold.' });
//     });
// });

module.exports = server;
