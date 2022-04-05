import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../../../../App';
import { LootContext } from '../../LootOverview';
import { CardContainer } from '../../../../common/containers/card/CardContainer';
import { Button } from '../../../../common/button/Button';
import { SelectInput } from '../../../../common/inputs/select/SelectInput';
import { rewardTable, lootDropOptions, factionOptions } from '../../../../../helpers/constants';
import { getFactionAndTier, getCard } from '../../../../../helpers/loot';
import * as api from '../../../../../helpers/api';

export const LootDropPhase = () => {
  const [tier, setTier] = useState('');
  const [faction, setFaction] = useState('');
  const [showFactionSelectInput, setShowFactionSelectInput] = useState(false);

  const { setPlayers, activePlayer, storeStates } = useContext(GlobalContext);

  const { setLootPhase, lootDrop, setLootDrop, disableLootDropInput, setDisableLootDropInput, setLootedCard } =
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

    const { result, resultTier, resultFaction } = getFactionAndTier(rewardTable, lootDrop);
    console.log(result);

    if (resultFaction === 'Your Choice') {
      setShowFactionSelectInput(true);
      setTier(resultTier);
    } else {
      rollForCard(resultTier, resultFaction, cards);
    }
  };

  const rollForCard = (tier, faction, cards) => {
    const card = getCard(tier, faction, cards);

    if (storeStates) {
      storeStates.forEach((state) => {
        if (state.card && state.card.card_id === card.card_id) {
          rollForCard(tier, faction, cards);
          return;
        }
      });
    }

    if (card) markCardAcquired(card);
    setLootPhase('LootResult');
  };

  const markCardAcquired = async (card) => {
    const players = await api.markCardAcquired(card, activePlayer, false);
    setLootedCard(card);
    setPlayers(players);
  };

  return (
    <CardContainer fullScreen={true}>
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
    </CardContainer>
  );
};
