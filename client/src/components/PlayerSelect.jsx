import { Header } from './Header';
import { Button } from './Button';
import { Subheader } from './Subheader';

export const PlayerSelect = ({ players, player, setPlayer, showResults }) => {
  const mapPlayers = (players) => {
    return players.map((person) => (
      <div key={person.id} className='w-1/2 flex-shrink flex-grow-0 px-1'>
        <Button
          test={person.id}
          onClick={() => setPlayer(person)}
          classStyle='mb-3'
          color={player.id === person.id ? 'green' : ''}
          disabled={showResults}
        >
          {players ? person.name : ''}
        </Button>
        <Subheader title={'CR'} result={person.credits} />
      </div>
    ));
  };

  const playerElements = players ? mapPlayers(players) : [];

  return (
    <>
      <Header>Player Select:</Header>
      <div className='w-full flex flex-col sm:flex-row flex-grow overflow-hidden'>
        {playerElements}
      </div>
    </>
  );
};
