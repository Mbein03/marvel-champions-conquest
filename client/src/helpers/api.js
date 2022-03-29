const rootURL = 'http://localhost:9000';
const url = {
  fetchPlayers: rootURL + '/api/players',
  updateCardImages: rootURL + '/api/cards/update-images',
  fetchCardPool: rootURL + '/api/cards/pool',
  markCardAcquired: rootURL + '/api/card/mark-acquired',
  markCardSold: rootURL + '/api/card/mark-sold',
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
  const cards = await fetchData(url.updateCardImages);
  return cards;
};

export const fetchCardPool = async () => {
  const cards = await fetchData(url.fetchCardPool);
  return cards;
};

export const markCardAcquired = async (card, player) => {
  const response = await postData(url.markCardAcquired, {
    card: card,
    player: player,
  });
  return response;
};

export const markCardSold = async (card, player) => {
  const response = await postData(url.markCardSold, {
    card: card,
    player: player,
  });
  return response;
};
