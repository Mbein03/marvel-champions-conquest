import { useContext } from 'react';
import { RewardContext } from '../../App';
import { RewardSelect } from '../rewards/RewardSelect';
import { RewardRollSelect } from '../rewards/RewardRollSelect';
import { RewardCardResult } from '../rewards/RewardCardResult';
import { Card } from './Card';

export const Main = () => {
  // Set variables from necessary controllers via context
  const { skipRewardSelect, showRewardResults } = useContext(RewardContext);
  return (
    <main role='main' className='w-full h-full flex-grow overflow-auto'>
      <div className='bg-slate-300 h-screen'>
        <div className='flex items-center justify-center h-screen'>
          <Card>
            {!skipRewardSelect && <RewardSelect />}
            {skipRewardSelect && !showRewardResults && <RewardRollSelect />}
            {skipRewardSelect && showRewardResults && <RewardCardResult />}
          </Card>
        </div>
      </div>
    </main>
  );
};
