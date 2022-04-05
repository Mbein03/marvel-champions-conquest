import { useState, useEffect, useCallback, useContext } from 'react';
import { GlobalContext } from '../../../../App';
import { StoreCard } from './card/StoreCard';
import { randomElementFromArray } from '../../../../helpers/loot';
import { storeTiers, factionRolls } from '../../../../helpers/constants';
import * as api from '../../../../helpers/api';

export const StoreCards = () => {
  const [cardPool, setCardPool] = useState('');
  const [tierB, setTierB] = useState('');
  const [tierA, setTierA] = useState('');
  const [tierS, setTierS] = useState('');

  const { storeStates, setStoreStates } = useContext(GlobalContext);

  useEffect(() => {
    const initializeCardPool = async () => {
      const cardPool = await api.fetchCardPool();
      setCardPool(cardPool);
    };

    initializeCardPool();
  }, []);

  useEffect(() => {
    if (tierB && tierA && tierS) setStoreStates([tierB, tierA, tierS]);
  }, [tierB, tierA, tierS, setStoreStates]);

  const saveCard = useCallback((tier, faction, card, cardPurchased) => {
    if (tier === 'B') setTierB({ tier: tier, card: card, faction: faction, cardPurchased: cardPurchased });
    if (tier === 'A') setTierA({ tier: tier, card: card, faction: faction, cardPurchased: cardPurchased });
    if (tier === 'S') setTierS({ tier: tier, card: card, faction: faction, cardPurchased: cardPurchased });
  }, []);

  const mapStoreCards = () => {
    if (storeStates) {
      return storeStates.map((state) => {
        return (
          <StoreCard
            key={state.tier}
            tier={state.tier}
            defaultFaction={state.faction}
            card={state.card}
            cardPool={cardPool}
            purchased={state.cardPurchased}
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
            defaultFaction={faction}
            card={''}
            cardPool={cardPool}
            purchased={false}
            saveCard={saveCard}
          />
        );
      });
    }
  };

  const storeCardElements = cardPool ? mapStoreCards() : [];
  return storeCardElements;
};
