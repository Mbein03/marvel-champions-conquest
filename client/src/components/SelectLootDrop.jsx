import { Header } from './Header';
import { Button } from './Button';

export const SelectLootDrop = ({
  setRoll,
  setManualRoll,
  setDisableRollSelect,
}) => {
  const minionRoll = (roll) => {
    setRoll(roll);
    setManualRoll(true);
    setDisableRollSelect(true);
  };
  return (
    <div>
      <Header textCenter={true}>Select Loot Drop</Header>
      <Button onClick={() => minionRoll('T1')} marginBottom={true}>
        Killed Minion (2-4 Health)
      </Button>
      <Button onClick={() => minionRoll('T1+')} marginBottom={true}>
        Killed Minion (5-7 Health)
      </Button>
      <Button onClick={() => minionRoll('T2')} marginBottom={true}>
        Killed Minion (8+ Health)
      </Button>
      <Button onClick={() => setManualRoll(true)}>Manual Roll</Button>
    </div>
  );
};
