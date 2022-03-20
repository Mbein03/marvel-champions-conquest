// API calls
const rootURL = 'http://localhost:9000';
const url = {
  fetchCardPool: rootURL + '/api/cards/pool',
  fetchPlayers: rootURL + '/api/players',
  updateCardImages: rootURL + '/api/cards/update-images',
  markCardAcquired: rootURL + '/api/cards/mark-acquired',
  markCardSold: rootURL + '/api/cards/mark-sold',
};

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
