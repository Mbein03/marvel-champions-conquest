import { useState, useContext } from 'react';
import { LootContext } from '../../../App';
import { Header } from '../../Header';
import { Button } from '../../Button';
import * as api from '../../../helpers/api';

export const NavButtons = () => {
  const [imagesUpdating, setImagesUpdating] = useState(false);
  const { mainContent, setMainContent, resetLootProcess } =
    useContext(LootContext);

  const updateCardImages = async () => {
    setImagesUpdating(true);
    await api.updateCardImages();
    setImagesUpdating(false);
  };

  const renderPlayerCards = () => {
    resetLootProcess();
    setMainContent('PlayerCards');
  };

  const renderLootRewards = () => {
    resetLootProcess();
    setMainContent('LootAction');
  };

  return (
    <>
      <Header>Navigation:</Header>
      <ul className='px-1 flex sm:flex-col overflow-hidden content-center justify-between'>
        <Button
          onClick={() => renderPlayerCards()}
          color={mainContent === 'PlayerCards' ? 'green' : ''}
          marginBottom={true}
        >
          Cards
        </Button>
        <Button
          onClick={() => renderLootRewards()}
          color={
            ['LootAction', 'LootDrop', 'LootReward'].includes(mainContent)
              ? 'green'
              : ''
          }
          marginBottom={true}
        >
          Claim Loot Rewards
        </Button>
        <Button onClick={() => updateCardImages()} disabled={imagesUpdating}>
          {imagesUpdating ? 'Loading...' : 'Update Card Images'}
        </Button>
      </ul>
    </>
  );
};
