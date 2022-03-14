import { useState, useEffect } from 'react';
import useLootRollController from './hooks/controllers/useLootRollController';
import useNavigationController from './hooks/controllers/useImageController';
import ChooseLootRoll from './components/loot/ChooseLootRoll';
import ChooseTierAndFaction from './components/loot/ChooseTierAndFaction';
import Result from './components/loot/Result';
import Card from './components/reusuable/Card';
import Header from './components/reusuable/Header';
import Button from './components/reusuable/Button';
import * as helpers from './helpers/helpers';
import { api } from './helpers/constants';

export default function App() {
  const [players, setPlayers] = useState('');
  const [player, setPlayer] = useState('');

  // Calls method to fetch cards/players from API on page load
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
    tier,
    faction,
    rollLoot,
    rollLootWithFaction,
    setTierState,
    setFactionState,
    showFactionSelect,
    showResults,
    rolledCard,
    markCardSold,
    resetLootRoll,
    manualRoll,
    setManualRoll,
  } = useLootRollController(player);

  const { updateCardImages, imagesUpdating } = useNavigationController();

  return (
    <>
      <div className='w-full flex flex-col sm:flex-row flex-grow overflow-hidden'>
        <div className='w-1/4 flex-shrink flex-grow-0'>
          <div className='sticky top-0 p-4 w-full'>
            <Header>Player Select:</Header>
            <div className='w-full flex flex-col sm:flex-row flex-grow overflow-hidden'>
              {players && (
                <>
                  <div className='w-1/2 flex-shrink flex-grow-0 pr-1'>
                    <Button
                      onClick={() => setPlayer(players[0])}
                      classStyle='mb-3'
                      color={player.id === players[0].id ? 'green' : ''}
                    >
                      {players ? players[0].name : ''}
                    </Button>
                  </div>
                  <div className='w-1/2 flex-shrink flex-grow-0 pl-1'>
                    <Button
                      onClick={() => setPlayer(players[1])}
                      classStyle='mb-3'
                      color={player.id === players[1].id ? 'green' : ''}
                    >
                      {players ? players[1].name : ''}
                    </Button>
                  </div>
                </>
              )}
            </div>
            <Header>Actions:</Header>
            <ul className='flex sm:flex-col overflow-hidden content-center justify-between'>
              <Button onClick={resetLootRoll} classStyle='mb-3'>
                Loot Roll
              </Button>
              <Button onClick={updateCardImages} disabled={imagesUpdating}>
                {imagesUpdating ? 'Loading...' : 'Update Card Images'}
              </Button>
            </ul>
          </div>
        </div>
        <main role='main' className='w-full h-full flex-grow overflow-auto'>
          <div className='bg-slate-300 h-screen'>
            <div className='flex items-center justify-center h-screen'>
              <Card>
                {' '}
                {!manualRoll && (
                  <ChooseLootRoll
                    setTierState={setTierState}
                    setManualRoll={setManualRoll}
                  />
                )}
                {manualRoll && !showResults && (
                  <ChooseTierAndFaction
                    tier={tier}
                    faction={faction}
                    rollLoot={rollLoot}
                    rollLootWithFaction={rollLootWithFaction}
                    setTierState={setTierState}
                    setFactionState={setFactionState}
                    showFactionSelect={showFactionSelect}
                  />
                )}
                {manualRoll && showResults && (
                  <Result
                    showResults={showResults}
                    rolledCard={rolledCard}
                    player={player}
                    markCardSold={markCardSold}
                    resetLootRoll={resetLootRoll}
                  />
                )}
              </Card>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
