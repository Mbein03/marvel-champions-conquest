// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/mcc-master.db3',
    },
    useNullAsDefault: true,
  },
};
