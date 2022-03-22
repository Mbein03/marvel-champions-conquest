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
    .select(
      'pc.id AS player_card_id',
      'c.id AS card_id',
      'c.name',
      'c.faction',
      'c.tier',
      'c.image_path',
      'pc.qty'
    )
    .from('cards as c')
    .join('player_cards AS pc', 'c.id', '=', 'pc.card_id')
    .join('players AS p', 'p.id', '=', 'pc.player_id')
    .where('pc.qty', '>', 0)
    .where('p.id', player.id);

  return playerCards;
};

module.exports = {
  fetchPlayers,
};
