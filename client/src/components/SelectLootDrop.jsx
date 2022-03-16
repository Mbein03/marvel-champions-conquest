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
      <Header classStyle='text-center'>Select Loot Drop</Header>
      <Button onClick={() => minionRoll('T1')} classStyle='mb-3'>
        Killed Minion (2-4 Health)
      </Button>
      <Button onClick={() => minionRoll('T1+')} classStyle='mb-3'>
        Killed Minion (5-7 Health)
      </Button>
      <Button onClick={() => minionRoll('T2')} classStyle='mb-3'>
        Killed Minion (8+ Health)
      </Button>
      <Button onClick={() => setManualRoll(true)}>Manual Roll</Button>
    </div>
  );
};
