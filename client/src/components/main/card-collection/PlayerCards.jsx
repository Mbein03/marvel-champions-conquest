import { useEffect, useContext } from 'react';
import { GlobalContext } from '../../../App';
import { PlayerCard } from './PlayerCard';
import { Grid } from '../../Grid';

export const PlayerCards = () => {
  const { players, activePlayer, setActivePlayer } = useContext(GlobalContext);

  useEffect(() => {
    if (activePlayer) {
      activePlayer.player_id === 1
        ? setActivePlayer(players[0])
        : setActivePlayer(players[1]);
    }
  }, [activePlayer, setActivePlayer, players]);

  const mapCards = (cards) => {
    return cards.map((card) => (
      <PlayerCard key={card.player_card_id} card={card} />
    ));
  };

  const playerCards = activePlayer ? mapCards(activePlayer.cards) : [];

  return (
    <>
      <div className='flex items-center justify-center'>
        <Grid>{playerCards}</Grid>
      </div>
    </>
  );
};
