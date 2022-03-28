import { useEffect, useContext } from 'react';
import { PlayerContext } from '../../../App';
import { StoreCard } from './StoreCard';

export const StoreCards = () => {
  //   const { players, selectedPlayer, setSelectedPlayer } =
  //     useContext(PlayerContext);
  //   useEffect(() => {
  //     if (selectedPlayer) {
  //       selectedPlayer.player_id === 1
  //         ? setSelectedPlayer(players[0])
  //         : setSelectedPlayer(players[1]);
  //     }
  //   }, [selectedPlayer, setSelectedPlayer, players]); //
  //   const mapCards = (cards) => {
  //     return cards.map((card) => (
  //       <PlayerCard key={card.player_card_id} card={card} />
  //     ));
  //   };
  //   const playerCards = selectedPlayer ? mapCards(selectedPlayer.cards) : [];
  //   return <>{playerCards}</>;
};
