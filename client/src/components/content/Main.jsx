import { useContext } from 'react';
import { LootDropContext } from '../../App';
import { RewardSelect } from '../rewards/RewardSelect';
import { RewardRollSelect } from '../rewards/RewardRollSelect';
import { RewardCardResult } from '../rewards/RewardCardResult';
import { Card } from './Card';

export const Main = () => {
  // Set variables from necessary controllers via context
  const { showRewards, showRewardResults } = useContext(LootDropContext);
  return (
    <main role='main' className='w-full h-full flex-grow overflow-auto'>
      <div className='bg-slate-300 h-screen'>
        <div className='flex items-center justify-center h-screen'>
          <Card>
            {!showRewards && <RewardSelect />}
            {showRewards && !showRewardResults && <RewardRollSelect />}
            {showRewards && showRewardResults && <RewardCardResult />}
          </Card>
        </div>
      </div>
    </main>
  );
};
