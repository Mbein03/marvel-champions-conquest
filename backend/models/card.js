// Set up db config
const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

module.exports = {
  fetch,
  markLooted,
  markSold,
};

async function fetch() {
  // Fetch all cards from DB
  const cards = await db('cards').where('qty', '>', 0);
  return cards;
}

async function markLooted(data) {
  // Decrement card qty and mark as acquired for player

  // await db('cards')
  //   .where('id', data.json.card.id)
  //   .update({
  //     qty: data.json.card.qty - 1,
  //     is_acquired: 1,
  //   });

  // Query for updated card row in DB
  return db('cards').where('id', data.json.card.id);
}

async function markSold(data) {
  // Mark as acquired for player
  // if (data.player.id === 1) {
  //   await db('cards')
  //     .where('id', data.card.id)
  //     .update({
  //       qty: data.card.qty + 1,
  //       p1_acquired: 1,
  //     });
  // } else {
  //   await db('cards')
  //     .where('id', data.card.id)
  //     .update({
  //       qty: data.card.qty + 1,
  //       p2_acquired: 1,
  //     });
  // }
  // Query for updated card row in DB
  // return db('cards').where('id', data.card.id);
}
