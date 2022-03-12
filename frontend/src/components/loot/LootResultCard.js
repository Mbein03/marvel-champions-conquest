import CardHeader from '../reusuable/CardHeader';
import ResultLine from '../reusuable/ResultLine';
import Button from '../reusuable/Button';
import Image from '../reusuable/Image';

const LootResultCard = ({ rolledCard, player, markCardSold, reset }) => {
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
      {rolledCard && (
        <Image
          src={'https://marvelcdb.com/' + rolledCard.image_path}
          alt={rolledCard.name}
        />
      )}
      {rolledCard && (
        <Button
          onClick={() => markCardSold(rolledCard, player)}
          additionalClasses='mb-3'
        >
          Sell
        </Button>
      )}
      <Button onClick={reset}>{rolledCard ? 'Add to Deck' : 'Reset'}</Button>
    </div>
  );
};

export default LootResultCard;
