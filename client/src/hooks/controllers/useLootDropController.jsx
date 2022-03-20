import { useState, useEffect } from 'react';
import { rewardTable } from '../../helpers/constants';
import * as helpers from '../../helpers/helpers';

export const useLootDropController = () => {
  const [cardPool, setCardPool] = useState('');
  const [rewardRoll, setRewardRoll] = useState('T1');
  const [rewardTier, setRewardTier] = useState('');
  const [rewardFaction, setRewardFaction] = useState('');
  const [card, setCard] = useState('');

  const [showRewards, setShowRewards] = useState(false);
  const [disableRewardRollInput, setDisableRewardRollInput] = useState(false);
  const [showFactionSelectInput, setShowFactionSelectInput] = useState(false);
  const [showRewardResults, setShowRewardResults] = useState(false);

  // Calls method to fetch card pool from API on page load
  useEffect(() => {
    const getCardPool = async () => {
      const cardPool = await helpers.fetchCardPool();
      setCardPool(cardPool);
      // console.log(cardPool);
    };

    getCardPool();
  }, [card]);

  const rollReward = () => {
    // If reward tier and faction are already set (initial roll has occured)
    // Skip roll logic and return
    if (rewardTier && rewardFaction) {
      rollCard(rewardTier, rewardFaction);
      return;
    }

    console.log('Reward:', rewardRoll);

    // Get potential loot array based on selected reward tier
    const potentialRewardResults = helpers.getPotentialRewardResults(
      rewardTable,
      rewardRoll
    );
    console.log('Potential Rewards Results:', potentialRewardResults);

    // Get reward result
    const rewardResult = helpers.getRewardResult(potentialRewardResults);
    console.log('Reward Result:', rewardResult);

    // Get reward tier
    const tier = helpers.getRewardTier(rewardResult);
    setRewardTier(tier);
    console.log('Reward Tier:', tier);

    // Get reward faction
    const faction = helpers.getRewardFaction(rewardResult);
    console.log('Reward Faction:', faction);

    // If given choice, set faction to default 'Basic' and show select input
    // Otherwise roll for card
    if (faction === 'Your Choice') {
      setShowFactionSelectInput(true);
      setRewardFaction('Basic');
    } else {
      rollCard(tier, faction);
    }
  };

  // Randomly select card from card pool
  const rollCard = (tier, faction) => {
    // Filter card pool selection based on availability, tier, and faction
    const filteredCards = helpers.filterCards(tier, faction, cardPool);
    console.log('Filtered cards:', filteredCards);

    // Add additional rows to cards array based on qty available to account for all potential cards
    const potentialCards = helpers.getPotentialCards(filteredCards);
    console.log('Potential cards:', potentialCards);

    // Get card result
    const card = helpers.getCard(potentialCards);
    card ? setCard(card) : setCard('');
    console.log('Card:', card);

    // Mark card looted
    if (card) lootCard(card);

    setShowRewardResults(true);
  };

  const lootCard = async (card) => {
    const lootedCard = await helpers.markCardLooted(card);
    console.log('Card Looted:', lootedCard);
    if (lootedCard) setCard(lootedCard);
  };

  const resetLootRoll = () => {
    setRewardTier('');
    setRewardFaction('');
    setCard('');
    setDisableRewardRollInput(false);
    setShowFactionSelectInput(false);
    setShowRewards(false);
    setShowRewardResults(false);
  };

  return {
    card,
    rewardFaction,
    setRewardFaction,
    showFactionSelectInput,
    rewardRoll,
    setRewardRoll,
    showRewards,
    setShowRewards,
    disableRewardRollInput,
    setDisableRewardRollInput,
    showRewardResults,
    rollReward,
    resetLootRoll,
  };
};
