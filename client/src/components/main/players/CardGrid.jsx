import { useContext } from 'react';
import { PlayerContext } from '../../../App';
import { PlayerCard } from './PlayerCard';

export const CardGrid = () => {
  const { selectedPlayer } = useContext(PlayerContext);

  const mapCards = (cards) => {
    return cards.map((card) => (
      <PlayerCard key={card.player_card_id} card={card} />
    ));
  };

  const playerCards = selectedPlayer ? mapCards(selectedPlayer.cards) : [];

  return (
    <div className='container m-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {playerCards}
      </div>
    </div>
  );
};
