import { useState, useEffect, useCallback, useContext } from 'react';
import { GlobalContext } from '../../../App';
import { StoreCard } from './StoreCard';
import { Grid } from '../../common/Grid';
import { randomElementFromArray } from '../../../helpers/loot';
import { storeTiers, factionRolls } from '../../../helpers/constants';
import * as api from '../../../helpers/api';

export const StoreCards = () => {
  const [cardPool, setCardPool] = useState('');
  const [tierB, setTierB] = useState('');
  const [tierA, setTierA] = useState('');
  const [tierS, setTierS] = useState('');

  const { savedStoreTiers, setSavedStoreTiers } = useContext(GlobalContext);

  useEffect(() => {
    const initializeCardPool = async () => {
      const cardPool = await api.fetchCardPool();
      setCardPool(cardPool);
    };

    initializeCardPool();
  }, []);

  useEffect(() => {
    if (tierB && tierA && tierS) setSavedStoreTiers([tierB, tierA, tierS]);
  }, [tierB, tierA, tierS, setSavedStoreTiers]);

  const saveCard = useCallback((tier, faction, card, cardPurchased) => {
    if (tier === 'B') setTierB({ tier: tier, card: card, faction: faction, cardPurchased: cardPurchased });
    if (tier === 'A') setTierA({ tier: tier, card: card, faction: faction, cardPurchased: cardPurchased });
    if (tier === 'S') setTierS({ tier: tier, card: card, faction: faction, cardPurchased: cardPurchased });
  }, []);

  const mapStoreCards = () => {
    if (savedStoreTiers) {
      return savedStoreTiers.map((obj) => {
        return (
          <StoreCard
            key={obj.tier}
            tier={obj.tier}
            faction={obj.faction}
            savedCard={obj.card}
            cardPool={cardPool}
            purchased={obj.cardPurchased}
            saveCard={saveCard}
          />
        );
      });
    } else {
      return storeTiers.map((tier) => {
        const faction = randomElementFromArray(factionRolls).name;
        return (
          <StoreCard
            key={tier}
            tier={tier}
            faction={faction}
            savedCard={''}
            cardPool={cardPool}
            purchased={false}
            saveCard={saveCard}
          />
        );
      });
    }
  };

  const storeCardElements = cardPool ? mapStoreCards() : [];
  return <Grid columnNumber={3}>{storeCardElements}</Grid>;
};
