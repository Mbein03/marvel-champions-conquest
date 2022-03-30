import { useState, useEffect, useContext } from 'react';
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
  const [confirmSale, setConfirmSale] = useState(false);

  useEffect(() => {
    setDisablePlayerSelect(true);
  });

  const saleConfirmed = async () => {
    const response = await api.markCardSold(lootedCard, activePlayer);
    if (response) {
      setPlayers(response.players);
      setLootContent('LootAction');
    }
  };

  const resetLootProcess = () => {
    setLootContent('LootAction');
  };

  return (
    <Card>
      {lootedCard ? (
        <>
          <Header textCenter={true}>{lootedCard.faction + ' / ' + lootedCard.tier + ' Tier'}</Header>
        </>
      ) : (
        <Header textCenter={true}>None</Header>
      )}
      {lootedCard && <Image src={'https://marvelcdb.com/' + lootedCard.image_path} alt={lootedCard.name} />}
      {lootedCard && !confirmSale && (
        <Button onClick={() => setConfirmSale(!confirmSale)} marginBottom={true}>
          Sell Card
        </Button>
      )}
      {lootedCard && confirmSale && (
        <Button onClick={() => saleConfirmed()} color={'green'} marginBottom={true}>
          Confirm Sale
        </Button>
      )}
      <Button onClick={() => resetLootProcess()}>Reset</Button>
    </Card>
  );
};
