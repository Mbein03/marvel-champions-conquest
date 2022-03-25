import { useState, useEffect, useContext } from 'react';
import { PlayerContext } from '../../../App';
import { LootContext } from '../../../App';
import { Header } from '../../Header';
import { Button } from '../../Button';
import { SelectInput } from '../../SelectInput';
import * as constants from '../../../helpers/constants';
import * as api from '../../../helpers/api';
import * as loot from '../../../helpers/loot';

export const LootDrop = () => {
  const [confirmLootDrop, setConfirmLootDrop] = useState(false);
  const { setPlayers, selectedPlayer, setSelectedPlayer } =
    useContext(PlayerContext);
  const {
    cardPool,
    setCardPool,
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
      const card = await loot.determineCard(
        reward.tier,
        reward.faction,
        cardPool,
        selectedPlayer
      );

      markCardAcquired(card);
      return;
    }

    const result = loot.getResult(constants.rewardTable, reward.lootDrop);

    if (result.faction === 'Your Choice') {
      setShowFactionSelectInput(true);
      setReward({ ...reward, tier: reward.tier, faction: 'Basic' });
    } else {
      const card = await loot.determineCard(
        result.tier,
        result.faction,
        cardPool,
        selectedPlayer
      );

      markCardAcquired(card);
    }
  };

  const markCardAcquired = async (card) => {
    const responseData = await api.markCardAcquired(card, selectedPlayer);

    setMainContent('LootReward');
    setReward({ ...reward, card: responseData.acquiredCard });
    setCardPool(responseData.cardPool);
    setPlayers(responseData.players);
    selectedPlayer.player_id === 1
      ? setSelectedPlayer(responseData.players[0])
      : setSelectedPlayer(responseData.players[1]);
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
