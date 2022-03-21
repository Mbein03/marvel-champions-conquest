import { useState, useEffect, useContext } from 'react';
import { LootContext } from '../../App';
import { Header } from '../headers/Header';
import { Button } from '../buttons/Button';
import { SelectInput } from '../inputs/SelectInput';
import * as constants from '../../helpers/constants';

export const LootDropSelect = () => {
  // Set state to toggle drop confirmation button
  const [confirmLootDrop, setConfirmLootDrop] = useState(false);

  // Set variables from necessary controllers via context
  const {
    rewardFaction,
    setRewardFaction,
    showFactionSelectInput,
    lootDrop,
    setLootDrop,
    disableLootDropInput,
    setDisableLootDropInput,
    rollForReward,
  } = useContext(LootContext);

  useEffect(() => {
    // If faction select is showing or user is in process of confirming loot drop, disable loot drop select input
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
        value={lootDrop}
        onSelect={setLootDrop}
        disabled={disableLootDropInput}
      />
      {showFactionSelectInput && (
        <>
          <SelectInput
            id={'faction'}
            name={'faction'}
            labelText={'Faction:'}
            data={constants.factions}
            value={rewardFaction}
            onSelect={setRewardFaction}
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
