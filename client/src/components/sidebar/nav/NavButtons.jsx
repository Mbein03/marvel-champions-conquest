import { useContext } from 'react';
import { GlobalContext } from '../../../App';
import { Header } from '../../Header';
import { Button } from '../../Button';

export const NavButtons = () => {
  const { setDisablePlayerSelect, mainContent, setMainContent } = useContext(GlobalContext);

  const updateMainContent = (mainContent) => {
    setDisablePlayerSelect(false);
    setMainContent(mainContent);
  };

  return (
    <>
      <ul className='border-t border-black pt-4 px-1 flex sm:flex-col overflow-hidden content-center justify-between'>
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
      </ul>
    </>
  );
};
