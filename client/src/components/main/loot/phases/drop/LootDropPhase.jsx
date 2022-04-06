import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../../../../App';
import { LootContext } from '../../LootOverview';
import { CardContainer } from '../../../../common/containers/card/CardContainer';
import { Button } from '../../../../common/button/Button';
import { SelectInput } from '../../../../common/inputs/select/SelectInput';
import { InputLabel } from '../../../../common/inputs/label/InputLabel';
import * as constants from '../../../../../helpers/constants';
import { getFactionAndTier, getCard } from '../../../../../helpers/loot';
import * as api from '../../../../../helpers/api';

export const LootDropPhase = () => {
  const [tier, setTier] = useState('');
  const [bestAvailableTier, setBestAvailableTier] = useState('');
  const [faction, setFaction] = useState('');
  const [showTierSelectInput, setShowTierSelectInput] = useState(false);
  const [showFactionSelectInput, setShowFactionSelectInput] = useState(false);

  const { setPlayers, activePlayer, storeStates } = useContext(GlobalContext);

  const { setLootPhase, lootDrop, setLootDrop, disableLootDropInput, setDisableLootDropInput, setLootedCard } =
    useContext(LootContext);

  useEffect(() => {
    if (showFactionSelectInput || showTierSelectInput) setDisableLootDropInput(true);
  });

  const filterTiers = () => {
    let filteredTierOptions = constants.tierOptions;

    switch (bestAvailableTier) {
      case 'S':
        filteredTierOptions = filteredTierOptions.slice(1);
        break;
      case 'A':
        filteredTierOptions = filteredTierOptions.slice(2);
        break;
      default:
        filteredTierOptions = filteredTierOptions.slice(3);
        break;
    }

    if (faction !== 'Basic') {
      filteredTierOptions = filteredTierOptions.filter(function (obj) {
        return obj.id !== 'C';
      });
    }

    return filteredTierOptions;
  };

  const rollConfirmed = async () => {
    const cards = await api.fetchCardPool();

    if (tier && faction) return rollForCard(tier, faction, cards);

    const { resultTier, resultFaction } = getFactionAndTier(constants.rewardTable, lootDrop);

    if (resultFaction === 'Your Choice') setShowFactionSelectInput(true);
    if (resultFaction !== 'Your Choice') setFaction(resultFaction);

    if (
      resultTier === 'None' ||
      resultTier === 'C' ||
      (constants.coloredFactions.includes(resultFaction) && resultTier === 'B')
    )
      return rollForCard(resultTier, resultFaction, cards);

    setShowTierSelectInput(true);
    setBestAvailableTier(resultTier);
    setTier(resultTier);
  };

  const rollForCard = (tier, faction, cards) => {
    const card = getCard(tier, faction, cards);

    if (card && storeStates) {
      storeStates.forEach((state) => {
        if (state.card && state.card.card_id === card.card_id && card.qty === 1) {
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
        options={constants.lootDropOptions}
        value={lootDrop}
        onSelect={setLootDrop}
        disabled={disableLootDropInput}
      />
      {showFactionSelectInput && (
        <SelectInput
          id={'faction'}
          labelText={'Faction:'}
          options={constants.factionOptions}
          value={faction}
          onSelect={setFaction}
        />
      )}
      {!showFactionSelectInput && faction && (
        <>
          <InputLabel for={'faction'}>Faction:</InputLabel> <p className='mb-3'>{faction}</p>
        </>
      )}
      {showTierSelectInput && (
        <SelectInput id={'tier'} labelText={'Tier:'} options={filterTiers()} value={tier} onSelect={setTier} />
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
