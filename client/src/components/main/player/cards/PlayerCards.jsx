import { PlayerCard } from './card/PlayerCard';
import { GridContainer } from '../../../common/containers/grid/GridContainer';

export const PlayerCards = ({ cards }) => {
  const mapPlayerCards = () => {
    return cards.map((card) => <PlayerCard key={card.player_card_id} card={card} />);
  };

  const playerCardElements = cards ? mapPlayerCards() : [];

  return <GridContainer>{playerCardElements}</GridContainer>;
};
