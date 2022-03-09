import * as constants from './constants';

// Returns integer between two intervals
export const randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// Returns array of strings
// Filter loot table and return potential results based on tier selected
export const getPotentialLoot = (lootTable, lootTier) =>
  lootTable.filter((obj) => obj.tier === lootTier).map((obj) => obj.roll)[0];

// Returns string
// Determine roll result
export const getLootRollResult = (potentialLoot) =>
  potentialLoot[Math.floor(Math.random() * potentialLoot.length)];

// Returns string
// Get tier result for loot drop
export const getTier = (roll) =>
  roll.includes('None') ? 'None' : roll.split(' ')[1];

// Returns string
// Get faction result for loot drop
export const getFaction = (roll) => {
  if (roll.includes('None')) {
    return 'None';
  } else if (roll.includes('Roll')) {
    return constants.factions[randomIntFromInterval(0, 5)];
  } else {
    return roll.split(' ')[2];
  }
};

// Returns array of objects
// Filter out cards from array based on quantity, tier, and faction
export const filterCards = (tier, faction, availableCards) =>
  availableCards
    .filter((obj) => obj.qty > 0)
    .filter((obj) => obj.tier === tier)
    .filter((obj) => obj.faction === faction);

// Returns array of objects
// Add additional rows to cards array based on qty of cards available
export const getPotentialCards = (filteredCards) => {
  const cards = filteredCards;

  // Loop over each card and add additional rows to cards array based on qty
  filteredCards.forEach((card) => {
    if (card.qty > 1) {
      for (let i = 1; i < card.qty; i++) {
        cards.push(card);
      }
    }
  });

  return cards;
};

// Returns object
// Determine card result
export const getCard = (potentialCards) =>
  potentialCards.length
    ? potentialCards[Math.floor(Math.random() * potentialCards.length)]
    : { name: 'None' };
