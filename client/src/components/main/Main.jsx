import { useContext } from 'react';
import { GlobalContext } from '../../App';
import { MainContainer } from './container/MainContainer';
import { LootOverview } from './loot/LootOverview';
import { StoreOverview } from './store/StoreOverview';
import { PlayerOverview } from './player/PlayerOverview';

export const Main = () => {
  const { mainContent } = useContext(GlobalContext);

  const renderSwitch = (mainContent) => {
    switch (mainContent) {
      case 'Helicarrier':
        return <StoreOverview />;
      case 'Claim Loot Rewards':
        return <LootOverview />;
      default:
        return <PlayerOverview />;
    }
  };
  return <MainContainer> {renderSwitch(mainContent)}</MainContainer>;
};
