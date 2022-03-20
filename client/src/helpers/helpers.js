import { url, factions } from './constants';

// Returns integer between two intervals
export const randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// Returns array of strings
// Filter loot table and return potential rewards results based on reward roll selected
export const getPotentialRewardResults = (rewardTable, rewardRoll) =>
  rewardTable
    .filter((obj) => obj.roll === rewardRoll)
    .map((obj) => obj.results)[0];

// Returns string
// Determine reward result
export const getRewardResult = (potentialLoot) =>
  potentialLoot[Math.floor(Math.random() * potentialLoot.length)];

// Returns string
// Get card tier
export const getRewardTier = (rewardResult) =>
  rewardResult.includes('None') ? 'None' : rewardResult.split(' ')[1];

// Returns string
// Get card faction
export const getRewardFaction = (rewardResult) => {
  if (rewardResult.includes('None')) {
    return 'None';
  } else if (rewardResult.includes('Roll')) {
    return factions[randomIntFromInterval(0, 5)].name;
  } else {
    return rewardResult.split(' ')[2];
  }
};

// Returns array of objects
// Filter out cards from array based on quantity, tier, and faction
export const filterCards = (tier, faction, cardPool) =>
  cardPool
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

// Returns object OR null
// Determine card result
export const getCard = (potentialCards) =>
  potentialCards.length
    ? potentialCards[Math.floor(Math.random() * potentialCards.length)]
    : null;

// Reusable get request
export const fetchData = async (url) => {
  const response = await fetch(url);
  const responseData = await response.json();
  return responseData;
};

// Reusable post request
export const postData = async (url, data) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data }),
  };

  const response = await fetch(url, requestOptions);
  const responseData = await response.json();
  return responseData;
};

export const fetchPlayers = async () => {
  const players = await fetchData(url.fetchPlayers);
  return players;
};

export const fetchCardPool = async () => {
  const cardPool = await fetchData(url.fetchCardPool);
  return cardPool;
};

export const updateCardImages = async () => {
  const updatedCards = await fetchData(url.updateCardImages);
  return updatedCards;
};

export const markCardAcquired = async (card) => {
  const acquiredCard = await postData(url.markCardAcquired, { card: card });
  return acquiredCard;
};

export const markCardSold = async (card, player) => {
  const soldCard = await postData(url.markCardSold, {
    card: card,
    player: player,
  });
  return soldCard;
};
