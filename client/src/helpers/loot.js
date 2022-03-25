import { factions } from './constants';

// Returns integer between two intervals
export const randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// Returns array of strings (tier and faction)
// Filter rewards table and return potential reward results based on loot drop selected
export const getResult = (table, lootDrop) => {
  const potentialResults = table
    .filter((obj) => obj.lootDrop === lootDrop)
    .map((obj) => obj.results)[0];

  const result =
    potentialResults[Math.floor(Math.random() * potentialResults.length)];

  const tier = result.includes('None') ? 'None' : result.split(' ')[1];

  if (result.includes('None')) {
    var faction = 'None';
  } else if (result.includes('Roll')) {
    faction = factions[randomIntFromInterval(0, 5)].name;
  } else {
    faction = result.split(' ')[2];
  }

  return {
    tier,
    faction,
  };
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

export const determineCard = async (tier, faction, cardPool) => {
  const filteredCards = filterCards(tier, faction, cardPool);
  const potentialCards = getPotentialCards(filteredCards);
  const card = getCard(potentialCards);

  return card;
};
