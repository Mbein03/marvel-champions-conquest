const Card = require('../models/Card');

exports.updateCardImages = async (req, res) => {
  try {
    const cards = await Card.updateCardImages();
    res.status(200).json(cards);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Unable to update card images.' });
  }
};

exports.fetchCardPool = async (req, res) => {
  try {
    const cards = await Card.fetchCardPool();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: 'Unable to retrieve card pool.' });
  }
};

exports.markCardAcquired = async (req, res) => {
  try {
    const card = await Card.markCardAcquired(req.body.data);
    res.status(200).json(card);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Unable to mark card as acquired.' });
  }
};

exports.markCardSold = async (req, res) => {
  try {
    const card = await Card.markCardSold(req.body.data);
    console.log(card);
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ message: 'Unable to mark card as sold.' });
  }
};
