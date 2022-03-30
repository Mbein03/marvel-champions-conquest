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
  const [tier, setTier] = useState('');
  const [faction, setFaction] = useState('Basic');
  const [showFactionSelectInput, setShowFactionSelectInput] = useState(false);

  const { setPlayers, activePlayer } = useContext(GlobalContext);

  const { setLootContent, lootDrop, setLootDrop, disableLootDropInput, setDisableLootDropInput, setLootedCard } =
    useContext(LootContext);

  useEffect(() => {
    if (showFactionSelectInput) setDisableLootDropInput(true);
  });

  const rollConfirmed = async () => {
    const cards = await api.fetchCardPool();

    if (tier) {
      rollForCard(tier, faction, cards);
      return;
    }

    const { resultTier, resultFaction } = loot.getFactionAndTier(constants.rewardTable, lootDrop);

    if (resultFaction === 'Your Choice') {
      setShowFactionSelectInput(true);
      setTier(resultTier);
    } else {
      rollForCard(resultTier, resultFaction, cards);
    }
  };

  const rollForCard = (tier, faction, cards) => {
    const card = loot.getCard(tier, faction, cards);
    if (card) markCardAcquired(card);
    setLootContent('LootResult');
  };

  const markCardAcquired = async (card) => {
    const players = await api.markCardAcquired(card, activePlayer);
    setLootedCard(card);
    setPlayers(players);
  };

  return (
    <Card>
      <Header textCenter={true}>Loot Drop</Header>
      <SelectInput
        id={'lootDrop'}
        name={'lootDrop'}
        labelText={'Loot Drop:'}
        data={constants.lootDrops}
        value={lootDrop}
        onSelect={setLootDrop}
        disabled={disableLootDropInput}
      />
      {showFactionSelectInput && (
        <SelectInput
          id={'faction'}
          name={'faction'}
          labelText={'Faction:'}
          data={constants.factions.slice(0, -1)}
          value={faction}
          onSelect={setFaction}
        />
      )}
      <Button confirmText={'Confirm Roll'} onConfirm={() => rollConfirmed()}>
        Roll For Card
      </Button>
    </Card>
  );
};
