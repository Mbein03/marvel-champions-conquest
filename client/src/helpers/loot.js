import { factions } from './constants';

// Returns integer between two intervals
export const randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// Returns array of strings
// Filter rewards table and return potential reward results based on loot drop selected
export const getPotentialRewardResults = (table, lootDrop) =>
  table.filter((obj) => obj.lootDrop === lootDrop).map((obj) => obj.results)[0];

// Returns string
// Determine reward result
export const getRewardResult = (results) =>
  results[Math.floor(Math.random() * results.length)];

// Returns string
// Get reward tier
export const getRewardTier = (result) =>
  result.includes('None') ? 'None' : result.split(' ')[1];

// Returns string
// Get reward faction
export const getRewardFaction = (result) => {
  if (result.includes('None')) {
    return 'None';
  } else if (result.includes('Roll')) {
    return factions[randomIntFromInterval(0, 5)].name;
  } else {
    return result.split(' ')[2];
  }
};

// Returns array of objects
// Filter out cards from array based on tier and faction
export const filterCards = (tier, faction, cardPool) =>
  cardPool
    .filter((obj) => obj.tier === tier)
    .filter((obj) => obj.faction === faction);

// Returns array of objects
// Add additional rows to cards array based on qty of cards available
export const getPotentialCards = (cards) => {
  const potentialCards = cards;

  // Loop over each card and add additional rows to cards array based on qty
  cards.forEach((card) => {
    if (card.qty > 1) {
      for (let i = 1; i < card.qty; i++) {
        potentialCards.push(card);
      }
    }
  });

  return potentialCards;
};

// Returns object OR null
// Determine card result
export const getCard = (cards) =>
  cards.length ? cards[Math.floor(Math.random() * cards.length)] : null;
