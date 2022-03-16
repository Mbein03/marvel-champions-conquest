// Set up db config
const knex = require('knex');
const config = require('../knexfile');
const fetch = require('node-fetch');
const db = knex(config.development);

module.exports = {
  getAvailable,
  updateImages,
  markLooted,
  markSold,
};

async function getAvailable() {
  // Fetch all cards from DB
  const cards = await db('cards').where('qty', '>', 0);
  return cards;
}

async function updateImages() {
  // Fetch all cards from marvel cdb API
  const response = await fetch('https://marvelcdb.com/api/public/cards/');
  const responseData = await response.json();

  // Pull cards w/ missing images
  const cards = await db('cards').whereNull('image_path');
  const updatedCardIds = [];

  cards.forEach((card) => {
    // Loop over cards from API and find matches to those in local DB by name
    const cardData = responseData.filter((obj) => obj.name === card.name);

    // If card has match and image, then update local DB
    if (cardData[0] && cardData[0].imagesrc) {
      async function update() {
        const updatedCard = await db('cards')
          .where('id', card.id)
          .update({
            marvel_cdb_id: cardData[0].code,
            image_path: cardData[0].imagesrc,
          })
          .returning('*');
      }

      update();
      updatedCardIds.push(card.id);
    }
  });

  // Query for newly updated cards
  const updatedCards = await db('cards').whereIn('id', updatedCardIds);

  return updatedCards;
}

async function markLooted(data) {
  // Decrement card qty and mark as acquired
  // await db('cards')
  //   .where('id', data.card.id)
  //   .update({
  //     qty: data.card.qty - 1,
  //     is_acquired: 1,
  //   });

  // Query for updated card row in DB
  return db('cards').where('id', data.card.id).first();
}

async function markSold(data) {
  // Increment card qty
  // await db('cards')
  //   .where('id', data.card.id)
  //   .update({
  //     qty: data.card.qty + 1,
  //   });

  // Query for updated card row in DB
  return db('cards').where('id', data.card.id).first();
}
