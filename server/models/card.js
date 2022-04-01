const knex = require('knex');
const config = require('../knexfile');
const fetch = require('node-fetch');
const db = knex(config.development);
const Player = require('../models/Player');

const fetchCardPool = async () => {
  const cards = await db('cards').where('qty', '>', 0);
  return cards;
};

const markCardAcquired = async (data) => {
  await db('cards')
    .where('card_id', data.card.card_id)
    .update({
      qty: data.card.qty - 1,
    });

  const playerCard = await db('player_cards')
    .where('player_id', data.player.player_id)
    .where('card_id', data.card.card_id)
    .first();

  if (playerCard) {
    await db('player_cards')
      .where('player_id', data.player.player_id)
      .where('card_id', data.card.card_id)
      .update({
        qty: playerCard.qty + 1,
      });
  } else {
    await db('player_cards').insert({
      player_id: data.player.player_id,
      card_id: data.card.card_id,
      qty: 1,
    });
  }

  if (data.purchase) {
    const prices = { B: 250, A: 500, S: 1000 };
    const player = await db('players').where('player_id', data.player.player_id).first();
    const cost = prices[data.card.tier];

    await db('players')
      .where('player_id', data.player.player_id)
      .update({
        credits: player.credits - cost,
      });
  }

  const players = await Player.fetchPlayers();

  return players;
};

const markCardSold = async (data) => {
  const soldCard = await db('cards').where('card_id', data.card.card_id).first();

  await db('cards')
    .where('card_id', soldCard.card_id)
    .update({
      qty: soldCard.qty + 1,
    });

  const playerCard = await db('player_cards')
    .where('player_id', data.player.player_id)
    .where('card_id', soldCard.card_id)
    .first();

  await db('player_cards')
    .where('player_id', data.player.player_id)
    .where('card_id', soldCard.card_id)
    .update({
      qty: playerCard.qty - 1,
    });

  const player = await db('players').where('player_id', data.player.player_id).first();
  const creditsFromSale = soldCard.faction === 'Basic' ? 25 : 50;

  await db('players')
    .where('player_id', data.player.player_id)
    .update({
      credits: player.credits + creditsFromSale,
    });

  const players = await Player.fetchPlayers();

  return players;
};

const updateCardImages = async () => {
  const marvelApiCards = await fetchCardsFromMarvelApi();
  const cardsMissingImage = await db('cards').whereNull('image_path');
  const updatedCardIds = [];

  cardsMissingImage.forEach((card) => {
    const marvelApiCard = findMarvelApiCardMatch(card, marvelApiCards);

    if (marvelApiCard) {
      const success = updateCardImage(card, marvelApiCard);
      if (success) updatedCardIds.push(card.card_id);
    }
  });

  const updatedCards = await db('cards').whereIn('card_id', updatedCardIds);
  return updatedCards;
};

const fetchCardsFromMarvelApi = async () => {
  const response = await fetch('https://marvelcdb.com/api/public/cards/');
  const json = await response.json();
  return json;
};

const findMarvelApiCardMatch = (card, marvelApiCards) => {
  const marvelApiCard = marvelApiCards.filter(
    (obj) => obj.name === card.name && obj.faction_name === card.faction && obj.imagesrc
  )[0];

  return marvelApiCard;
};

const updateCardImage = async (card, marvelApiCard) => {
  const success = await db('cards').where('card_id', card.card_id).update({
    marvel_cdb_id: marvelApiCard.code,
    image_path: marvelApiCard.imagesrc,
  });

  return success;
};

module.exports = {
  updateCardImages,
  fetchCardPool,
  markCardAcquired,
  markCardSold,
};
