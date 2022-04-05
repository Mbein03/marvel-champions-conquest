import { StoreCards } from './cards/StoreCards';
import { GridContainer } from '../../common/containers/grid/GridContainer';
import { StoreInfo } from './info/StoreInfo';

export const StoreOverview = () => {
  return (
    <GridContainer columnNumber={3}>
      <StoreInfo />
      <StoreCards />
    </GridContainer>
  );
};
