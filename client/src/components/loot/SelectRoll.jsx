import { useState } from 'react';
import { Header } from '../Header';
import { Button } from '../form/Button';
import { InputLabel } from '../form/InputLabel';
import { SelectInput } from '../form/SelectInput';
import * as constants from '../../helpers/constants';

export const SelectRoll = ({
  roll,
  faction,
  rollLoot,
  setRoll,
  setFaction,
  showFactionSelect,
}) => {
  const [confirmRoll, setConfirmRoll] = useState(false);

  return (
    <div>
      <Header classStyle='text-center'>
        {showFactionSelect ? 'Choose Faction' : 'Choose Roll'}
      </Header>
      <InputLabel htmlFor={'roll'}>Roll:</InputLabel>
      <SelectInput
        id={'roll'}
        name={'roll'}
        data={constants.rolls}
        value={roll}
        onValueChange={setRoll}
        disabled={showFactionSelect}
      />
      {showFactionSelect && (
        <>
          <InputLabel htmlFor={'faction'}>Choose Faction:</InputLabel>
          <SelectInput
            id={'faction'}
            name={'faction'}
            data={constants.factions}
            value={faction}
            onValueChange={setFaction}
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
