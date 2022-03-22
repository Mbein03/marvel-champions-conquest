// Set up db config
const knex = require('knex');
const config = require('../knexfile');
const fetch = require('node-fetch');
const db = knex(config.development);

const fetchCardsFromMarvelApi = async () => {
  const response = await fetch('https://marvelcdb.com/api/public/cards/');
  const json = await response.json();
  return json;
};

const FilterForMarvelApiCard = (card, marvelApiCards) => {
  const marvelApiCard = marvelApiCards.filter(
    (obj) =>
      obj.name === card.name &&
      obj.faction_name === card.faction &&
      obj.imagesrc
  )[0];

  return marvelApiCard;
};

const updateCardImage = async (card, marvelApiCard) => {
  const success = await db('cards')
    .where('id', card.id)
    .update({
      marvel_cdb_id: marvelApiCard.code,
      image_path: marvelApiCard.imagesrc,
    })
    .returning('*');

  return success;
};

const updateCardImages = async () => {
  const marvelApiCards = await fetchCardsFromMarvelApi();
  const cardsMissingImage = await db('cards').whereNull('image_path');
  const updatedCardIds = [];

  cardsMissingImage.forEach((card) => {
    const marvelApiCard = FilterForMarvelApiCard(card, marvelApiCards);

    if (marvelApiCard) {
      const success = updateCardImage(card, marvelApiCard);
      if (success) updatedCardIds.push(card.id);
    }
  });

  const updatedCards = await db('cards').whereIn('id', updatedCardIds);
  return updatedCards;
};

const fetchCardPool = async () => {
  const cards = await db('cards').where('qty', '>', 0);
  return cards;
};

const markCardAcquired = async (data) => {
  // Decrement card qty and mark as acquired
  await db('cards')
    .where('id', data.card.id)
    .update({
      qty: data.card.qty - 1,
      is_acquired: 1,
    });

  // Query for updated card row in DB
  return db('cards').where('id', data.card.id).first();
};

const markCardSold = async (data) => {
  // Increment card qty
  await db('cards')
    .where('id', data.card.id)
    .update({
      qty: data.card.qty + 1,
    });

  // Query for updated card row in DB
  return db('cards').where('id', data.card.id).first();
};

module.exports = {
  updateCardImages,
  fetchCardPool,
  markCardAcquired,
  markCardSold,
};
