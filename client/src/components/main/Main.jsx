import { useState, useEffect, useContext, createContext } from 'react';
import { GlobalContext } from '../../App';
import { MainContainer } from './MainContainer';
import { Loot } from './loot/Loot';
import { StoreCards } from './store/StoreCards';
import { PlayerCards } from './cards/PlayerCards';
import * as api from '../../helpers/api';

export const CardContext = createContext();

export const Main = () => {
  const [cardPool, setCardPool] = useState('');
  const [storeCards, setStoreCards] = useState({ column1: '', column2: '', column3: '', column4: '' });

  const { mainContent } = useContext(GlobalContext);

  useEffect(() => {
    const initializeCardPool = async () => {
      const cards = await api.fetchCardPool();
      setCardPool(cards);
    };

    initializeCardPool();
  }, []);

  const CardStates = {
    cardPool,
    setCardPool,
    storeCards,
    setStoreCards,
  };

  const renderSwitch = (mainContent) => {
    switch (mainContent) {
      case 'Store':
        return <StoreCards />;
      case 'Loot':
        return <Loot />;
      default:
        return <PlayerCards />;
    }
  };
  return (
    <CardContext.Provider value={CardStates}>
      <MainContainer> {renderSwitch(mainContent)}</MainContainer>
    </CardContext.Provider>
  );
};
