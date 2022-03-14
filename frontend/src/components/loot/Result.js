import { useState } from 'react';
import Header from '../reusuable/Header';
import ResultLine from '../reusuable/ResultLine';
import Button from '../reusuable/Button';
import Image from '../reusuable/Image';

const Result = ({ card, player, markCardSold, resetLootRoll }) => {
  const [confirmSale, setConfirmSale] = useState(false);

  return (
    <div>
      <Header classStyle='text-center'>Roll Result</Header>
      <ResultLine
        title={'Card'}
        result={
          card
            ? ' ' + card.name + ' (' + card.faction + ' / ' + card.tier + ')'
            : 'None'
        }
      />
      {card && (
        <Image
          src={'https://marvelcdb.com/' + card.image_path}
          alt={card.name}
        />
      )}
      {card && !confirmSale && (
        <Button onClick={() => setConfirmSale(!confirmSale)} classStyle='mb-3'>
          Sell
        </Button>
      )}
      {card && confirmSale && (
        <Button
          onClick={() => markCardSold(card, player)}
          color={'green'}
          classStyle='mb-3'
        >
          Confirm Sale
        </Button>
      )}
      <Button onClick={() => resetLootRoll()}>Reset</Button>
    </div>
  );
};

export default Result;
