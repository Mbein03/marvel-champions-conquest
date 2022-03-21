import { useContext } from 'react';
import { LootContext } from '../../App';
import { useCardImageController as CardImageController } from '../../hooks/controllers/useCardImageController';
import { Header } from '../headers/Header';
import { Button } from './Button';

export const NavigationButtons = () => {
  const { resetLootProcess } = useContext(LootContext);
  const { updateCardImages, imagesUpdating } = CardImageController();

  return (
    <>
      <Header>Navigation:</Header>
      <ul className='px-1 flex sm:flex-col overflow-hidden content-center justify-between'>
        <Button onClick={() => resetLootProcess()} marginBottom={true}>
          Claim Loot Rewards
        </Button>
        <Button onClick={() => updateCardImages()} disabled={imagesUpdating}>
          {imagesUpdating ? 'Loading...' : 'Update Card Images'}
        </Button>
      </ul>
    </>
  );
};
