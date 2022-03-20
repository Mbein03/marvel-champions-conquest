const express = require('express');
const server = express.Router();
const Card = require('../models/card');
const Player = require('../models/player');

server.get('/api/cards/pool', (req, res) => {
  const execute = async () => {
    try {
      const cards = await Card.getAvailable();
      res.status(200).json(cards);
    } catch (error) {
      res.status(500).json({ message: 'Unable to retrieve card pool.' });
    }
  };

  execute();
});

server.get('/api/cards/update-images', (req, res) => {
  const execute = async () => {
    try {
      const cards = await Card.updateImages();
      res.status(200).json(cards);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Unable to update card images.' });
    }
  };

  execute();
});

server.get('/api/players', (req, res) => {
  const execute = async () => {
    try {
      const players = await Player.fetch();
      res.status(200).json(players);
    } catch (error) {
      res.status(500).json({ message: 'Unable to retrieve players.' });
    }
  };

  execute();
});

server.post('/api/cards/mark-acquired', (req, res) => {
  const execute = async () => {
    try {
      const card = await Card.markAcquired(req.body.data);
      res.status(200).json(card);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Unable to mark card as acquired.' });
    }
  };

  execute();
});

server.post('/api/cards/mark-sold', (req, res) => {
  const execute = async () => {
    try {
      const card = await Card.markSold(req.body.data);
      console.log(card);
      res.status(200).json(card);
    } catch (error) {
      res.status(500).json({ message: 'Unable to mark card as sold.' });
    }
  };

  execute();
});

module.exports = server;
