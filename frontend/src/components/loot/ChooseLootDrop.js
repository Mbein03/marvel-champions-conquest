import Header from '../reusuable/Header';
import Button from '../reusuable/Button';

const ChooseLootDrop = ({ setRoll, setManualRoll }) => {
  return (
    <div>
      <Header classStyle='text-center'>Choose Loot Roll</Header>
      <Button onClick={() => setRoll('T1')} classStyle='mb-3'>
        Killed Minion (2-4 Health)
      </Button>
      <Button onClick={() => setRoll('T1+')} classStyle='mb-3'>
        Killed Minion (5-7 Health)
      </Button>
      <Button onClick={() => setRoll('T2')} classStyle='mb-3'>
        Killed Minion (8+ Health)
      </Button>
      <Button onClick={() => setManualRoll(true)}>Manual Roll</Button>
    </div>
  );
};

export default ChooseLootDrop;
