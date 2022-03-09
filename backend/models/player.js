// Set up db config
const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

module.exports = {
  fetch,
};

async function fetch() {
  // Fetch all players from DB
  const players = await db('players');
  return players;
}
