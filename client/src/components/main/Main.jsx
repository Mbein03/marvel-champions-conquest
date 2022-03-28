import { useContext } from 'react';
import { LootContext } from '../../App';
import { Grid } from '../Grid';
import { StoreCards } from './store/StoreCards';
import { PlayerCards } from './card-collection/PlayerCards';
import { Card } from '../Card';
import { LootAction } from './loot/LootAction';
import { LootDrop } from './loot/LootDrop';
import { LootResult } from './loot/LootResult';

export const Main = () => {
  const { mainContent } = useContext(LootContext);

  const renderSwitch = (mainContent) => {
    switch (mainContent) {
      case 'Store':
        return (
          <Grid>
            <StoreCards />
          </Grid>
        );
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
      case 'LootResult':
        return (
          <Card>
            <LootResult />
          </Card>
        );
      default:
        return (
          <Grid>
            <PlayerCards />
          </Grid>
        );
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
