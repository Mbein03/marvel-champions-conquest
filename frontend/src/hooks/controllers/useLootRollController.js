import { useState, useEffect } from 'react';
import { api, lootTable } from '../../helpers/constants';
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
  const [confirmRoll, setConfirmRoll] = useState(false);
  const [confirmSale, setConfirmSale] = useState(false);

  // Calls method to fetch cards/players from API on page load
  useEffect(() => {
    helpers.fetchData(api.getCards).then((cards) => {
      setCards(cards);
      console.log(cards);
    });
    helpers.fetchData(api.getPlayers).then((players) => {
      setPlayers(players);

      // If player hasn't been set for select, set it
      if (!player) {
        setPlayer(players[0].name);
      }
    });
  }, [rolledCard, player]);

  const rollLoot = () => {
    console.log(faction);

    // Get potential loot array based on tier selected
    const potentialLoot = helpers.getPotentialLoot(lootTable, tier);
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

    // Mark card looted
    if (card) markCardLooted(card);

    setDisplayResults(true);
  };

  const markCardLooted = (card) => {
    helpers
      .postData(api.markCardLooted, {
        card: card,
      })
      .then((card) => {
        console.log('Card Looted:', card);
        setRolledCard(card);
      });
  };

  const markCardSold = (card, player) => {
    helpers
      .postData(api.markCardSold, {
        card: card,
        player: player,
      })
      .then((card) => {
        reset();
        console.log('Card Sold:', card);
      });
  };

  const toggleRollConfirmation = () => {
    setConfirmRoll(!confirmRoll);
  };

  const toggleSaleConfirmation = () => {
    setConfirmSale(!confirmSale);
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
    console.log('reset');
    setFaction('Basic');
    setRolledTier('');
    setRolledCard('');
    setDisplayFactionSelect(false);
    setDisplayResults(false);
    setConfirmRoll(false);
    setConfirmSale(false);
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
    markCardSold,
    reset,
    confirmRoll,
    toggleRollConfirmation,
    confirmSale,
    toggleSaleConfirmation,
  };
};

export default useLootRollController;
