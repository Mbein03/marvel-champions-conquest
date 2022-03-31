import { useContext } from 'react';
import { GlobalContext } from '../../App';
import { MainContainer } from './MainContainer';
import { Loot } from './loot/Loot';
import { Store } from './store/Store';
import { Cards } from './cards/Cards';

export const Main = () => {
  const { mainContent } = useContext(GlobalContext);

  const renderSwitch = (mainContent) => {
    switch (mainContent) {
      case 'Helicarrier':
        return <Store />;
      case 'Claim Loot Rewards':
        return <Loot />;
      default:
        return <Cards />;
    }
  };
  return <MainContainer> {renderSwitch(mainContent)}</MainContainer>;
};
