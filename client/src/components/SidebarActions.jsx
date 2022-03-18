import { useImageController as ImageController } from '../hooks/controllers/useImageController';
import { Header } from './Header';
import { Button } from './Button';

export const SidebarActions = ({ resetLootRoll }) => {
  const { updateCardImages, imagesUpdating } = ImageController();

  return (
    <>
      <Header>Actions:</Header>
      <ul className='px-1 flex sm:flex-col overflow-hidden content-center justify-between'>
        <Button onClick={() => resetLootRoll()} marginBottom={true}>
          Loot Drop
        </Button>
        <Button onClick={() => updateCardImages()} disabled={imagesUpdating}>
          {imagesUpdating ? 'Loading...' : 'Update Card Images'}
        </Button>
      </ul>
    </>
  );
};
