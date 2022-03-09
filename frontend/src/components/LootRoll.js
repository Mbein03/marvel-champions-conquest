import useLootRoll from '../hooks/useLootRoll';
import Button from '../components/Button';
import InputLabel from '../components/InputLabel';
import SelectInput from '../components/SelectInput';
import * as constants from '../helpers/constants';

const LootRoll = () => {
  const {
    cards,
    players,
    player,
    tier,
    faction,
    rolledCard,
    rollLoot,
    rollLootWithFaction,
    setPlayerState,
    setTierState,
    setFactionState,
    displayFactionSelect,
    displayResults,
  } = useLootRoll();

  return (
    <>
      <section className='p-6 flex items-center justify-center'>
        <section className='block p-6 rounded-lg shadow-lg bg-white max-w-sm w-80'>
          <form>
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
          </form>
          <Button
            onClick={displayFactionSelect ? rollLootWithFaction : rollLoot}
          >
            Roll
          </Button>
        </section>
      </section>
      <section className='flex items-center justify-center'>
        <section className='block p-6 rounded-lg shadow-lg bg-white max-w-sm w-80'>
          {displayResults && <h4>Card: {rolledCard.name}</h4>}
        </section>
      </section>
    </>
  );
};

export default LootRoll;
