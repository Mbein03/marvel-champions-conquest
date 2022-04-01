const express = require('express');
const server = express.Router();

const PlayerController = require('../controllers/PlayerController');
const CardController = require('../controllers/CardController');

server.get('/api/players', PlayerController.fetchPlayers);
server.post('/api/player/update-credits', PlayerController.updateCredits);
server.post('/api/player/mark-scheme-thwarted', PlayerController.markSchemeThwarted);

server.get('/api/cards/pool', CardController.fetchCardPool);
server.get('/api/cards/update-images', CardController.updateCardImages);

server.post('/api/card/mark-acquired', CardController.markCardAcquired);
server.post('/api/card/mark-sold', CardController.markCardSold);

module.exports = server;
