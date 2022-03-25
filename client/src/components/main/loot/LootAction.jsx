import { useContext } from 'react';
import { LootContext } from '../../../App';
import { Header } from '../../Header';
import { Button } from '../../Button';

export const LootAction = () => {
  const { setMainContent, updateRewardLootDrop, setDisableLootDropInput } =
    useContext(LootContext);

  const updateMinionLootDrop = (lootDrop) => {
    updateRewardLootDrop(lootDrop);
    setMainContent('LootDrop');
    setDisableLootDropInput(true);
  };

  return (
    <div>
      <Header textCenter={true}>Claim Loot Rewards</Header>
      <Button onClick={() => updateMinionLootDrop('T1')} marginBottom={true}>
        Minion Defeated (2-4 Health)
      </Button>
      <Button onClick={() => updateMinionLootDrop('T1+')} marginBottom={true}>
        Minion Defeated (5-7 Health)
      </Button>
      <Button onClick={() => updateMinionLootDrop('T2')} marginBottom={true}>
        Minion Defeated (8+ Health)
      </Button>
      <Button onClick={() => setMainContent('LootDrop')}>
        Manually Select Drop
      </Button>
    </div>
  );
};
