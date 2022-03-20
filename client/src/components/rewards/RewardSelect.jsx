import { useContext } from 'react';
import { LootDropContext } from '../../App';
import { Header } from '../headers/Header';
import { Button } from '../buttons/Button';

export const RewardSelect = () => {
  // Set variables from necessary controllers via context
  const { setRewardRoll, setShowRewards, setDisableRewardRollInput } =
    useContext(LootDropContext);

  // Set reward based on minion reward type selected and proceed to next step
  const setMinionRewardRoll = (rewardRoll) => {
    setRewardRoll(rewardRoll);
    setShowRewards(true);
    setDisableRewardRollInput(true);
  };
  return (
    <div>
      <Header textCenter={true}>Select Reward</Header>
      <Button onClick={() => setMinionRewardRoll('T1')} marginBottom={true}>
        Minion Kill (2-4 Health)
      </Button>
      <Button onClick={() => setMinionRewardRoll('T1+')} marginBottom={true}>
        Minion Kill (5-7 Health)
      </Button>
      <Button onClick={() => setMinionRewardRoll('T2')} marginBottom={true}>
        Minion Kill (8+ Health)
      </Button>
      <Button onClick={() => setShowRewards(true)}>Manual Roll</Button>
    </div>
  );
};
