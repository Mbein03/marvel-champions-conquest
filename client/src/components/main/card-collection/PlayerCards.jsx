import { useContext } from 'react';
import { PlayerContext } from '../../../App';
import { PlayerCard } from './PlayerCard';

export const PlayerCards = () => {
  const { selectedPlayer } = useContext(PlayerContext);

  const mapCards = (cards) => {
    return cards.map((card) => (
      <PlayerCard key={card.player_card_id} card={card} />
    ));
  };

  const playerCards = selectedPlayer ? mapCards(selectedPlayer.cards) : [];

  return <>{playerCards}</>;
};
