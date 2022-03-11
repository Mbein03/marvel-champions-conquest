import CardHeader from './CardHeader';
import ResultLine from './ResultLine';
import Button from './Button';

const LootResultCard = ({ rolledCard, reset }) => {
  return (
    <div className='block p-6 rounded-lg shadow-lg bg-white max-w-sm w-80'>
      <CardHeader>Loot Roll</CardHeader>
      {rolledCard && (
        <>
          <ResultLine title={'Faction'} result={rolledCard.faction} />
          <ResultLine title={'Tier'} result={rolledCard.tier} />
        </>
      )}
      <ResultLine
        title={'Card'}
        result={rolledCard ? rolledCard.name : 'None'}
      />
      <Button onClick={reset}>Reset</Button>
    </div>
  );
};

export default LootResultCard;
