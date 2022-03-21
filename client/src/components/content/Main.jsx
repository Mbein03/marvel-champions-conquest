import { useContext } from 'react';
import { LootContext } from '../../App';
import { LootActionSelect } from '../loot/LootActionSelect';
import { LootDropSelect } from '../loot/LootDropSelect';
import { LootReward } from '../loot/LootReward';
import { Card } from './Card';

export const Main = () => {
  const { skipLootActionSelect, showReward } = useContext(LootContext);
  return (
    <main role='main' className='w-full h-full flex-grow overflow-auto'>
      <div className='bg-slate-300 h-screen'>
        <div className='flex items-center justify-center h-screen'>
          <Card>
            {!skipLootActionSelect && <LootActionSelect />}
            {skipLootActionSelect && !showReward && <LootDropSelect />}
            {skipLootActionSelect && showReward && <LootReward />}
          </Card>
        </div>
      </div>
    </main>
  );
};
