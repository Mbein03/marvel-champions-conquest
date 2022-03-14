import { useState } from 'react';
import Header from '../reusuable/Header';
import Button from '../reusuable/Button';
import InputLabel from '../reusuable/InputLabel';
import SelectInput from '../reusuable/SelectInput';
import * as constants from '../../helpers/constants';

const ChooseRollAndFaction = ({
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
        value={roll}
        data={constants.rolls}
        onSelectChange={setRoll}
        disabled={showFactionSelect}
      />
      {showFactionSelect && (
        <>
          <InputLabel htmlFor={'faction'}>Choose Faction:</InputLabel>
          <SelectInput
            id={'faction'}
            name={'faction'}
            value={faction}
            data={constants.factions}
            onSelectChange={setFaction}
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

export default ChooseRollAndFaction;
