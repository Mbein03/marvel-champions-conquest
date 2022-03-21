import { useContext } from 'react';
import { LootContext } from '../../App';
import { Header } from '../headers/Header';
import { Button } from '../buttons/Button';

export const LootActionSelect = () => {
  const {
    updateRewardLootDrop,
    setSkipLootActionSelect,
    setDisableLootDropInput,
  } = useContext(LootContext);

  const updateMinionLootDrop = (lootDrop) => {
    updateRewardLootDrop(lootDrop);
    setSkipLootActionSelect(true);
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
      <Button onClick={() => setSkipLootActionSelect(true)}>
        Manually Select Drop
      </Button>
    </div>
  );
};
