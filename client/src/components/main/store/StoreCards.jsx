import { StoreCard } from './StoreCard';
import { Grid } from '../../common/Grid';
import { storeCardTiers } from '../../../helpers/constants';

export const StoreCards = () => {
  const mapCards = (tiers) => {
    return tiers.map((tier) => <StoreCard key={tier} tier={tier} />);
  };

  const storeCards = mapCards(storeCardTiers);

  return <Grid>{storeCards}</Grid>;
};
