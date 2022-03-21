import { useState, useContext } from 'react';
import { LootContext } from '../../App';
import { Header } from '../headers/Header';
import { Subheader } from '../headers/Subheader';
import { Button } from '../buttons/Button';
import { Image } from '../images/Image';
import * as api from '../../helpers/api';

export const LootReward = ({ player }) => {
  const [confirmSale, setConfirmSale] = useState(false);
  const { reward, resetLootProcess } = useContext(LootContext);

  const saleConfirmed = async () => {
    const soldCard = await api.markCardSold(reward.card, player);
    if (soldCard) resetLootProcess();
  };

  return (
    <div>
      <Header textCenter={true}>Reward</Header>
      {reward.card ? (
        <>
          <Subheader title={'Card'} result={reward.card.name} />
          <Subheader title={'Faction'} result={reward.card.faction} />
          <Subheader title={'Tier'} result={reward.card.tier} />
        </>
      ) : (
        <Subheader title={'Card'} result={'None'} />
      )}
      {reward.card && (
        <Image
          src={'https://marvelcdb.com/' + reward.card.image_path}
          alt={reward.card.name}
        />
      )}
      {reward.card && !confirmSale && (
        <Button
          onClick={() => setConfirmSale(!confirmSale)}
          marginBottom={true}
        >
          Sell Card
        </Button>
      )}
      {reward.card && confirmSale && (
        <Button
          onClick={() => saleConfirmed()}
          color={'green'}
          marginBottom={true}
        >
          Confirm Sale
        </Button>
      )}
      <Button onClick={() => resetLootProcess()}>Reset</Button>
    </div>
  );
};
