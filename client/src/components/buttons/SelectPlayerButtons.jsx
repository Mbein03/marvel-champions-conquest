import { useContext } from 'react';
import { LootDropContext } from '../../App';
import { PlayerContext } from '../../App';
import { Header } from '../headers/Header';
import { Button } from './Button';

export const SelectPlayerButtons = () => {
  // Set variables from necessary controllers via context
  const { showRewardResults } = useContext(LootDropContext);
  const { players, selectedPlayer, setSelectedPlayer } =
    useContext(PlayerContext);

  // Map button elements to player data
  const mapPlayers = (players) => {
    return players.map((player) => (
      <div key={player.id} className='w-1/2 flex-shrink flex-grow-0 px-1'>
        <Button
          onClick={() => setSelectedPlayer(player)}
          color={selectedPlayer.id === player.id ? 'green' : ''}
          disabled={showRewardResults}
          marginBottom={true}
        >
          {player.name}
        </Button>
      </div>
    ));
  };

  // Conditional check will only return elements once players have been loaded in
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
