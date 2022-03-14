import { useState, useEffect } from 'react';
import useLootRollController from './hooks/controllers/useLootDropController';
import useNavigationController from './hooks/controllers/useImageController';
import ChooseLootDrop from './components/loot/ChooseLootDrop';
import ChooseRollAndFaction from './components/loot/ChooseRollAndFaction';
import Result from './components/loot/Result';
import Card from './components/reusuable/Card';
import Header from './components/reusuable/Header';
import Button from './components/reusuable/Button';
import * as helpers from './helpers/helpers';
import { api } from './helpers/constants';

export default function App() {
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
    roll,
    faction,
    showFactionSelect,
    showResults,
    card,
    manualRoll,
    rollLoot,
    setRoll,
    setFaction,
    markCardSold,
    resetLootRoll,
    setManualRoll,
  } = useLootRollController(player);

  const { updateCardImages, imagesUpdating } = useNavigationController();

  console.log(player);

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
                      disabled={showResults}
                    >
                      {players ? players[0].name : ''}
                    </Button>
                  </div>
                  <div className='w-1/2 flex-shrink flex-grow-0 pl-1'>
                    <Button
                      onClick={() => setPlayer(players[1])}
                      classStyle='mb-3'
                      color={player.id === players[1].id ? 'green' : ''}
                      disabled={showResults}
                    >
                      {players ? players[1].name : ''}
                    </Button>
                  </div>
                </>
              )}
            </div>
            <Header>Actions:</Header>
            <ul className='flex sm:flex-col overflow-hidden content-center justify-between'>
              <Button onClick={() => resetLootRoll()} classStyle='mb-3'>
                Loot Drop
              </Button>
              <Button
                onClick={() => updateCardImages()}
                disabled={imagesUpdating}
              >
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
                  <ChooseLootDrop
                    setRoll={setRoll}
                    setManualRoll={setManualRoll}
                  />
                )}
                {manualRoll && !showResults && (
                  <ChooseRollAndFaction
                    roll={roll}
                    faction={faction}
                    rollLoot={rollLoot}
                    setRoll={setRoll}
                    setFaction={setFaction}
                    showFactionSelect={showFactionSelect}
                  />
                )}
                {manualRoll && showResults && (
                  <Result
                    showResults={showResults}
                    card={card}
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
