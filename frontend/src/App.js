import LootRollCard from './components/loot/LootRollCard';
import LootResultCard from './components/loot/LootResultCard';
import useLootRoll from './hooks/controllers/useLootRollController';
import Button from './components/reusuable/Button';

export default function App() {
  const {
    players,
    player,
    tier,
    faction,
    rollLoot,
    rollLootWithFaction,
    setPlayerState,
    setTierState,
    setFactionState,
    displayFactionSelect,
    displayResults,
    rolledCard,
    markCardSold,
    reset,
    updateCardImages,
    imagesUpdating,
  } = useLootRoll();

  return (
    <>
      <div className='w-full flex flex-col sm:flex-row flex-grow overflow-hidden'>
        <div className='w-1/5 flex-shrink flex-grow-0'>
          <div className='sticky top-0 p-4 w-full'>
            <ul className='flex sm:flex-col overflow-hidden content-center justify-between'>
              <Button additionalClasses='mb-3' onClick={reset}>
                Loot Roll
              </Button>
              <Button onClick={updateCardImages}>
                {imagesUpdating ? 'Loading...' : 'Update Card Images'}
              </Button>
            </ul>
          </div>
        </div>
        <main role='main' className='w-full h-full flex-grow overflow-auto'>
          <div className='bg-slate-300 h-screen'>
            <div className='flex items-center justify-center h-screen'>
              {!displayResults ? (
                <LootRollCard
                  players={players}
                  player={player}
                  tier={tier}
                  faction={faction}
                  rollLoot={rollLoot}
                  rollLootWithFaction={rollLootWithFaction}
                  setPlayerState={setPlayerState}
                  setTierState={setTierState}
                  setFactionState={setFactionState}
                  displayFactionSelect={displayFactionSelect}
                />
              ) : (
                <LootResultCard
                  displayResults={displayResults}
                  rolledCard={rolledCard}
                  player={player}
                  markCardSold={markCardSold}
                  reset={reset}
                />
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
