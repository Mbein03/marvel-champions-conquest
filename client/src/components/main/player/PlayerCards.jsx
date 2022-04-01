import { PlayerCard } from './PlayerCard';
import { Grid } from '../../common/Grid';

export const PlayerCards = ({ cards }) => {
  const mapPlayerCards = () => {
    return cards.map((card) => <PlayerCard key={card.player_card_id} card={card} />);
  };

  const playerCardElements = cards ? mapPlayerCards() : [];

  return <Grid>{playerCardElements}</Grid>;
};
