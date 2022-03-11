import CardHeader from './CardHeader';
import Button from './Button';
import InputLabel from './InputLabel';
import SelectInput from './SelectInput';
import * as constants from '../helpers/constants';

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
      <Button onClick={displayFactionSelect ? rollLootWithFaction : rollLoot}>
        Roll
      </Button>
    </div>
  );
};

export default LootRollCard;
