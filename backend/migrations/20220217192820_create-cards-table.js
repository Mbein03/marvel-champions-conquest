/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('cards', (table) => {
    table.increments(),
      table.string('name').index().notNullable(),
      table.string('faction').notNullable(),
      table.string('tier'),
      table.integer('qty').notNullable(),
      table.boolean('p1_acquired').defaultTo(0),
      table.boolean('p2_acquired').defaultTo(0);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cards');
};
