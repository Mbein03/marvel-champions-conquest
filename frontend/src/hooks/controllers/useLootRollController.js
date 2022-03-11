import { useState, useEffect } from 'react';
import * as constants from '../../helpers/constants';
import { api } from '../../helpers/constants';
import * as helpers from '../../helpers/helpers';

const useLootRollController = () => {
  const [cards, setCards] = useState('');
  const [players, setPlayers] = useState('');
  const [player, setPlayer] = useState('');
  const [tier, setTier] = useState('T1');
  const [faction, setFaction] = useState('Basic');
  const [rolledTier, setRolledTier] = useState('');
  const [rolledCard, setRolledCard] = useState('');

  const [displayFactionSelect, setDisplayFactionSelect] = useState(false);
  const [displayResults, setDisplayResults] = useState(false);

  // Calls method to fetch cards/players from API on page load
  useEffect(() => {
    helpers.fetchData(api.getCards).then((cards) => {
      setCards(cards);
    });
    helpers.fetchData(api.getPlayers).then((players) => {
      setPlayers(players);
      setPlayer(players[0].name);
    });
  }, []);

  useEffect(() => {
    // Fire off request to mark card as looted after roll
    if (rolledCard) {
      helpers
        .postData(api.markCardLooted, {
          card: rolledCard,
        })
        .then((card) => {
          console.log('Card Looted:', card);
        });
    }
  }, [rolledCard]);

  const rollLoot = () => {
    console.log(faction);

    // Get potential loot array based on tier selected
    const potentialLoot = helpers.getPotentialLoot(constants.lootTable, tier);
    console.log('Loot:', potentialLoot);

    const rollResults = helpers.getLootRollResult(potentialLoot);
    console.log('Roll Results:', rollResults);

    const rolledTier = helpers.getTier(rollResults);
    setRolledTier(rolledTier);
    console.log('Tier:', rolledTier);

    const rolledFaction = helpers.getFaction(rollResults);
    console.log('Faction:', rolledFaction);

    rolledFaction === 'Your Choice'
      ? setDisplayFactionSelect(true)
      : rollForCard(rolledTier, rolledFaction);
  };

  const rollLootWithFaction = () => {
    rollForCard(rolledTier, faction);
  };

  // Randomly select card from lootable pool of cards
  const rollForCard = (tier, faction) => {
    // Filter lootable card selection based on availability, tier, and faction
    const filteredCards = helpers.filterCards(tier, faction, cards);
    console.log('Filtered cards:', filteredCards);

    // Add additional rows to cards array based on qty available to account for all potential cards
    const potentialCards = helpers.getPotentialCards(filteredCards);
    console.log('Potential cards:', potentialCards);

    // Get card result
    const card = helpers.getCard(potentialCards);
    card ? setRolledCard(card) : setRolledCard('');
    console.log('Card:', card);

    setDisplayResults(true);
  };

  function setPlayerState(value) {
    setPlayer(value);
  }

  function setTierState(value) {
    setTier(value);
  }

  function setFactionState(value) {
    setFaction(value);
  }

  const reset = () => {
    setFaction('Basic');
    setRolledTier('');
    setRolledCard('');
    setDisplayFactionSelect(false);
    setDisplayResults(false);
  };

  return {
    cards,
    players,
    player,
    tier,
    faction,
    rollLoot,
    rollLootWithFaction,
    setPlayerState,
    setTierState,
    setFactionState,
    displayFactionSelect,
    displayResults,
    rolledCard,
    reset,
  };
};

export default useLootRollController;
