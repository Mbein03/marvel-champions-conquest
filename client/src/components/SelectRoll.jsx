import { useState, useEffect } from 'react';
import { Header } from './Header';
import { Button } from './Button';
import { InputLabel } from './InputLabel';
import { SelectInput } from './SelectInput';
import * as constants from './../helpers/constants';

export const SelectRoll = ({
  roll,
  faction,
  rollLoot,
  setRoll,
  setFaction,
  showFactionSelect,
  disableRollSelect,
  setDisableRollSelect,
}) => {
  const [confirmRoll, setConfirmRoll] = useState(false);

  useEffect(() => {
    if (showFactionSelect || confirmRoll) {
      setDisableRollSelect(true);
    }
  });

  return (
    <div>
      <Header textCenter={true}>
        {showFactionSelect ? 'Select Faction' : 'Select Roll'}
      </Header>
      <InputLabel htmlFor={'roll'}>Roll:</InputLabel>
      <SelectInput
        id={'roll'}
        name={'roll'}
        data={constants.rolls}
        value={roll}
        onSelect={setRoll}
        disabled={disableRollSelect}
      />
      {showFactionSelect && (
        <>
          <InputLabel htmlFor={'faction'}>Faction:</InputLabel>
          <SelectInput
            id={'faction'}
            name={'faction'}
            data={constants.factions}
            value={faction}
            onSelect={setFaction}
          />
        </>
      )}
      {confirmRoll ? (
        <Button onClick={() => rollLoot()} color={'green'}>
          Confirm Roll
        </Button>
      ) : (
        <Button onClick={() => setConfirmRoll(!confirmRoll)}>Roll</Button>
      )}
    </div>
  );
};
