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

  const renderCardCollection = () => {
    resetLootProcess();
    setMainContent('CardCollection');
  };

  const renderStore = () => {
    resetLootProcess();
    setMainContent('Store');
  };

  const renderLootResult = () => {
    resetLootProcess();
    setMainContent('LootAction');
  };

  return (
    <>
      <Header>Navigation:</Header>
      <ul className='px-1 flex sm:flex-col overflow-hidden content-center justify-between'>
        <Button
          onClick={() => renderCardCollection()}
          color={mainContent === 'CardCollection' ? 'green' : ''}
          marginBottom={true}
        >
          Card Collection
        </Button>
        <Button
          onClick={() => renderStore()}
          color={mainContent === 'Store' ? 'green' : ''}
          marginBottom={true}
        >
          Store
        </Button>
        <Button
          onClick={() => renderLootResult()}
          color={
            ['LootAction', 'LootDrop', 'LootResult'].includes(mainContent)
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
