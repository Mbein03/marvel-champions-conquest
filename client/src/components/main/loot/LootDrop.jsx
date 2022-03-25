import { useState, useEffect, useContext } from 'react';
import { PlayerContext } from '../../../App';
import { LootContext } from '../../../App';
import { Header } from '../../Header';
import { Button } from '../../Button';
import { SelectInput } from '../../SelectInput';
import * as constants from '../../../helpers/constants';
import * as loot from '../../../helpers/loot';

export const LootDrop = () => {
  const [confirmLootDrop, setConfirmLootDrop] = useState(false);
  const { selectedPlayer } = useContext(PlayerContext);
  const {
    cardPool,
    reward,
    setReward,
    setMainContent,
    updateRewardLootDrop,
    disableLootDropInput,
    setDisableLootDropInput,
    updateRewardFaction,
    showFactionSelectInput,
    setShowFactionSelectInput,
  } = useContext(LootContext);

  useEffect(() => {
    if (showFactionSelectInput || confirmLootDrop) {
      setDisableLootDropInput(true);
    }
  });

  const rollForCard = async () => {
    if (reward.tier && reward.faction) {
      const lootedCard = await loot.determineCard(
        reward.tier,
        reward.faction,
        cardPool,
        selectedPlayer
      );
      setReward({ ...reward, card: lootedCard });
      setMainContent('LootReward');
      return;
    }

    const rewardResult = loot.getRewardResult(
      constants.rewardTable,
      reward.lootDrop
    );

    if (rewardResult.faction === 'Your Choice') {
      setShowFactionSelectInput(true);
      setReward({ ...reward, tier: rewardResult.tier, faction: 'Basic' });
    } else {
      const lootedCard = await loot.determineCard(
        rewardResult.tier,
        rewardResult.faction,
        cardPool,
        selectedPlayer
      );
      setReward({ ...reward, card: lootedCard });
      setMainContent('LootReward');
    }
  };

  return (
    <div>
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
        <Button onClick={() => setConfirmLootDrop(!confirmLootDrop)}>
          Roll For Card
        </Button>
      )}
    </div>
  );
};
