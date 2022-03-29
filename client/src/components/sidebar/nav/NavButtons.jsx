import { useContext } from 'react';
import { GlobalContext } from '../../../App';
import { NavButtonsContainer } from './NavButtonsContainer';
import { Button } from '../../Button';

export const NavButtons = () => {
  const { setDisablePlayerSelect, mainContent, setMainContent } = useContext(GlobalContext);

  const updateMainContent = (mainContent) => {
    setDisablePlayerSelect(false);
    setMainContent(mainContent);
  };

  return (
    <NavButtonsContainer>
      <Button
        onClick={() => updateMainContent('CardCollection')}
        color={mainContent === 'CardCollection' ? 'green' : ''}
        marginBottom={true}
      >
        Card Collection
      </Button>
      <Button
        onClick={() => updateMainContent('LootAction')}
        color={['LootAction', 'LootDrop', 'LootResult'].includes(mainContent) ? 'green' : ''}
        marginBottom={true}
      >
        Claim Loot Rewards
      </Button>
      <Button
        onClick={() => updateMainContent('Store')}
        color={mainContent === 'Store' ? 'green' : ''}
        marginBottom={true}
      >
        Helicarrier
      </Button>
    </NavButtonsContainer>
  );
};
