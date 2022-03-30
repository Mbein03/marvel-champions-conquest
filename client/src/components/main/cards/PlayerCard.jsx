import { useContext } from 'react';
import { GlobalContext } from '../../../App';
import { Card } from '../../Card';
import { Button } from '../../Button';
import { Image } from '../../Image';
import * as api from '../../../helpers/api';
import { Subheader } from '../../Subheader';

export const PlayerCard = ({ card }) => {
  const { setPlayers, activePlayer } = useContext(GlobalContext);

  const saleConfirmed = async () => {
    const players = await api.markCardSold(card, activePlayer);
    setPlayers(players);
  };

  return (
    <Card grid={true}>
      <Image src={'https://marvelcdb.com/' + card.image_path} alt={card.name} />
      <Subheader title={'Quantity'} text={card.qty} />
      <Button confirmText={'Confirm Sale'} onConfirm={() => saleConfirmed()} marginBottom={true}>
        Sell Card
      </Button>
    </Card>
  );
};
