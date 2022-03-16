import { Header } from './Header';
import { Button } from './form/Button';

export const Sidebar = ({
  players,
  player,
  setPlayer,
  showResults,
  resetLootRoll,
  updateCardImages,
  imagesUpdating,
}) => {
  return (
    <div className='w-1/4 flex-shrink flex-grow-0'>
      <div className='sticky top-0 p-4 w-full'>
        <Header>Player Select:</Header>
        <div className='w-full flex flex-col sm:flex-row flex-grow overflow-hidden'>
          {players && (
            <>
              <div className='w-1/2 flex-shrink flex-grow-0 pr-1'>
                <Button
                  onClick={() => setPlayer(players[0])}
                  classStyle='mb-3'
                  color={player.id === players[0].id ? 'green' : ''}
                  disabled={showResults}
                >
                  {players ? players[0].name : ''}
                </Button>
              </div>
              <div className='w-1/2 flex-shrink flex-grow-0 pl-1'>
                <Button
                  onClick={() => setPlayer(players[1])}
                  classStyle='mb-3'
                  color={player.id === players[1].id ? 'green' : ''}
                  disabled={showResults}
                >
                  {players ? players[1].name : ''}
                </Button>
              </div>
            </>
          )}
        </div>
        <Header>Actions:</Header>
        <ul className='flex sm:flex-col overflow-hidden content-center justify-between'>
          <Button onClick={() => resetLootRoll()} classStyle='mb-3'>
            Loot Drop
          </Button>
          <Button onClick={() => updateCardImages()} disabled={imagesUpdating}>
            {imagesUpdating ? 'Loading...' : 'Update Card Images'}
          </Button>
        </ul>
      </div>
    </div>
  );
};
