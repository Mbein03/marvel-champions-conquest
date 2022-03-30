import { useEffect, useContext } from 'react';
import { GlobalContext } from '../../../App';
import { LootContext } from './Loot';
import { Card } from '../../Card';
import { Header } from '../../Header';
import { Button } from '../../Button';
import { Image } from '../../Image';
import * as api from '../../../helpers/api';

export const LootResult = () => {
  const { setPlayers, activePlayer, setDisablePlayerSelect } = useContext(GlobalContext);
  const { setLootContent, lootedCard } = useContext(LootContext);

  useEffect(() => {
    setDisablePlayerSelect(true);
  });

  const saleConfirmed = async () => {
    const players = await api.markCardSold(lootedCard, activePlayer);
    setPlayers(players);
    setLootContent('LootAction');
  };

  const resetLootProcess = () => {
    setLootContent('LootAction');
  };

  return (
    <Card>
      {lootedCard ? (
        <Header textCenter={true}>{lootedCard.faction + ' / ' + lootedCard.tier + ' Tier'}</Header>
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
    </Card>
  );
};
