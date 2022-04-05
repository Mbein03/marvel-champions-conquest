import { CardContainer } from '../../../../common/containers/card/CardContainer';
import { SelectInput } from '../../../../common/inputs/select/SelectInput';
import { Button } from '../../../../common/button/Button';
import { tierOptions } from '../../../../../helpers/constants';

export const TierFilter = ({ tier, setTier }) => {
  return (
    <CardContainer lessPadding={true}>
      <SelectInput id={'tier'} labelText={'Tier:'} options={tierOptions} value={tier} onSelect={setTier} />
      <Button onClick={() => setTier('')} marginBottom={true}>
        Reset
      </Button>
    </CardContainer>
  );
};
