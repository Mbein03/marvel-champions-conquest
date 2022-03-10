import { useState } from 'react';
import * as constants from '../helpers/constants';
import useFetch from './useFetch';
import { api } from '../helpers/constants';
import * as helpers from '../helpers/helpers';

const useLootRoll = () => {
  const [player, setPlayer] = useState('Player 1');
  const [tier, setTier] = useState('T1');
  const [faction, setFaction] = useState('Basic');
  const [rolledTier, setRolledTier] = useState('');
  const [rolledCard, setRolledCard] = useState('');

  const [displayFactionSelect, setDisplayFactionSelect] = useState(false);
  const [displayResults, setDisplayResults] = useState(false);

  const cards = useFetch(api.getCards).data;
  const players = useFetch(api.getPlayers).data;

  const rollLoot = () => {
    console.log(faction);
    // Hide results from previous role
    setDisplayResults(false);

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
    card !== 'None' ? setRolledCard(card) : setRolledCard('');
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

export default useLootRoll;
