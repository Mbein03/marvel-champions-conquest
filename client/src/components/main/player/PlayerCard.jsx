import { useContext } from 'react';
import { GlobalContext } from '../../../App';
import { Card } from '../../common/Card';
import { Button } from '../../common/Button';
import { Image } from '../../common/Image';
import { Subheader } from '../../common/Subheader';
import { SameLineContainer } from '../../common/SameLineContainer';
import * as api from '../../../helpers/api';

export const PlayerCard = ({ card }) => {
  const { setPlayers, activePlayer } = useContext(GlobalContext);

  const saleConfirmed = async () => {
    const players = await api.markCardSold(card, activePlayer);
    setPlayers(players);
  };

  return (
    <Card grid={true}>
      <Image src={'https://marvelcdb.com/' + card.image_path} alt={card.name} />
      <SameLineContainer>
        <Subheader title={'Tier'} text={card.tier ? card.tier : 'N/A'} spanUnderline={true} />
        <Subheader title={'Qty'} text={card.qty} spanUnderline={true} />
      </SameLineContainer>
      <Button confirmText={'Confirm Sale'} onConfirm={() => saleConfirmed()} marginBottom={true}>
        Sell Card
      </Button>
    </Card>
  );
};
