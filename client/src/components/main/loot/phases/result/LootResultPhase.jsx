import { useEffect, useContext } from 'react';
import { GlobalContext } from '../../../../../App';
import { LootContext } from '../../LootOverview';
import { CardContainer } from '../../../../common/containers/card/CardContainer';
import { Header } from '../../../../common/headers/header/Header';
import { Button } from '../../../../common/button/Button';
import { Image } from '../../../../common/image/Image';
import * as api from '../../../../../helpers/api';

export const LootResultPhase = () => {
  const { setPlayers, activePlayer, setDisablePlayerSelect } = useContext(GlobalContext);
  const { setLootPhase, lootedCard } = useContext(LootContext);

  useEffect(() => {
    setDisablePlayerSelect(true);
  });

  const saleConfirmed = async () => {
    const players = await api.markCardSold(lootedCard, activePlayer);
    setPlayers(players);
    setLootPhase('LootAction');
  };

  const resetLootProcess = () => {
    setLootPhase('LootAction');
  };

  return (
    <CardContainer fullScreen={true}>
      {lootedCard ? (
        <Header textCenter={true}>{'Tier: ' + lootedCard.tier}</Header>
      ) : (
        <Header textCenter={true}>None</Header>
      )}
      {lootedCard && <Image src={'https://marvelcdb.com/' + lootedCard.image_path} alt={lootedCard.name} />}
      {lootedCard && (
        <Button confirmText={'Confirm Sale'} onConfirm={() => saleConfirmed()} marginBottom={true}>
          Sell Card
        </Button>
      )}
      <Button onClick={() => resetLootProcess()}>Reset</Button>
    </CardContainer>
  );
};
