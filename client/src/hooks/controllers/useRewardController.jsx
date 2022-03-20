import { useState, useEffect } from 'react';
import { rewardTable } from '../../helpers/constants';
import * as api from '../../helpers/api';
import * as rewards from '../../helpers/rewards';

export const useRewardController = () => {
  // Set states to track card pool and various reward properties
  // Cannot use reward object w/ properties (roll, tier, faction, card) b/c of interactions w/ reuseable SelectInput component
  const [cardPool, setCardPool] = useState('');
  const [rewardRoll, setRewardRoll] = useState('T1');
  const [rewardTier, setRewardTier] = useState('');
  const [rewardFaction, setRewardFaction] = useState('');
  const [rewardCard, setRewardCard] = useState('');

  // Set states to track which phase of rewards flow to display as well as when to disable certain inputs
  const [skipRewardSelect, setSkipRewardSelect] = useState(false);
  const [disableRewardRollInput, setDisableRewardRollInput] = useState(false);
  const [showFactionSelectInput, setShowFactionSelectInput] = useState(false);
  const [showRewardResults, setShowRewardResults] = useState(false);

  // Calls method to fetch card pool from API on page load and when reward card is updated
  useEffect(() => {
    const getCardPool = async () => {
      const cardPool = await api.fetchCardPool();
      setCardPool(cardPool);
      // console.log('Card Pool:', cardPool);
    };

    getCardPool();
  }, [rewardCard]);

  const rollForReward = () => {
    // If reward tier and faction are already set (function is called after faction is manually selected)
    // Skip roll logic and return
    if (rewardTier && rewardFaction) {
      rollForCard(rewardTier, rewardFaction);
      return;
    }

    console.log('Reward:', rewardRoll);

    // Get potential reward array based on selected reward tier
    const potentialRewardResults = rewards.getPotentialRewardResults(
      rewardTable,
      rewardRoll
    );
    console.log('Potential Rewards Results:', potentialRewardResults);

    // Get reward result
    const rewardResult = rewards.getRewardResult(potentialRewardResults);
    console.log('Reward Result:', rewardResult);

    // Get reward tier
    const tier = rewards.getRewardTier(rewardResult);
    setRewardTier(tier);
    console.log('Reward Tier:', tier);

    // Get reward faction
    const faction = rewards.getRewardFaction(rewardResult);
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

  // Randomly select card from card pool
  const rollForCard = (tier, faction) => {
    // Filter card pool selection based on tier and faction
    const filteredCards = rewards.filterCards(tier, faction, cardPool);
    console.log('Filtered cards:', filteredCards);

    // Add additional rows to cards array based on qty available to account for all potentially lootable cards
    const potentialCards = rewards.getPotentialCards(filteredCards);
    console.log('Potential cards:', potentialCards);

    // Get card result and mark looted
    const card = rewards.getCard(potentialCards);
    console.log('Card:', card);
    card ? lootCard(card) : setRewardCard('');

    setShowRewardResults(true);
  };

  // Mark card and required and set reward card
  const lootCard = async (card) => {
    const lootedCard = await api.markCardAcquired(card);
    console.log('Card Looted:', lootedCard);
    if (lootedCard) setRewardCard(lootedCard);
  };

  // Reset all phases of the reward roll process
  const resetRewardRoll = () => {
    setRewardTier('');
    setRewardFaction('');
    setRewardCard('');
    setDisableRewardRollInput(false);
    setShowFactionSelectInput(false);
    setSkipRewardSelect(false);
    setShowRewardResults(false);
  };

  return {
    rewardCard,
    rewardFaction,
    setRewardFaction,
    showFactionSelectInput,
    rewardRoll,
    setRewardRoll,
    skipRewardSelect,
    setSkipRewardSelect,
    disableRewardRollInput,
    setDisableRewardRollInput,
    showRewardResults,
    rollForReward,
    resetRewardRoll,
  };
};
