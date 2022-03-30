import { useEffect, useContext } from 'react';
import { GlobalContext } from '../../../App';
import { LootContext } from './Loot';
import { Card } from '../../Card';
import { Header } from '../../Header';
import { Button } from '../../Button';

export const LootAction = () => {
  const { setDisablePlayerSelect } = useContext(GlobalContext);
  const { setLootContent, setLootDrop, setDisableLootDropInput, setLootedCard } = useContext(LootContext);

  useEffect(() => {
    setDisablePlayerSelect(false);
    setDisableLootDropInput(false);
    setLootedCard('');
  }, [setDisablePlayerSelect, setDisableLootDropInput, setLootedCard]);

  const defeatedMinion = (lootDrop) => {
    setLootDrop(lootDrop);
    setLootContent('LootDrop');
    setDisableLootDropInput(true);
  };

  return (
    <Card>
      <Header textCenter={true}>Claim Loot Rewards</Header>
      <Button onClick={() => defeatedMinion('T1')} marginBottom={true}>
        Minion Defeated (2-4 Health)
      </Button>
      <Button onClick={() => defeatedMinion('T1+')} marginBottom={true}>
        Minion Defeated (5-7 Health)
      </Button>
      <Button onClick={() => defeatedMinion('T2')} marginBottom={true}>
        Minion Defeated (8+ Health)
      </Button>
      <Button onClick={() => setLootContent('LootDrop')}>Manually Select Drop</Button>
    </Card>
  );
};
