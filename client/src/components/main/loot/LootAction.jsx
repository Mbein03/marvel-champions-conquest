import { useEffect, useContext } from 'react';
import { LootContext } from './Loot';
import { Card } from '../../Card';
import { Header } from '../../Header';
import { Button } from '../../Button';

export const LootAction = () => {
  const { setLootContent, reward, setReward, updateRewardLootDrop, setDisableLootDropInput } = useContext(LootContext);

  useEffect(() => {
    setReward({ lootDrop: reward.lootDrop, tier: '', faction: '', card: '' });
    setLootContent('LootAction');
    setDisableLootDropInput(false);
  }, [reward.lootDrop, setDisableLootDropInput, setLootContent, setReward]);

  const updateMinionLootDrop = (lootDrop) => {
    updateRewardLootDrop(lootDrop);
    setLootContent('LootDrop');
    setDisableLootDropInput(true);
  };

  return (
    <Card>
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
      <Button onClick={() => setLootContent('LootDrop')}>Manually Select Drop</Button>
    </Card>
  );
};
