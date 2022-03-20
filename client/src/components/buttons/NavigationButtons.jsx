import { useContext } from 'react';
import { LootDropContext } from '../../App';
import { useCardImageController as CardImageController } from '../../hooks/controllers/useCardImageController';
import { Header } from '../headers/Header';
import { Button } from './Button';

export const NavigationButtons = () => {
  // Set variables from necessary controllers (via context for loot)
  const { resetRewardRoll } = useContext(LootDropContext);
  const { updateCardImages, imagesUpdating } = CardImageController();

  return (
    <>
      <Header>Navigation:</Header>
      <ul className='px-1 flex sm:flex-col overflow-hidden content-center justify-between'>
        <Button onClick={() => resetRewardRoll()} marginBottom={true}>
          Rewards
        </Button>
        <Button onClick={() => updateCardImages()} disabled={imagesUpdating}>
          {imagesUpdating ? 'Loading...' : 'Update Card Images'}
        </Button>
      </ul>
    </>
  );
};
