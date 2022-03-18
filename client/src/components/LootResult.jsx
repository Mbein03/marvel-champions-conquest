import { useState } from 'react';
import { Header } from './Header';
import { Subheader } from './Subheader';
import { Button } from './Button';
import { Image } from './Image';

export const LootResult = ({ card, player, markCardSold, resetLootRoll }) => {
  const [confirmSale, setConfirmSale] = useState(false);

  return (
    <div>
      <Header textCenter={true}>Roll Result</Header>
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
        <Button
          onClick={() => setConfirmSale(!confirmSale)}
          marginBottom={true}
        >
          Sell
        </Button>
      )}
      {card && confirmSale && (
        <Button
          onClick={() => markCardSold(card, player)}
          color={'green'}
          marginBottom={true}
        >
          Confirm Sale
        </Button>
      )}
      <Button onClick={() => resetLootRoll()}>Reset</Button>
    </div>
  );
};
