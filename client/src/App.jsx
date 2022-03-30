import { useState, useEffect, createContext } from 'react';
import { Sidebar } from './components/sidebar/Sidebar';
import { Main } from './components/main/Main';
import * as api from './helpers/api';

export const GlobalContext = createContext();

export const App = () => {
  const [players, setPlayers] = useState('');
  const [disablePlayerSelect, setDisablePlayerSelect] = useState(false);
  const [activePlayer, setActivePlayer] = useState('');
  const [mainContent, setMainContent] = useState('Card Collection');

  useEffect(() => {
    const initializePlayers = async () => {
      const players = await api.fetchPlayers();

      setPlayers(players);
      setActivePlayer(players[0]);
    };

    const updateCardImages = async () => {
      await api.updateCardImages();
    };

    initializePlayers();
    updateCardImages();
  }, []);

  useEffect(() => {
    if (activePlayer) activePlayer.player_id === 1 ? setActivePlayer(players[0]) : setActivePlayer(players[1]);
  }, [activePlayer, players]);

  const GlobalStates = {
    players,
    setPlayers,
    disablePlayerSelect,
    setDisablePlayerSelect,
    activePlayer,
    setActivePlayer,
    mainContent,
    setMainContent,
  };

  return (
    <GlobalContext.Provider value={GlobalStates}>
      <Sidebar />
      <Main />
    </GlobalContext.Provider>
  );
};
