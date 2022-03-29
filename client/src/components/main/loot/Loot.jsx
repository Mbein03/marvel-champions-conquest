import { useState, createContext } from 'react';
import { LootAction } from './LootAction';
import { LootDrop } from './LootDrop';
import { LootResult } from './LootResult';

export const LootContext = createContext();

export const Loot = () => {
  const [lootContent, setLootContent] = useState('LootAction');
  const [disableLootDropInput, setDisableLootDropInput] = useState(false);
  const [reward, setReward] = useState({ lootDrop: 'T1', tier: '', faction: '', card: '' });

  const updateRewardLootDrop = (value) => {
    setReward({ ...reward, lootDrop: value });
  };

  const updateRewardFaction = (value) => {
    setReward({ ...reward, faction: value });
  };

  const LootStates = {
    lootContent,
    setLootContent,
    reward,
    setReward,
    updateRewardLootDrop,
    disableLootDropInput,
    setDisableLootDropInput,
    updateRewardFaction,
  };

  const renderSwitch = (lootContent) => {
    switch (lootContent) {
      case 'LootDrop':
        return <LootDrop />;
      case 'LootResult':
        return <LootResult />;
      default:
        return <LootAction />;
    }
  };

  return <LootContext.Provider value={LootStates}>{renderSwitch(lootContent)}</LootContext.Provider>;
};
