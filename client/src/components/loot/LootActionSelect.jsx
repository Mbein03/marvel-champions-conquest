import { useContext } from 'react';
import { LootContext } from '../../App';
import { Header } from '../headers/Header';
import { Button } from '../buttons/Button';

export const LootActionSelect = () => {
  // Set variables from necessary controllers via context
  const { setLootDrop, setSkipLootActionSelect, setDisableLootDropInput } =
    useContext(LootContext);

  // Set loot drop based on minion selected and proceed to next step
  const setMinionLootDrop = (drop) => {
    setLootDrop(drop);
    setSkipLootActionSelect(true);
    setDisableLootDropInput(true);
  };
  return (
    <div>
      <Header textCenter={true}>Claim Loot Rewards</Header>
      <Button onClick={() => setMinionLootDrop('T1')} marginBottom={true}>
        Minion Defeated (2-4 Health)
      </Button>
      <Button onClick={() => setMinionLootDrop('T1+')} marginBottom={true}>
        Minion Defeated (5-7 Health)
      </Button>
      <Button onClick={() => setMinionLootDrop('T2')} marginBottom={true}>
        Minion Defeated (8+ Health)
      </Button>
      <Button onClick={() => setSkipLootActionSelect(true)}>
        Manually Select Drop
      </Button>
    </div>
  );
};
