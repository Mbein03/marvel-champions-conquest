import { useState, useEffect } from 'react';
import { api, lootTable } from '../../helpers/constants';
import * as helpers from '../../helpers/helpers';

export const useLootDropController = (player) => {
  const [lootableCards, setLootableCards] = useState('');
  const [roll, setRoll] = useState('T1');
  const [faction, setFaction] = useState('');
  const [tier, setTier] = useState('');
  const [card, setCard] = useState('');

  const [manualRoll, setManualRoll] = useState(false);
  const [showFactionSelect, setShowFactionSelect] = useState(false);
  const [disableRollSelect, setDisableRollSelect] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Calls method to fetch lootable cards from API on page load
  useEffect(() => {
    helpers.fetchData(api.getLootableCards).then((lootableCards) => {
      setLootableCards(lootableCards);
      // console.log(lootableCards);
    });
  }, [card]);

  const rollLoot = () => {
    // If tier and faction are already set (initial roll has occured)
    // Skip roll logic and return
    if (tier && faction) {
      rollForCard(tier, faction);
      return;
    }
    console.log('Player:', player);
    console.log('Roll:', roll);

    // Get potential loot array based on selected roll
    const potentialResults = helpers.getPotentialResults(lootTable, roll);
    console.log('Loot:', potentialResults);

    // Get roll result
    const result = helpers.getResult(potentialResults);
    console.log('Roll Results:', result);

    // Get card tier
    const cardTier = helpers.getTier(result);
    setTier(cardTier);
    console.log('Tier:', cardTier);

    // Get card faction
    const cardFaction = helpers.getFaction(result);
    console.log('Faction:', cardFaction);

    // If given choice, set faction to default 'Basic' and show select input
    // Otherwise roll for card
    if (cardFaction === 'Your Choice') {
      setShowFactionSelect(true);
      setFaction('Basic');
    } else {
      rollForCard(cardTier, cardFaction);
    }
  };

  // Randomly select card from lootable pool of cards
  const rollForCard = (tier, faction) => {
    // Filter lootable card selection based on availability, roll, and faction
    const filteredCards = helpers.filterCards(tier, faction, lootableCards);
    console.log('Filtered cards:', filteredCards);

    // Add additional rows to cards array based on qty available to account for all potential cards
    const potentialCards = helpers.getPotentialCards(filteredCards);
    console.log('Potential cards:', potentialCards);

    // Get card result
    const card = helpers.getCard(potentialCards);
    card ? setCard(card) : setCard('');
    console.log('Card:', card);

    // Mark card looted
    if (card) markCardLooted(card);

    setShowResults(true);
  };

  const markCardLooted = (card) => {
    helpers
      .postData(api.markCardLooted, {
        card: card,
      })
      .then((card) => {
        console.log('Card Looted:', card);
        setCard(card);
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

  const resetLootRoll = () => {
    setFaction('');
    setTier('');
    setCard('');
    setShowFactionSelect(false);
    setShowResults(false);
    setManualRoll(false);
    setDisableRollSelect(false);
  };

  return {
    card,
    faction,
    setFaction,
    showFactionSelect,
    roll,
    setRoll,
    manualRoll,
    setManualRoll,
    disableRollSelect,
    setDisableRollSelect,
    showResults,
    rollLoot,
    resetLootRoll,
    markCardSold,
  };
};
