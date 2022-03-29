import { useState, useEffect, useContext, createContext } from 'react';
import { GlobalContext } from '../../App';
import { StoreCards } from './store/StoreCards';
import { PlayerCards } from './card-collection/PlayerCards';
import { LootAction } from './loot/LootAction';
import { LootDrop } from './loot/LootDrop';
import { LootResult } from './loot/LootResult';
import * as api from '../../helpers/api';

export const CardContext = createContext();

export const Main = () => {
  const [cardPool, setCardPool] = useState('');
  const [storeCards, setStoreCards] = useState({ column1: '', column2: '', column3: '', column4: '' });
  const [disableLootDropInput, setDisableLootDropInput] = useState(false);
  const [showFactionSelectInput, setShowFactionSelectInput] = useState(false);
  const [reward, setReward] = useState({ lootDrop: 'T1', tier: '', faction: '', card: '' });

  const { mainContent } = useContext(GlobalContext);

  useEffect(() => {
    const initializeCardPool = async () => {
      const cardPool = await api.fetchCardPool();
      setCardPool(cardPool);
    };

    initializeCardPool();
  }, []);

  const updateRewardLootDrop = (value) => {
    setReward({ ...reward, lootDrop: value });
  };

  const updateRewardFaction = (value) => {
    setReward({ ...reward, faction: value });
  };

  const CardStates = {
    cardPool,
    setCardPool,
    storeCards,
    setStoreCards,
    reward,
    setReward,
    updateRewardLootDrop,
    disableLootDropInput,
    setDisableLootDropInput,
    updateRewardFaction,
    showFactionSelectInput,
    setShowFactionSelectInput,
  };

  const renderSwitch = (mainContent) => {
    switch (mainContent) {
      case 'Store':
        return <StoreCards />;
      case 'LootAction':
        return <LootAction />;
      case 'LootDrop':
        return <LootDrop />;
      case 'LootResult':
        return <LootResult />;
      default:
        return <PlayerCards />;
    }
  };
  return (
    <CardContext.Provider value={CardStates}>
      <main role='main' className='w-full h-full flex-grow overflow-auto'>
        <div className='bg-slate-300'>{renderSwitch(mainContent)}</div>
      </main>
    </CardContext.Provider>
  );
};
