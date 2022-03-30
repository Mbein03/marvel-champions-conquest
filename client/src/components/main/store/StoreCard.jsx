import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../../App';
import { SelectInput } from '../../SelectInput';
import { Button } from '../../Button';
import { Image } from '../../Image';
import * as api from '../../../helpers/api';
import { Subheader } from '../../Subheader';

import * as loot from '../../../helpers/loot';
import { factions } from '../../../helpers/constants';

export const StoreCard = ({ tier, resetCards, setResetCards }) => {
  const [faction, setFaction] = useState('');
  const [card, setCard] = useState('');

  useEffect(() => {
    // if (!card || resetCards) {
    //   const cardPool = await api.fetchCardPool();
    //   const randomFaction = factions[loot.randomIntFromInterval(0, 5)].name;
    //   const filteredCards = loot.filterCards(tier, randomFaction, cardPool);
    //   const card = loot.getCard(filteredCards);
    //   setCard(card);
    // }

    setResetCards(false);
  }, [resetCards, setResetCards]);

  if (faction) {
    console.log('faction', faction);
  }

  const purchaseConfirmed = async () => {
    console.log('buy card');
    // const responseData = await api.markCardSold(card, activePlayer);
    // if (responseData) {
    //   setCardPool(responseData.cardPool);
    //   setPlayers(responseData.players);
    //   setConfirmSale(!confirmSale);
    // }
  };

  const displayCard = () => {
    return (
      <>
        <Image src={'https://marvelcdb.com/' + card.image_path} alt={card.name} />
        <Button confirmText={'Confirm Purchase'} onConfirm={() => purchaseConfirmed()} marginBottom={true}>
          Purchase Card
        </Button>
      </>
    );
  };

  const displayFactionSelect = () => {
    return (
      <>
        <SelectInput
          id={tier}
          name={tier}
          labelText={'Faction:'}
          data={factions.slice(0, -1)}
          value={faction}
          onSelect={setFaction}
        />
      </>
    );
  };

  const column = card ? displayCard() : displayFactionSelect();

  return <div className='justify-center border-2 border-gray-300 rounded-xl px-6 py-2 bg-gray-100'>{column}</div>;
};
