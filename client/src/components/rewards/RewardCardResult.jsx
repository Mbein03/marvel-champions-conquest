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
  const { rewardCard, resetRewardRoll } = useContext(LootDropContext);

  // When sale is confirmed, mark card sold and reset loot roll process
  const saleConfirmed = async () => {
    const soldCard = await helpers.markCardSold(rewardCard, player);
    console.log('Card Sold:', soldCard);
    if (soldCard) resetRewardRoll();
  };

  return (
    <div>
      <Header textCenter={true}>Card Reward</Header>
      {rewardCard ? (
        <>
          <Subheader title={'Card'} result={rewardCard.name} />
          <Subheader title={'Faction'} result={rewardCard.faction} />
          <Subheader title={'Tier'} result={rewardCard.tier} />
        </>
      ) : (
        <Subheader title={'Card'} result={'None'} />
      )}
      {rewardCard && (
        <Image
          src={'https://marvelcdb.com/' + rewardCard.image_path}
          alt={rewardCard.name}
        />
      )}
      {rewardCard && !confirmSale && (
        <Button
          onClick={() => setConfirmSale(!confirmSale)}
          marginBottom={true}
        >
          Sell
        </Button>
      )}
      {rewardCard && confirmSale && (
        <Button
          onClick={() => saleConfirmed()}
          color={'green'}
          marginBottom={true}
        >
          Confirm
        </Button>
      )}
      <Button onClick={() => resetRewardRoll()}>Reset</Button>
    </div>
  );
};
