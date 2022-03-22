const express = require('express');
const server = express.Router();

const PlayerController = require('../controllers/PlayerController');
const CardController = require('../controllers/CardController');

server.get('/api/players', PlayerController.fetchPlayers);

server.get('/api/cards/update-images', CardController.updateCardImages);
server.get('/api/cards/pool', CardController.fetchCardPool);

server.post('/api/cards/mark-acquired', CardController.markCardAcquired);
server.post('/api/cards/mark-sold', CardController.markCardSold);

module.exports = server;
