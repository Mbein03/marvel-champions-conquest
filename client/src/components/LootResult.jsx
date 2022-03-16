import { useState } from 'react';
import { Header } from './Header';
import { Subheader } from './Subheader';
import { Button } from './Button';
import { Image } from './Image';

export const LootResult = ({ card, player, markCardSold, resetLootRoll }) => {
  const [confirmSale, setConfirmSale] = useState(false);

  return (
    <div>
      <Header classStyle='text-center'>Roll Result</Header>
      {card ? (
        <>
          <Subheader title={'Card'} result={card.name} />
          <Subheader title={'Faction'} result={card.faction} />
          <Subheader title={'Tier'} result={card.tier} />
        </>
      ) : (
        <Subheader title={'Card'} result={'None'} />
      )}
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
