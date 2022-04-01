import { useState, createContext } from 'react';
import { LootAction } from './LootAction';
import { LootDrop } from './LootDrop';
import { LootResult } from './LootResult';

export const LootContext = createContext();

export const LootOverview = () => {
  const [lootContent, setLootContent] = useState('LootAction');
  const [lootDrop, setLootDrop] = useState('');
  const [disableLootDropInput, setDisableLootDropInput] = useState(false);
  const [lootedCard, setLootedCard] = useState('');

  const LootStates = {
    lootContent,
    setLootContent,
    lootDrop,
    setLootDrop,
    disableLootDropInput,
    setDisableLootDropInput,
    lootedCard,
    setLootedCard,
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
