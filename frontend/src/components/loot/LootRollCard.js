import CardHeader from '../reusuable/CardHeader';
import Button from '../reusuable/Button';
import InputLabel from '../reusuable/InputLabel';
import SelectInput from '../reusuable/SelectInput';
import * as constants from '../../helpers/constants';

const LootRollCard = ({
  players,
  player,
  tier,
  faction,
  rollLoot,
  rollLootWithFaction,
  setPlayerState,
  setTierState,
  setFactionState,
  displayFactionSelect,
  confirmRoll,
  toggleRollConfirmation,
}) => {
  return (
    <div className='block p-6 rounded-lg shadow-lg bg-white max-w-sm w-80'>
      <CardHeader>Loot Roll</CardHeader>
      <InputLabel htmlFor={'player'}>Player:</InputLabel>
      <SelectInput
        id={'player'}
        name={'player'}
        value={player}
        data={players}
        onSelectChange={setPlayerState}
      ></SelectInput>
      <InputLabel htmlFor={'tier'}>Tier Roll:</InputLabel>
      <SelectInput
        id={'tier'}
        name={'tier'}
        value={tier}
        data={constants.tiers}
        onSelectChange={setTierState}
      ></SelectInput>
      {displayFactionSelect && (
        <>
          <InputLabel htmlFor={'faction'}>Choose Faction:</InputLabel>
          <SelectInput
            id={'faction'}
            name={'faction'}
            value={faction}
            data={constants.factions}
            onSelectChange={setFactionState}
          ></SelectInput>
        </>
      )}
      {!confirmRoll ? (
        <Button onClick={toggleRollConfirmation}>Roll</Button>
      ) : (
        <Button
          onClick={displayFactionSelect ? rollLootWithFaction : rollLoot}
          confirm={true}
        >
          Confirm Roll
        </Button>
      )}
    </div>
  );
};

export default LootRollCard;
