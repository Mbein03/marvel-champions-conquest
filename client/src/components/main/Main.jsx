import { useContext } from 'react';
import { LootContext } from '../../App';
import { CardGrid } from './players/CardGrid';
import { Card } from '../Card';
import { LootAction } from './loot/LootAction';
import { LootDrop } from './loot/LootDrop';
import { LootReward } from './loot/LootReward';

export const Main = () => {
  const { mainContent } = useContext(LootContext);

  const renderSwitch = (mainContent) => {
    switch (mainContent) {
      case 'LootAction':
        return (
          <Card>
            <LootAction />
          </Card>
        );
      case 'LootDrop':
        return (
          <Card>
            <LootDrop />
          </Card>
        );
      case 'LootReward':
        return (
          <Card>
            <LootReward />
          </Card>
        );
      default:
        return <CardGrid />;
    }
  };

  return (
    <main role='main' className='w-full h-full flex-grow overflow-auto'>
      <div className='bg-slate-300'>
        <div className='flex items-center justify-center'>
          {renderSwitch(mainContent)}
        </div>
      </div>
    </main>
  );
};
