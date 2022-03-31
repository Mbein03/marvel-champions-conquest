import { Card } from '../../../common/Card';
import { SelectInput } from '../../../common/SelectInput';
import { Button } from '../../../common/Button';
import * as constants from '../../../../helpers/constants';

export const TierFilter = ({ tier, setTier }) => {
  var options = [{ id: '', name: '- Select -' }].concat(constants.cardTiers);

  return (
    <Card grid={true}>
      <SelectInput id={'tier'} labelText={'Tier:'} options={options} value={tier} onSelect={setTier} />
      <Button onClick={() => setTier('')} marginBottom={true}>
        Reset
      </Button>
    </Card>
  );
};
