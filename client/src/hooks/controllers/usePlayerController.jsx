import { useState, useEffect } from 'react';
import * as api from '../../helpers/api';

export const usePlayerController = (card) => {
  const [players, setPlayers] = useState('');
  const [selectedPlayer, setSelectedPlayer] = useState('');

  useEffect(() => {
    const getPlayers = async () => {
      const players = await api.fetchPlayers();
      setPlayers(players);

      if (!selectedPlayer) {
        setSelectedPlayer(players[0]);
      }
    };

    getPlayers();
  }, [selectedPlayer, card]);

  return {
    players,
    selectedPlayer,
    setSelectedPlayer,
  };
};
