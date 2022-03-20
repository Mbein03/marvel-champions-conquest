import { useContext } from 'react';
import { RewardContext } from '../../App';
import { Header } from '../headers/Header';
import { Button } from '../buttons/Button';

export const RewardSelect = () => {
  // Set variables from necessary controllers via context
  const { setRewardRoll, setSkipRewardSelect, setDisableRewardRollInput } =
    useContext(RewardContext);

  // Set reward roll based on minion selected and proceed to next step
  const setMinionRewardRoll = (roll) => {
    setRewardRoll(roll);
    setSkipRewardSelect(true);
    setDisableRewardRollInput(true);
  };
  return (
    <div>
      <Header textCenter={true}>Rewards</Header>
      <Button onClick={() => setMinionRewardRoll('T1')} marginBottom={true}>
        Minion Defeated (2-4 Health)
      </Button>
      <Button onClick={() => setMinionRewardRoll('T1+')} marginBottom={true}>
        Minion Defeated (5-7 Health)
      </Button>
      <Button onClick={() => setMinionRewardRoll('T2')} marginBottom={true}>
        Minion Defeated (8+ Health)
      </Button>
      <Button onClick={() => setSkipRewardSelect(true)}>Manual Roll</Button>
    </div>
  );
};
