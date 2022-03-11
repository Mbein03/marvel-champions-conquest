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
  // Decrement card qty and mark as acquired
  await db('cards')
    .where('id', data.card.id)
    .update({
      qty: data.card.qty - 1,
      is_acquired: 1,
    });

  // Query for updated card row in DB
  return db('cards').where('id', data.card.id).first();
}

async function markSold(data) {
  // Increment card qty
  await db('cards')
    .where('id', data.card.id)
    .update({
      qty: data.card.qty + 1,
    });

  // Query for updated card row in DB
  return db('cards').where('id', data.card.id).first();
}
