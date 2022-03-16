import { SelectLootDrop } from './loot/SelectLootDrop';
import { SelectRoll } from './loot/SelectRoll';
import { LootResult } from './loot/LootResult';
import { Card } from './Card';

export const Content = ({
  player,
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
}) => {
  return (
    <main role='main' className='w-full h-full flex-grow overflow-auto'>
      <div className='bg-slate-300 h-screen'>
        <div className='flex items-center justify-center h-screen'>
          <Card>
            {' '}
            {!manualRoll && (
              <SelectLootDrop setRoll={setRoll} setManualRoll={setManualRoll} />
            )}
            {manualRoll && !showResults && (
              <SelectRoll
                roll={roll}
                faction={faction}
                rollLoot={rollLoot}
                setRoll={setRoll}
                setFaction={setFaction}
                showFactionSelect={showFactionSelect}
              />
            )}
            {manualRoll && showResults && (
              <LootResult
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
  );
};
