import { PlayerCard } from './PlayerCard';
import { Grid } from '../../common/Grid';

export const PlayerCards = ({ cards }) => {
  const mapCards = (cards) => {
    return cards.map((card) => <PlayerCard key={card.player_card_id} card={card} />);
  };

  const playerCards = cards ? mapCards(cards) : [];

  return <Grid>{playerCards}</Grid>;
};
