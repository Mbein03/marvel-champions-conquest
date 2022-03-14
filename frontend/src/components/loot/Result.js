import { useState } from 'react';
import Header from '../reusuable/Header';
import ResultLine from '../reusuable/ResultLine';
import Button from '../reusuable/Button';
import Image from '../reusuable/Image';

const Result = ({ rolledCard, player, markCardSold, resetLootRoll }) => {
  const [confirmSale, setConfirmSale] = useState(false);

  return (
    <div>
      <Header classStyle='text-center'>Roll Result</Header>
      <ResultLine
        title={'Card'}
        result={
          rolledCard
            ? ' ' +
              rolledCard.name +
              ' (' +
              rolledCard.faction +
              ' / ' +
              rolledCard.tier +
              ')'
            : 'None'
        }
      />
      {rolledCard && (
        <Image
          src={'https://marvelcdb.com/' + rolledCard.image_path}
          alt={rolledCard.name}
        />
      )}
      {rolledCard && !confirmSale && (
        <Button onClick={() => setConfirmSale(!confirmSale)} classStyle='mb-3'>
          Sell
        </Button>
      )}
      {rolledCard && confirmSale && (
        <Button
          onClick={() => markCardSold(rolledCard, player)}
          color={'green'}
          classStyle='mb-3'
        >
          Confirm Sale
        </Button>
      )}
      <Button onClick={resetLootRoll}>Reset</Button>
    </div>
  );
};

export default Result;
