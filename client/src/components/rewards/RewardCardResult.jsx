import { useState, useContext } from 'react';
import { LootDropContext } from '../../App';
import { Header } from '../headers/Header';
import { Subheader } from '../headers/Subheader';
import { Button } from '../buttons/Button';
import { Image } from '../images/Image';
import * as helpers from '../../helpers/helpers';

export const RewardCardResult = ({ player }) => {
  // Set state to toggle sale confirmation button
  const [confirmSale, setConfirmSale] = useState(false);

  // Set variables from necessary controllers via context
  const { card, resetLootRoll } = useContext(LootDropContext);

  // When sale is confirmed, mark card sold and reset loot roll process
  const saleConfirmed = async () => {
    const soldCard = await helpers.markCardSold(card, player);
    console.log('Card Sold:', soldCard);
    if (soldCard) resetLootRoll();
  };

  return (
    <div>
      <Header textCenter={true}>Card Reward</Header>
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
          onClick={() => saleConfirmed()}
          color={'green'}
          marginBottom={true}
        >
          Confirm
        </Button>
      )}
      <Button onClick={() => resetLootRoll()}>Reset</Button>
    </div>
  );
};
