const rootURL = 'http://localhost:9000';
const url = {
  fetchPlayers: rootURL + '/api/players',
  fetchCardPool: rootURL + '/api/cards/pool',
  updateCredits: rootURL + '/api/player/update-credits',
  markSchemeThwarted: rootURL + '/api/player/mark-scheme-thwarted',
  markCardAcquired: rootURL + '/api/card/mark-acquired',
  markCardSold: rootURL + '/api/card/mark-sold',
  updateCardImages: rootURL + '/api/cards/update-images',
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

export const fetchCardPool = async () => {
  const cards = await fetchData(url.fetchCardPool);
  return cards;
};

export const updateCredits = async (player, credits) => {
  const players = await postData(url.updateCredits, {
    player: player,
    credits: credits,
  });
  return players;
};

export const markSchemeThwarted = async (player) => {
  const players = await postData(url.markSchemeThwarted, {
    player: player,
  });
  return players;
};

export const markCardAcquired = async (card, player) => {
  const players = await postData(url.markCardAcquired, {
    card: card,
    player: player,
  });
  return players;
};

export const markCardSold = async (card, player) => {
  const players = await postData(url.markCardSold, {
    card: card,
    player: player,
  });
  return players;
};

export const updateCardImages = async () => {
  const cards = await fetchData(url.updateCardImages);
  return cards;
};
