import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../../../../App';
import { Header } from '../../../../common/headers/header/Header';
import { SelectInput } from '../../../../common/inputs/select/SelectInput';
import { Button } from '../../../../common/button/Button';
import { Image } from '../../../../common/image/Image';
import { CardContainer } from '../../../../common/containers/card/CardContainer';
import { getCard } from '../../../../../helpers/loot';
import { storeTierPrices, factionOptions } from '../../../../../helpers/constants';
import * as api from '../../../../../helpers/api';

export const StoreCard = ({ tier, defaultFaction, card, cardPool, purchased, saveCard }) => {
  const [faction, setFaction] = useState(defaultFaction);
  const [cardPurchased, setCardPurchased] = useState(purchased);

  const { setPlayers, activePlayer } = useContext(GlobalContext);

  useEffect(() => {
    if (!card) {
      const card = getCard(tier, faction, cardPool);
      saveCard(tier, faction, card, cardPurchased);
      return;
    }

    saveCard(tier, faction, card, cardPurchased);
  }, [card, faction, tier, cardPurchased, cardPool, saveCard]);

  const purchaseConfirmed = async () => {
    const players = await api.markCardAcquired(card, activePlayer, true);
    setPlayers(players);
    setCardPurchased(true);
  };

  const renderButton = () => {
    if (cardPurchased) {
      return (
        <Button color='green' marginBottom={true} disabled={true}>
          Card Purchased
        </Button>
      );
    } else if (storeTierPrices[card.tier] > activePlayer.credits) {
      return (
        <Button color='red' marginBottom={true} disabled={true}>
          Insufficient Funds
        </Button>
      );
    } else {
      return (
        <Button confirmText={'Confirm Purchase'} onConfirm={() => purchaseConfirmed()} marginBottom={true}>
          Purchase Card
        </Button>
      );
    }
  };

  return (
    <CardContainer>
      <Header textCenter={true}>{'Tier: ' + tier + ' - ' + storeTierPrices[tier] + ' Credits'}</Header>
      {card ? (
        <>
          <Image src={'https://marvelcdb.com/' + card.image_path} alt={card.name} type={'StoreCard'} />
          {renderButton()}
        </>
      ) : (
        <SelectInput
          id={'faction'}
          labelText={'Faction:'}
          options={factionOptions}
          value={faction}
          onSelect={setFaction}
          marginTop={true}
        />
      )}
    </CardContainer>
  );
};
