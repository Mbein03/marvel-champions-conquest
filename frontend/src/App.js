import LootRollCard from './components/loot/LootRollCard';
import LootResultCard from './components/loot/LootResultCard';
import useLootRoll from './hooks/controllers/useLootRollController';

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
    reset,
  } = useLootRoll();

  return (
    <>
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
              reset={reset}
            />
          )}
        </div>
      </div>
    </>
  );
}
