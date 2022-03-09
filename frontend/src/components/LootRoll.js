// Testing Git
import useLootRoll from '../hooks/useLootRoll';
import Button from '../components/Button';
import InputLabel from '../components/InputLabel';
import SelectInput from '../components/SelectInput';
import * as constants from '../helpers/constants';

const LootRoll = () => {
  const {
    cards,
    players,
    rolledCard,
    tier,
    player,
    rollLoot,
    setPlayerState,
    setTierState,
  } = useLootRoll();

  return (
    <section className='flex items-center justify-center h-screen bg-slate-300'>
      <div className='block p-6 rounded-lg shadow-lg bg-white max-w-sm w-80'>
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
        </form>
        <Button onClick={rollLoot}>Roll</Button>
        <h4 className='mt-3'>Card: {rolledCard.name}</h4>
      </div>
    </section>
  );
};

export default LootRoll;
