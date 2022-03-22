const rootURL = 'http://localhost:9000';
const url = {
  fetchPlayers: rootURL + '/api/players',
  updateCardImages: rootURL + '/api/cards/update-images',
  fetchCardPool: rootURL + '/api/cards/pool',
  markCardAcquired: rootURL + '/api/cards/mark-acquired',
  markCardSold: rootURL + '/api/cards/mark-sold',
};

export const fetchData = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

export const postData = async (url, data) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data }),
  };

  const response = await fetch(url, requestOptions);
  const json = await response.json();
  return json;
};

export const fetchPlayers = async () => {
  const players = await fetchData(url.fetchPlayers);
  return players;
};

export const updateCardImages = async () => {
  const updatedCards = await fetchData(url.updateCardImages);
  return updatedCards;
};

export const fetchCardPool = async () => {
  const cardPool = await fetchData(url.fetchCardPool);
  return cardPool;
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
