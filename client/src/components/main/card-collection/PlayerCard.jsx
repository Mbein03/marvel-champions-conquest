import { useState, useContext } from 'react';
import { GlobalContext } from '../../../App';
import { CardContext } from '../Main';
import { Card } from '../../Card';
import { Button } from '../../Button';
import { Image } from '../../Image';
import * as api from '../../../helpers/api';
import { Subheader } from '../../Subheader';

export const PlayerCard = ({ card }) => {
  const [confirmSale, setConfirmSale] = useState(false);
  const { setPlayers, activePlayer } = useContext(GlobalContext);
  const { setCardPool } = useContext(CardContext);

  const saleConfirmed = async () => {
    const responseData = await api.markCardSold(card, activePlayer);
    if (responseData) {
      setCardPool(responseData.cardPool);
      setPlayers(responseData.players);
      setConfirmSale(!confirmSale);
    }
  };

  return (
    <Card grid={true}>
      <Image src={'https://marvelcdb.com/' + card.image_path} alt={card.name} />
      <Subheader title={'Quantity'} text={card.qty} />
      {!confirmSale && (
        <Button onClick={() => setConfirmSale(!confirmSale)} marginBottom={true}>
          Sell Card
        </Button>
      )}
      {confirmSale && (
        <Button onClick={() => saleConfirmed()} color={'green'} marginBottom={true}>
          Confirm Sale
        </Button>
      )}
    </Card>
  );
};
