import { useState, useEffect } from 'react';
import * as api from '../../helpers/api';

export const usePlayerController = (card) => {
  // Set states to track players and selected player
  const [players, setPlayers] = useState('');
  const [selectedPlayer, setSelectedPlayer] = useState('');

  useEffect(() => {
    // Call method to fetch players from API when selected player changes or card is updated
    const getPlayers = async () => {
      const players = await api.fetchPlayers();
      setPlayers(players);

      // If no player has been selected (initial load), set selected to first in array
      if (!selectedPlayer) {
        setSelectedPlayer(players[0]);
      }

      // console.log('Players:', players);
      // console.log('Selected Player:', selectedPlayer);
    };

    getPlayers();
  }, [selectedPlayer, card]);

  return {
    players,
    selectedPlayer,
    setSelectedPlayer,
  };
};
