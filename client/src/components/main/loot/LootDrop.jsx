import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../../App';
import { LootContext } from './Loot';
import { Card } from '../../Card';
import { Header } from '../../Header';
import { Button } from '../../Button';
import { SelectInput } from '../../SelectInput';
import * as constants from '../../../helpers/constants';
import * as api from '../../../helpers/api';
import * as loot from '../../../helpers/loot';

export const LootDrop = () => {
  const [showFactionSelectInput, setShowFactionSelectInput] = useState(false);
  const [confirmLootDrop, setConfirmLootDrop] = useState(false);

  const { setPlayers, activePlayer } = useContext(GlobalContext);

  const {
    setLootContent,
    reward,
    setReward,
    updateRewardLootDrop,
    disableLootDropInput,
    setDisableLootDropInput,
    updateRewardFaction,
  } = useContext(LootContext);

  useEffect(() => {
    if (showFactionSelectInput || confirmLootDrop) {
      setDisableLootDropInput(true);
    }
  });

  useEffect(() => {});

  const rollForCard = async () => {
    const cardPool = await api.fetchCardPool();

    if (reward.tier && reward.faction) {
      const card = loot.determineCard(reward.tier, reward.faction, cardPool, activePlayer);

      setLootContent('LootResult');
      if (card) markCardAcquired(card);
      return;
    }

    const result = loot.getResult(constants.rewardTable, reward.lootDrop);

    if (result.faction === 'Your Choice') {
      setShowFactionSelectInput(true);
      setReward({ ...reward, tier: result.tier, faction: 'Basic' });
    } else {
      const card = loot.determineCard(result.tier, result.faction, cardPool, activePlayer);

      setLootContent('LootResult');
      if (card) markCardAcquired(card);
    }
  };

  const markCardAcquired = async (card) => {
    const responseData = await api.markCardAcquired(card, activePlayer);

    setReward({ ...reward, card: responseData.acquiredCard });
    setPlayers(responseData.players);
  };

  return (
    <Card>
      <Header textCenter={true}>Loot Drop</Header>
      <SelectInput
        id={'lootDrop'}
        name={'lootDrop'}
        labelText={'Loot Drop:'}
        data={constants.lootDrops}
        value={reward.lootDrop}
        onSelect={updateRewardLootDrop}
        disabled={disableLootDropInput}
      />
      {showFactionSelectInput && (
        <>
          <SelectInput
            id={'faction'}
            name={'faction'}
            labelText={'Faction:'}
            data={constants.factions.slice(0, -1)}
            value={reward.faction}
            onSelect={updateRewardFaction}
          />
        </>
      )}
      {confirmLootDrop ? (
        <Button onClick={() => rollForCard()} color={'green'}>
          Confirm Roll
        </Button>
      ) : (
        <Button onClick={() => setConfirmLootDrop(!confirmLootDrop)}>Roll For Card</Button>
      )}
    </Card>
  );
};
