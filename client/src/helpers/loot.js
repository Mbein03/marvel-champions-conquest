import { factionRolls } from './constants';

export const getFactionAndTier = (table, lootDrop) => {
  const results = findResultsInTable(table, lootDrop);
  const result = rollRandomResult(results);
  const resultTier = parseTierFromResultString(result);
  const resultFaction = parseFactionFromResultString(result);

  return { resultTier, resultFaction };
};

export const getCard = (tier, faction, cards) => {
  const filteredCards = filterCardsByTierAndFaction(tier, faction, cards);
  const potentialCards = addExtraRowsPerCardQuantity(filteredCards);
  const card = rollRandomCard(potentialCards);

  return card;
};

const findResultsInTable = (table, lootDrop) => {
  return table.find((table) => table.lootDrop === lootDrop).results;
};

const rollRandomResult = (results) => {
  return results[Math.floor(Math.random() * results.length)];
};

const parseTierFromResultString = (result) => {
  return result.includes('None') ? 'None' : result.split(' ')[1];
};

const parseFactionFromResultString = (result) => {
  if (result.includes('None')) return 'None';
  if (result.includes('Roll')) return factionRolls[randomIntFromInterval(0, 5)].name;

  return result.split(' ')[2];
};

const filterCardsByTierAndFaction = (tier, faction, cards) =>
  cards.filter((card) => card.tier === tier).filter((card) => card.faction === faction);

const addExtraRowsPerCardQuantity = (cards) => {
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

const rollRandomCard = (cards) => (cards.length ? cards[Math.floor(Math.random() * cards.length)] : null);

const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
