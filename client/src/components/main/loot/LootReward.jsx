import { useState, useEffect, useContext } from 'react';
import { PlayerContext } from '../../../App';
import { LootContext } from '../../../App';
import { Header } from '../../Header';
import { Subheader } from '../../Subheader';
import { Button } from '../../Button';
import { Image } from '../../Image';
import * as api from '../../../helpers/api';

export const LootReward = () => {
  const [confirmSale, setConfirmSale] = useState(false);
  const {
    setPlayers,
    selectedPlayer,
    setSelectedPlayer,
    setDisablePlayerSelect,
  } = useContext(PlayerContext);
  const { setCardPool, reward, resetLootProcess } = useContext(LootContext);

  useEffect(() => {
    setDisablePlayerSelect(true);
  });

  const saleConfirmed = async () => {
    const responseData = await api.markCardSold(reward.card, selectedPlayer);
    if (responseData) {
      setCardPool(responseData.cardPool);
      setPlayers(responseData.players);
      selectedPlayer.player_id === 1
        ? setSelectedPlayer(responseData.players[0])
        : setSelectedPlayer(responseData.players[1]);
      resetLootProcess();
    }
  };

  return (
    <div>
      <Header textCenter={true}>Reward</Header>
      {reward.card ? (
        <>
          <Subheader title={'Card'} text={reward.card.name} />
          <Subheader title={'Faction'} text={reward.card.faction} />
          <Subheader title={'Tier'} text={reward.card.tier} />
        </>
      ) : (
        <Subheader title={'Card'} text={'None'} />
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
