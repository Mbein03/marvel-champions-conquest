import { factions } from './constants';

export const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const getFactionAndTier = (table, lootDrop) => {
  const filteredResults = filterTableByLootDrop(table, lootDrop);
  const result = rollRandomResult(filteredResults);
  const resultTier = parseTierFromResultString(result);
  const resultFaction = parseFactionFromResultString(result);

  return { resultTier, resultFaction };
};

const filterTableByLootDrop = (table, lootDrop) => {
  return table.filter((obj) => obj.lootDrop === lootDrop).map((obj) => obj.results)[0];
};

const rollRandomResult = (filteredResults) => {
  return filteredResults[Math.floor(Math.random() * filteredResults.length)];
};

const parseTierFromResultString = (result) => {
  return result.includes('None') ? 'None' : result.split(' ')[1];
};

const parseFactionFromResultString = (result) => {
  if (result.includes('None')) return 'None';
  if (result.includes('Roll')) return factions[randomIntFromInterval(0, 5)].name;

  return result.split(' ')[2];
};

export const getCard = (tier, faction, cards) => {
  const filteredCards = filterCardsByTierAndFaction(tier, faction, cards);
  const potentialCards = addExtraRowsPerCardQuantity(filteredCards);
  const card = rollRandomCard(potentialCards);

  return card;
};

export const filterCardsByTierAndFaction = (tier, faction, cards) =>
  cards.filter((obj) => obj.tier === tier).filter((obj) => obj.faction === faction);

export const addExtraRowsPerCardQuantity = (cards) => {
  const potentialCards = cards;

  cards.forEach((card) => {
    if (card.qty > 1) {
      for (let i = 1; i < card.qty; i++) {
        potentialCards.push(card);
      }
    }
  });

  return potentialCards;
};

export const rollRandomCard = (cards) => (cards.length ? cards[Math.floor(Math.random() * cards.length)] : null);
