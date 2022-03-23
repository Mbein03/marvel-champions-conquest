import { useContext } from 'react';
import { PlayerContext } from '../../App';
import { Image } from '../images/Image';

export const Grid = ({ children }) => {
  const { players, selectedPlayer } = useContext(PlayerContext);

  const mapCards = (cards) => {
    return cards.map((card) => (
      <div
        key={card.player_card_id}
        className='flex justify-center border-2 border-gray-300 rounded-xl p-6 bg-gray-100'
      >
        <Image
          src={'https://marvelcdb.com/' + card.image_path}
          alt={card.name}
        />
      </div>
    ));
  };

  const playerCards = selectedPlayer ? mapCards(selectedPlayer.cards) : [];

  return (
    <div className='container mx-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {playerCards}
      </div>
    </div>
  );
};
