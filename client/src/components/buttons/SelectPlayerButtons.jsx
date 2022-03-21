import { useContext } from 'react';
import { LootContext } from '../../App';
import { PlayerContext } from '../../App';
import { Header } from '../headers/Header';
import { Button } from './Button';

export const SelectPlayerButtons = () => {
  const { showLootResults } = useContext(LootContext);
  const { players, selectedPlayer, setSelectedPlayer } =
    useContext(PlayerContext);

  const mapPlayers = (players) => {
    return players.map((player) => (
      <div key={player.id} className='w-1/2 flex-shrink flex-grow-0 px-1'>
        <Button
          onClick={() => setSelectedPlayer(player)}
          color={selectedPlayer.id === player.id ? 'green' : ''}
          disabled={showLootResults}
          marginBottom={true}
        >
          {player.name}
        </Button>
      </div>
    ));
  };

  const playerElements = players ? mapPlayers(players) : [];

  return (
    <>
      <Header>Select Player:</Header>
      <div className='w-full flex flex-col sm:flex-row flex-grow overflow-hidden'>
        {playerElements}
      </div>
    </>
  );
};
