const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

const fetchPlayers = async () => {
  const players = await db('players');

  for (const player of players) {
    const playerCards = await fetchPlayerCards(player);
    player.cards = playerCards;
  }

  return players;
};

const fetchPlayerCards = async (player) => {
  const playerCards = await db
    .select('pc.id AS player_card_id', 'c.card_id', 'c.name', 'c.faction', 'c.tier', 'c.image_path', 'pc.qty')
    .from('cards as c')
    .join('player_cards AS pc', 'c.card_id', '=', 'pc.card_id')
    .join('players AS p', 'p.player_id', '=', 'pc.player_id')
    .where('pc.qty', '>', 0)
    .where('p.player_id', player.player_id)
    .orderBy('c.faction')
    .orderBy('c.tier')
    .orderBy('c.name');

  return playerCards;
};

const markSchemeThwarted = async (data) => {
  await db('players')
    .where('player_id', data.player.player_id)
    .update({
      credits: data.player.credits + 25,
    });

  const players = await fetchPlayers();

  return players;
};

module.exports = {
  fetchPlayers,
  markSchemeThwarted,
};
