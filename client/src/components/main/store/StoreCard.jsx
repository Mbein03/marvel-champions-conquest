import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../../App';
import { Header } from '../../common/Header';
import { SelectInput } from '../../common/SelectInput';
import { Button } from '../../common/Button';
import { Image } from '../../common/Image';
import { Subheader } from '../../common/Subheader';
import { randomElementFromArray, getCard } from '../../../helpers/loot';
import { factions } from '../../../helpers/constants';
import * as api from '../../../helpers/api';

export const StoreCard = ({ tier, faction, cardPool }) => {
  const [cardFaction, setCardFaction] = useState(faction);
  const [card, setCard] = useState('');
  const [cardPurchased, setCardPurchased] = useState(false);

  const { setPlayers, activePlayer } = useContext(GlobalContext);

  var factionOptions = [{ id: '', name: '- Select -' }].concat(factions);

  useEffect(() => {
    if (cardFaction !== 'Your Choice') {
      const card = getCard(tier, cardFaction, cardPool);
      setCard(card);
    }
  }, [tier, cardFaction, cardPool]);

  const purchaseConfirmed = async () => {
    const players = await api.markCardAcquired(card, activePlayer, true);
    setPlayers(players);
    setCardPurchased(true);
  };

  return (
    <div className='justify-center border-2 border-gray-300 rounded-xl px-6 py-2 bg-gray-100'>
      {card ? (
        <>
          <Header textCenter={true} underline={true}>
            {'Tier: ' + card.tier}
          </Header>
          <Image src={'https://marvelcdb.com/' + card.image_path} alt={card.name} />
          {!cardPurchased ? (
            <Button confirmText={'Confirm Purchase'} onConfirm={() => purchaseConfirmed()} marginBottom={true}>
              Purchase Card
            </Button>
          ) : (
            <Button disabled={true} marginBottom={true}>
              Card Purchased
            </Button>
          )}
        </>
      ) : (
        <SelectInput
          id={'faction'}
          labelText={'Faction:'}
          options={factionOptions}
          value={cardFaction}
          onSelect={setCardFaction}
        />
      )}
    </div>
  );
};
