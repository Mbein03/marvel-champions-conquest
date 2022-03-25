import { useState, useEffect, createContext } from 'react';
import { Sidebar } from './components/sidebar/Sidebar';
import { Main } from './components/main/Main';
import * as api from './helpers/api';

export const LootContext = createContext();
export const PlayerContext = createContext();

export const App = () => {
  const [players, setPlayers] = useState('');
  const [disablePlayerSelect, setDisablePlayerSelect] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState('');

  const [cardPool, setCardPool] = useState('');
  const [soldCard, setSoldCard] = useState('');
  const [reward, setReward] = useState({
    lootDrop: 'T1',
    tier: '',
    faction: '',
    card: '',
  });

  const [mainContent, setMainContent] = useState('PlayerCards');
  const [disableLootDropInput, setDisableLootDropInput] = useState(false);
  const [showFactionSelectInput, setShowFactionSelectInput] = useState(false);

  useEffect(() => {
    const updateCardPoolAndPlayer = async () => {
      console.log('update card pool and player');
      const players = await api.fetchPlayers();
      const cardPool = await api.fetchCardPool();

      setPlayers(players);

      !selectedPlayer || selectedPlayer.player_id === 1
        ? setSelectedPlayer(players[0])
        : setSelectedPlayer(players[1]);

      setCardPool(cardPool);
    };

    updateCardPoolAndPlayer();
  }, [reward.card, soldCard]);

  const updateRewardLootDrop = (value) => {
    setReward({ ...reward, lootDrop: value });
  };

  const updateRewardFaction = (value) => {
    setReward({ ...reward, faction: value });
  };

  const resetLootProcess = () => {
    setReward({ lootDrop: reward.lootDrop, tier: '', faction: '', card: '' });
    setMainContent('LootAction');
    setDisableLootDropInput(false);
    setShowFactionSelectInput(false);
    setDisablePlayerSelect(false);
  };

  const PlayerStates = {
    players,
    setPlayers,
    disablePlayerSelect,
    setDisablePlayerSelect,
    selectedPlayer,
    setSelectedPlayer,
    setSoldCard,
  };

  const LootStates = {
    cardPool,
    setCardPool,
    reward,
    setReward,
    mainContent,
    setMainContent,
    updateRewardLootDrop,
    disableLootDropInput,
    setDisableLootDropInput,
    updateRewardFaction,
    showFactionSelectInput,
    setShowFactionSelectInput,
    resetLootProcess,
  };

  return (
    <>
      <PlayerContext.Provider value={PlayerStates}>
        <LootContext.Provider value={LootStates}>
          <Sidebar />
          <Main />
        </LootContext.Provider>
      </PlayerContext.Provider>
    </>
  );
};
