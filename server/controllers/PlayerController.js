const Player = require('../models/Player');

exports.fetchPlayers = async (req, res) => {
  try {
    const players = await Player.fetchPlayers();
    res.status(200).json(players);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Unable to retrieve players.' });
  }
};

exports.updateCredits = async (req, res) => {
  try {
    const player = await Player.updateCredits(req.body.data);
    res.status(200).json(player);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Unable to update credits.' });
  }
};

exports.markSchemeThwarted = async (req, res) => {
  try {
    const player = await Player.markSchemeThwarted(req.body.data);
    res.status(200).json(player);
  } catch (error) {
    res.status(500).json({ message: 'Unable to mark scheme thwarted.' });
  }
};
