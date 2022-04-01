import { Card } from '../../../common/Card';
import { SelectInput } from '../../../common/SelectInput';
import { Button } from '../../../common/Button';
import { tierOptions } from '../../../../helpers/constants';

export const TierFilter = ({ tier, setTier }) => {
  return (
    <Card grid={true}>
      <SelectInput id={'tier'} labelText={'Tier:'} options={tierOptions} value={tier} onSelect={setTier} />
      <Button onClick={() => setTier('')} marginBottom={true}>
        Reset
      </Button>
    </Card>
  );
};
