import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../../App';
import { CardContext } from '../Main';
import { LootContext } from './Loot';
import { Card } from '../../Card';
import { Header } from '../../Header';
import { Subheader } from '../../Subheader';
import { Button } from '../../Button';
import { Image } from '../../Image';
import * as api from '../../../helpers/api';

export const LootResult = () => {
  const { setPlayers, activePlayer, setActivePlayer, setDisablePlayerSelect } = useContext(GlobalContext);
  const { setCardPool } = useContext(CardContext);
  const { setLootContent, reward } = useContext(LootContext);
  const [confirmSale, setConfirmSale] = useState(false);

  useEffect(() => {
    setDisablePlayerSelect(true);
  });

  const saleConfirmed = async () => {
    const responseData = await api.markCardSold(reward.card, activePlayer);
    if (responseData) {
      setCardPool(responseData.cardPool);
      setPlayers(responseData.players);
      activePlayer.player_id === 1
        ? setActivePlayer(responseData.players[0])
        : setActivePlayer(responseData.players[1]);
      setLootContent('LootAction');
    }
  };

  const resetLootProcess = () => {
    setDisablePlayerSelect(false);
    setLootContent('LootAction');
  };

  return (
    <Card>
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
      {reward.card && <Image src={'https://marvelcdb.com/' + reward.card.image_path} alt={reward.card.name} />}
      {reward.card && !confirmSale && (
        <Button onClick={() => setConfirmSale(!confirmSale)} marginBottom={true}>
          Sell Card
        </Button>
      )}
      {reward.card && confirmSale && (
        <Button onClick={() => saleConfirmed()} color={'green'} marginBottom={true}>
          Confirm Sale
        </Button>
      )}
      <Button onClick={() => resetLootProcess()}>Reset</Button>
    </Card>
  );
};
