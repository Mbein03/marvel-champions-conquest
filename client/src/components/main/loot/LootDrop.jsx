import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../../App';
import { LootContext } from './LootOverview';
import { Card } from '../../common/Card';
import { Button } from '../../common/Button';
import { SelectInput } from '../../common/SelectInput';
import { rewardTable, lootDropOptions, factionOptions } from '../../../helpers/constants';
import { getFactionAndTier, getCard } from '../../../helpers/loot';
import * as api from '../../../helpers/api';

export const LootDrop = () => {
  const [tier, setTier] = useState('');
  const [faction, setFaction] = useState('');
  const [showFactionSelectInput, setShowFactionSelectInput] = useState(false);

  const { setPlayers, activePlayer, setSavedStoreTiers } = useContext(GlobalContext);

  const { setLootContent, lootDrop, setLootDrop, disableLootDropInput, setDisableLootDropInput, setLootedCard } =
    useContext(LootContext);

  useEffect(() => {
    if (showFactionSelectInput) setDisableLootDropInput(true);
  });

  const rollConfirmed = async () => {
    setSavedStoreTiers('');
    const cards = await api.fetchCardPool();

    if (tier) {
      rollForCard(tier, faction, cards);
      return;
    }

    const { resultTier, resultFaction } = getFactionAndTier(rewardTable, lootDrop);

    if (resultFaction === 'Your Choice') {
      setShowFactionSelectInput(true);
      setTier(resultTier);
    } else {
      rollForCard(resultTier, resultFaction, cards);
    }
  };

  const rollForCard = (tier, faction, cards) => {
    const card = getCard(tier, faction, cards);
    if (card) markCardAcquired(card);
    setLootContent('LootResult');
  };

  const markCardAcquired = async (card) => {
    const players = await api.markCardAcquired(card, activePlayer, false);
    setLootedCard(card);
    setPlayers(players);
  };

  return (
    <Card>
      <SelectInput
        id={'lootDrop'}
        labelText={'Loot Drop:'}
        options={lootDropOptions}
        value={lootDrop}
        onSelect={setLootDrop}
        disabled={disableLootDropInput}
      />
      {showFactionSelectInput && (
        <SelectInput
          id={'faction'}
          labelText={'Faction:'}
          options={factionOptions}
          value={faction}
          onSelect={setFaction}
        />
      )}
      <Button
        confirmText={'Confirm Roll'}
        onConfirm={() => rollConfirmed()}
        disabled={!lootDrop || (showFactionSelectInput && !faction)}
      >
        Roll For Card
      </Button>
    </Card>
  );
};
