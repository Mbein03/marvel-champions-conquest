import { useState, useEffect } from 'react';
import { StoreCard } from './StoreCard';
import { Grid } from '../../common/Grid';
import { randomElementFromArray } from '../../../helpers/loot';
import { storeCardTiers, factionRolls } from '../../../helpers/constants';
import * as api from '../../../helpers/api';

export const StoreCards = () => {
  const [cardPool, setCardPool] = useState('');

  useEffect(() => {
    const initializeCardPool = async () => {
      const cardPool = await api.fetchCardPool();
      setCardPool(cardPool);
    };

    initializeCardPool();
  }, []);

  const mapStoreCards = () => {
    return storeCardTiers.map((tier) => {
      const faction = randomElementFromArray(factionRolls).name;
      return <StoreCard key={tier} tier={tier} faction={faction} cardPool={cardPool} />;
    });
  };

  const storeCardElements = cardPool ? mapStoreCards() : [];
  return <Grid columnNumber={3}>{storeCardElements}</Grid>;
};
