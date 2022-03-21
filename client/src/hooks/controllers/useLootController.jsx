import { useState, useEffect } from 'react';
import { rewardTable } from '../../helpers/constants';
import * as api from '../../helpers/api';
import * as loot from '../../helpers/loot';

export const useLootController = () => {
  const [cardPool, setCardPool] = useState('');
  const [reward, setReward] = useState({
    lootDrop: 'T1',
    tier: '',
    faction: '',
    card: '',
  });

  const [skipLootActionSelect, setSkipLootActionSelect] = useState(false);
  const [disableLootDropInput, setDisableLootDropInput] = useState(false);
  const [showFactionSelectInput, setShowFactionSelectInput] = useState(false);
  const [showReward, setShowReward] = useState(false);

  useEffect(() => {
    const getCardPool = async () => {
      const cardPool = await api.fetchCardPool();
      setCardPool(cardPool);
    };

    getCardPool();
  }, [reward.card]);

  const rollForReward = () => {
    if (reward.tier && reward.faction) {
      rollForCard(reward.tier, reward.faction);
      return;
    }

    const potentialRewardResults = loot.getPotentialRewardResults(
      rewardTable,
      reward.lootDrop
    );

    const rewardResult = loot.getRewardResult(potentialRewardResults);
    const tier = loot.getRewardTier(rewardResult);
    const faction = loot.getRewardFaction(rewardResult);

    if (faction === 'Your Choice') {
      setShowFactionSelectInput(true);
      setReward({ ...reward, tier: tier, faction: 'Basic' });
    } else {
      rollForCard(tier, faction);
    }
  };

  const rollForCard = (tier, faction) => {
    const filteredCards = loot.filterCards(tier, faction, cardPool);
    const potentialCards = loot.getPotentialCards(filteredCards);
    const card = loot.getCard(potentialCards);

    card ? lootCard(card) : setReward({ ...reward, card: '' });
    setShowReward(true);
  };

  const updateRewardLootDrop = (value) => {
    setReward({ ...reward, lootDrop: value });
  };

  const updateRewardFaction = (value) => {
    setReward({ ...reward, faction: value });
  };

  const lootCard = async (card) => {
    const lootedCard = await api.markCardAcquired(card);
    if (lootedCard) setReward({ ...reward, card: lootedCard });
  };

  const resetLootProcess = () => {
    setReward({ lootDrop: reward.lootDrop, tier: '', faction: '', card: '' });
    setDisableLootDropInput(false);
    setShowFactionSelectInput(false);
    setSkipLootActionSelect(false);
    setShowReward(false);
  };

  return {
    reward,
    updateRewardFaction,
    showFactionSelectInput,
    updateRewardLootDrop,
    skipLootActionSelect,
    setSkipLootActionSelect,
    disableLootDropInput,
    setDisableLootDropInput,
    showReward,
    rollForReward,
    resetLootProcess,
  };
};
