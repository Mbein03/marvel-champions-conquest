import { useState } from 'react';
import Header from '../reusuable/Header';
import Button from '../reusuable/Button';
import InputLabel from '../reusuable/InputLabel';
import SelectInput from '../reusuable/SelectInput';
import * as constants from '../../helpers/constants';

const ChooseTierAndFaction = ({
  tier,
  faction,
  rollLoot,
  rollLootWithFaction,
  setTierState,
  setFactionState,
  showFactionSelect,
}) => {
  const [confirmRoll, setConfirmRoll] = useState(false);

  return (
    <div>
      <Header classStyle='text-center'>
        {showFactionSelect ? 'Choose Faction' : 'Choose Roll Tier'}
      </Header>
      <InputLabel htmlFor={'tier'}>Tier Roll:</InputLabel>
      <SelectInput
        id={'tier'}
        name={'tier'}
        value={tier}
        data={constants.tiers}
        onSelectChange={setTierState}
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
            onSelectChange={setFactionState}
          />
        </>
      )}
      {confirmRoll ? (
        <Button
          onClick={showFactionSelect ? rollLootWithFaction : rollLoot}
          color={'green'}
        >
          Confirm Roll
        </Button>
      ) : (
        <Button onClick={() => setConfirmRoll(!confirmRoll)}>Roll</Button>
      )}
    </div>
  );
};

export default ChooseTierAndFaction;
