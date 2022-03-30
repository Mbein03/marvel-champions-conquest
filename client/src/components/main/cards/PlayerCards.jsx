import { useContext } from 'react';
import { GlobalContext } from '../../../App';
import { PlayerCard } from './PlayerCard';
import { Grid } from '../../Grid';

export const PlayerCards = () => {
  const { activePlayer } = useContext(GlobalContext);

  const mapCards = (cards) => {
    return cards.map((card) => <PlayerCard key={card.player_card_id} card={card} />);
  };

  const playerCards = activePlayer ? mapCards(activePlayer.cards) : [];

  return <Grid>{playerCards}</Grid>;
};
