import { useContext } from 'react';
import { GlobalContext } from '../../../../../App';
import { CardContainer } from '../../../../common/containers/card/CardContainer';
import { Button } from '../../../../common/button/Button';
import { Image } from '../../../../common/image/Image';
import { Subheader } from '../../../../common/headers/subheader/Subheader';
import { SameLineContainer } from '../../../../common/containers/same-line/SameLineContainer';
import * as api from '../../../../../helpers/api';

export const PlayerCard = ({ card }) => {
  const { setPlayers, activePlayer } = useContext(GlobalContext);

  const saleConfirmed = async () => {
    const players = await api.markCardSold(card, activePlayer);
    setPlayers(players);
  };

  return (
    <CardContainer lessPadding={true}>
      <Image src={'https://marvelcdb.com/' + card.image_path} alt={card.name} type='PlayerCard' />
      <SameLineContainer>
        <Subheader title={'Tier'} text={card.tier ? card.tier : 'N/A'} spanUnderline={true} marginBottom={true} />
        <Subheader title={'Qty'} text={card.qty} spanUnderline={true} marginBottom={true} />
      </SameLineContainer>
      <Button confirmText={'Confirm Sale'} onConfirm={() => saleConfirmed()} marginBottom={true}>
        Sell Card
      </Button>
    </CardContainer>
  );
};
