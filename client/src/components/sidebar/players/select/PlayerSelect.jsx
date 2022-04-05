import { useContext } from 'react';
import { GlobalContext } from '../../../../App';
import { PlayerSelectContainer } from './container/PlayerSelectContainer';
import { Header } from '../../../common/headers/header/Header';
import { Subheader } from '../../../common/headers/subheader/Subheader';
import { Button } from '../../../common/button/Button';

export const PlayerSelect = () => {
  const { players, activePlayer, setActivePlayer, disablePlayerSelect } = useContext(GlobalContext);

  const mapPlayers = () => {
    return players.map((player) => (
      <div key={player.player_id} className='w-1/2 flex-shrink flex-grow-0 px-1'>
        <Button
          onClick={() => setActivePlayer(player)}
          color={activePlayer.player_id === player.player_id ? 'green' : ''}
          disabled={activePlayer.player_id !== player.player_id && disablePlayerSelect}
          marginBottom={true}
        >
          {player.name}
        </Button>
        <Subheader title={'Credits'} text={player.credits} marginBottom={true} />
      </div>
    ));
  };

  const playerElements = players ? mapPlayers() : [];

  return (
    <>
      <Header>Active Player:</Header>
      <PlayerSelectContainer>{playerElements}</PlayerSelectContainer>
    </>
  );
};
