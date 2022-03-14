import { useState, useEffect } from 'react';
import { api, lootTable } from '../../helpers/constants';
import * as helpers from '../../helpers/helpers';

const useLootRollController = (player) => {
  const [cards, setCards] = useState('');
  const [tier, setTier] = useState('T1');
  const [faction, setFaction] = useState('Basic');
  const [rolledTier, setRolledTier] = useState('');
  const [rolledCard, setRolledCard] = useState('');

  const [manualRoll, setManualRoll] = useState(false);
  const [showFactionSelect, setshowFactionSelect] = useState(false);
  const [showResults, setshowResults] = useState(false);

  // Calls method to fetch cards/players from API on page load
  useEffect(() => {
    helpers.fetchData(api.getCards).then((cards) => {
      setCards(cards);
      console.log(cards);
    });
  }, [rolledCard]);

  const rollLoot = () => {
    console.log('Player:', player);
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
      ? setshowFactionSelect(true)
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

    setshowResults(true);
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
        resetLootRoll();
        console.log('Card Sold:', card);
      });
  };

  function setTierState(value) {
    setTier(value);
    console.log(value);
  }

  function setFactionState(value) {
    setFaction(value);
  }

  const resetLootRoll = () => {
    console.log('resetLootRoll');
    setFaction('Basic');
    setRolledTier('');
    setRolledCard('');
    setshowFactionSelect(false);
    setshowResults(false);
    setManualRoll(false);
  };

  return {
    cards,
    tier,
    faction,
    rollLoot,
    rollLootWithFaction,
    setTierState,
    setFactionState,
    showFactionSelect,
    showResults,
    rolledCard,
    markCardSold,
    resetLootRoll,
    manualRoll,
    setManualRoll,
  };
};

export default useLootRollController;
