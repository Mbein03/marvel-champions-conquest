import { useState, useEffect } from 'react';
import { rewardTable } from '../../helpers/constants';
import * as api from '../../helpers/api';
import * as loot from '../../helpers/loot';

export const useLootController = () => {
  // Set states to track card pool, selected loot drop, and various loot reward properties
  // Cannot use reward object w/ properties (tier, faction, card) b/c of interactions w/ reuseable SelectInput component
  const [cardPool, setCardPool] = useState('');
  const [lootDrop, setLootDrop] = useState('T1');
  const [rewardTier, setRewardTier] = useState('');
  const [rewardFaction, setRewardFaction] = useState('');
  const [rewardCard, setRewardCard] = useState('');

  // Set states to track which phase of loot flow to display as well as when to disable certain inputs
  const [skipLootActionSelect, setSkipLootActionSelect] = useState(false);
  const [disableLootDropInput, setDisableLootDropInput] = useState(false);
  const [showFactionSelectInput, setShowFactionSelectInput] = useState(false);
  const [showReward, setShowReward] = useState(false);

  // Calls method to fetch card pool from API on page load and when reward card is updated
  useEffect(() => {
    const getCardPool = async () => {
      const cardPool = await api.fetchCardPool();
      setCardPool(cardPool);
      // console.log('Card Pool:', cardPool);
    };

    getCardPool();
  }, [rewardCard]);

  // Randomly select reward result from table and determine tier and faction of result
  const rollForReward = () => {
    // If reward tier and faction are already set (function is called after faction is manually selected)
    // Skip and Immediately roll for card
    if (rewardTier && rewardFaction) {
      rollForCard(rewardTier, rewardFaction);
      return;
    }

    console.log('Loot Drop:', lootDrop);

    // Get potential reward array based on selected reward tier
    const potentialRewardResults = loot.getPotentialRewardResults(
      rewardTable,
      lootDrop
    );
    console.log('Potential Rewards Results:', potentialRewardResults);

    // Get reward result
    const rewardResult = loot.getRewardResult(potentialRewardResults);
    console.log('Reward Result:', rewardResult);

    // Get reward tier
    const tier = loot.getRewardTier(rewardResult);
    setRewardTier(tier);
    console.log('Reward Tier:', tier);

    // Get reward faction
    const faction = loot.getRewardFaction(rewardResult);
    console.log('Reward Faction:', faction);

    // If given choice, set faction to default 'Basic' and show faction select input
    // Otherwise skip and roll for card
    if (faction === 'Your Choice') {
      setShowFactionSelectInput(true);
      setRewardFaction('Basic');
    } else {
      rollForCard(tier, faction);
    }
  };

  // Randomly select card from available card pool
  const rollForCard = (tier, faction) => {
    // Filter card pool selection based on tier and faction
    const filteredCards = loot.filterCards(tier, faction, cardPool);
    console.log('Filtered cards:', filteredCards);

    // Add additional rows to cards array based on qty available to account for all potentially lootable cards
    const potentialCards = loot.getPotentialCards(filteredCards);
    console.log('Potential cards:', potentialCards);

    // Get card reward and mark looted
    const card = loot.getCard(potentialCards);
    console.log('Card:', card);
    card ? lootCard(card) : setRewardCard('');

    setShowReward(true);
  };

  // Mark card and required and set reward card
  const lootCard = async (card) => {
    const lootedCard = await api.markCardAcquired(card);
    console.log('Card Looted:', lootedCard);
    if (lootedCard) setRewardCard(lootedCard);
  };

  // Reset all phases of the reward roll process
  const resetLootProcess = () => {
    setRewardTier('');
    setRewardFaction('');
    setRewardCard('');
    setDisableLootDropInput(false);
    setShowFactionSelectInput(false);
    setSkipLootActionSelect(false);
    setShowReward(false);
  };

  return {
    rewardCard,
    rewardFaction,
    setRewardFaction,
    showFactionSelectInput,
    lootDrop,
    setLootDrop,
    skipLootActionSelect,
    setSkipLootActionSelect,
    disableLootDropInput,
    setDisableLootDropInput,
    showReward,
    rollForReward,
    resetLootProcess,
  };
};
