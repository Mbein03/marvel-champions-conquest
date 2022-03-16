import { useState, useEffect } from 'react';
import { useLootDropController as LootDropController } from './hooks/controllers/useLootDropController';
import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';
import * as helpers from './helpers/helpers';
import { api } from './helpers/constants';

export const App = () => {
  const [players, setPlayers] = useState('');
  const [player, setPlayer] = useState('');

  // Calls method to fetch players from API on page load
  useEffect(() => {
    helpers.fetchData(api.getPlayers).then((players) => {
      setPlayers(players);

      // If player hasn't been set for select, set it
      if (!player) {
        setPlayer(players[0]);
      }
    });
  }, [player]);

  const {
    card,
    faction,
    setFaction,
    showFactionSelect,
    roll,
    setRoll,
    manualRoll,
    setManualRoll,
    showResults,
    rollLoot,
    resetLootRoll,
    markCardSold,
  } = LootDropController(player);

  return (
    <>
      <div className='w-full flex flex-col sm:flex-row flex-grow overflow-hidden'>
        <Sidebar
          players={players}
          player={player}
          setPlayer={setPlayer}
          showResults={showResults}
          resetLootRoll={resetLootRoll}
        />
        <Content
          player={player}
          card={card}
          faction={faction}
          setFaction={setFaction}
          showFactionSelect={showFactionSelect}
          roll={roll}
          setRoll={setRoll}
          manualRoll={manualRoll}
          setManualRoll={setManualRoll}
          showResults={showResults}
          rollLoot={rollLoot}
          resetLootRoll={resetLootRoll}
          markCardSold={markCardSold}
        />
      </div>
    </>
  );
};
