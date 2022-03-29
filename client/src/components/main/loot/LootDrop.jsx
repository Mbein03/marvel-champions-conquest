import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../../App';
import { CardContext } from '../Main';
import { Card } from '../../Card';
import { Header } from '../../Header';
import { Button } from '../../Button';
import { SelectInput } from '../../SelectInput';
import * as constants from '../../../helpers/constants';
import * as api from '../../../helpers/api';
import * as loot from '../../../helpers/loot';

export const LootDrop = () => {
  const { setPlayers, activePlayer, setActivePlayer, setMainContent } = useContext(GlobalContext);
  const {
    cardPool,
    setCardPool,
    reward,
    setReward,
    updateRewardLootDrop,
    disableLootDropInput,
    setDisableLootDropInput,
    updateRewardFaction,
    showFactionSelectInput,
    setShowFactionSelectInput,
  } = useContext(CardContext);
  const [confirmLootDrop, setConfirmLootDrop] = useState(false);

  useEffect(() => {
    if (showFactionSelectInput || confirmLootDrop) {
      setDisableLootDropInput(true);
    }
  });

  const rollForCard = async () => {
    if (reward.tier && reward.faction) {
      const card = await loot.determineCard(reward.tier, reward.faction, cardPool, activePlayer);

      setMainContent('LootResult');
      if (card) markCardAcquired(card);
      return;
    }

    const result = loot.getResult(constants.rewardTable, reward.lootDrop);

    if (result.faction === 'Your Choice') {
      setShowFactionSelectInput(true);
      console.log(result.tier, result.faction);
      setReward({ ...reward, tier: result.tier, faction: 'Basic' });
    } else {
      const card = await loot.determineCard(result.tier, result.faction, cardPool, activePlayer);

      setMainContent('LootResult');
      if (card) markCardAcquired(card);
    }
  };

  const markCardAcquired = async (card) => {
    const responseData = await api.markCardAcquired(card, activePlayer);

    setReward({ ...reward, card: responseData.acquiredCard });
    setCardPool(responseData.cardPool);
    setPlayers(responseData.players);
    activePlayer.player_id === 1 ? setActivePlayer(responseData.players[0]) : setActivePlayer(responseData.players[1]);
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
