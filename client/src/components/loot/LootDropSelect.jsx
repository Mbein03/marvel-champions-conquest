import { useState, useEffect, useContext } from 'react';
import { LootContext } from '../../App';
import { Header } from '../headers/Header';
import { Button } from '../buttons/Button';
import { SelectInput } from '../inputs/SelectInput';
import * as constants from '../../helpers/constants';

export const LootDropSelect = () => {
  const [confirmLootDrop, setConfirmLootDrop] = useState(false);

  const {
    reward,
    showFactionSelectInput,
    updateRewardLootDrop,
    disableLootDropInput,
    setDisableLootDropInput,
    rollForReward,
    updateRewardFaction,
  } = useContext(LootContext);

  useEffect(() => {
    if (showFactionSelectInput || confirmLootDrop) {
      setDisableLootDropInput(true);
    }
  });

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
        <Button onClick={() => rollForReward()} color={'green'}>
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
