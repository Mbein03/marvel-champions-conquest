import { factionRolls } from './constants';

export const getFactionAndTier = (table, lootDrop) => {
  const results = findMatchingResults(table, lootDrop);
  const result = randomElementFromArray(results);
  const resultTier = parseTierFromResultString(result);
  const resultFaction = parseFactionFromResultString(result);

  return { result, resultTier, resultFaction };
};

export const getCard = (tier, faction, cards) => {
  const filteredCards = filterCardsByTierAndFaction(tier, faction, cards);
  const potentialCards = addExtraRowsPerCardQuantity(filteredCards);
  const card = randomElementFromArray(potentialCards);

  return card;
};

const findMatchingResults = (table, lootDrop) => {
  return table.find((table) => table.lootDrop === lootDrop).results;
};

const parseTierFromResultString = (result) => {
  return result.includes('None') ? 'None' : result.split(' ')[1];
};

const parseFactionFromResultString = (result) => {
  if (result.includes('None')) return 'None';
  if (result.includes('Roll')) return randomElementFromArray(factionRolls).name;

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

export const randomElementFromArray = (array) =>
  array.length ? array[Math.floor(Math.random() * array.length)] : null;
