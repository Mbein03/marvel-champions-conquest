/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('player_cards', (table) => {
    table.increments(),
      table
        .integer('player_id')
        .unsigned()
        .notNullable()
        .references('player_id')
        .inTable('players')
        .onDelete('CASCADE'),
      table
        .integer('card_id')
        .unsigned()
        .notNullable()
        .references('card_id')
        .inTable('cards')
        .onDelete('CASCADE'),
      table.integer('qty').unsigned().notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
