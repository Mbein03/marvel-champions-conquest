import { useState, createContext } from 'react';
import { LootActionPhase } from './phases/action/LootActionPhase';
import { LootDropPhase } from './phases/drop/LootDropPhase';
import { LootResultPhase } from './phases/result/LootResultPhase';

export const LootContext = createContext();

export const LootOverview = () => {
  const [lootPhase, setLootPhase] = useState('LootAction');
  const [lootDrop, setLootDrop] = useState('');
  const [disableLootDropInput, setDisableLootDropInput] = useState(false);
  const [lootedCard, setLootedCard] = useState('');

  const LootStates = {
    lootPhase,
    setLootPhase,
    lootDrop,
    setLootDrop,
    disableLootDropInput,
    setDisableLootDropInput,
    lootedCard,
    setLootedCard,
  };

  const renderSwitch = (lootPhase) => {
    switch (lootPhase) {
      case 'LootDrop':
        return <LootDropPhase />;
      case 'LootResult':
        return <LootResultPhase />;
      default:
        return <LootActionPhase />;
    }
  };

  return <LootContext.Provider value={LootStates}>{renderSwitch(lootPhase)}</LootContext.Provider>;
};
