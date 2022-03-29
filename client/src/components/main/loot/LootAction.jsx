import { useEffect, useContext } from 'react';
import { GlobalContext } from '../../../App';
import { CardContext } from '../Main';
import { Card } from '../../Card';
import { Header } from '../../Header';
import { Button } from '../../Button';

export const LootAction = () => {
  const { setMainContent } = useContext(GlobalContext);
  const { reward, setReward, updateRewardLootDrop, setDisableLootDropInput, setShowFactionSelectInput } =
    useContext(CardContext);

  useEffect(() => {
    setReward({ lootDrop: reward.lootDrop, tier: '', faction: '', card: '' });
    setMainContent('LootAction');
    setDisableLootDropInput(false);
    setShowFactionSelectInput(false);
  }, [reward.lootDrop, setDisableLootDropInput, setMainContent, setReward, setShowFactionSelectInput]);

  const updateMinionLootDrop = (lootDrop) => {
    updateRewardLootDrop(lootDrop);
    setMainContent('LootDrop');
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
      <Button onClick={() => setMainContent('LootDrop')}>Manually Select Drop</Button>
    </Card>
  );
};
