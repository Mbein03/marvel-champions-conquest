import { Header } from './Header';
import { Button } from './Button';

export const PlayerSelect = ({ players, player, setPlayer, showResults }) => {
  return (
    <>
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
    </>
  );
};
