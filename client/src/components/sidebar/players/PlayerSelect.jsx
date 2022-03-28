import { useContext } from 'react';
import { PlayerContext } from '../../../App';
import { Header } from '../../Header';
import { Subheader } from '../../Subheader';
import { Button } from '../../Button';

export const PlayerSelect = () => {
  const { players, selectedPlayer, setSelectedPlayer, disablePlayerSelect } =
    useContext(PlayerContext);

  const mapPlayers = (players) => {
    return players.map((player) => (
      <div
        key={player.player_id}
        className='w-1/2 flex-shrink flex-grow-0 px-1'
      >
        <Button
          onClick={() => setSelectedPlayer(player)}
          color={selectedPlayer.player_id === player.player_id ? 'green' : ''}
          disabled={
            selectedPlayer.player_id !== player.player_id && disablePlayerSelect
          }
          marginBottom={true}
        >
          {player.name}
        </Button>
        <Subheader title={'Credits'} text={player.credits} />
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
