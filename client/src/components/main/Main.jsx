import { useContext } from 'react';
import { GlobalContext } from '../../App';
import { MainContainer } from './MainContainer';
import { Loot } from './loot/Loot';
import { StoreCards } from './store/StoreCards';
import { PlayerCards } from './cards/PlayerCards';

export const Main = () => {
  const { mainContent } = useContext(GlobalContext);

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
  return <MainContainer> {renderSwitch(mainContent)}</MainContainer>;
};
