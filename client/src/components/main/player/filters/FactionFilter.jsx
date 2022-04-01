import { Card } from '../../../common/Card';
import { SelectInput } from '../../../common/SelectInput';
import { Button } from '../../../common/Button';
import { factions } from '../../../../helpers/constants';

export const FactionFilter = ({ faction, setFaction }) => {
  var options = [{ id: '', name: '- Select -' }].concat(factions);

  return (
    <Card grid={true}>
      <SelectInput id={'faction'} labelText={'Faction:'} options={options} value={faction} onSelect={setFaction} />
      <Button onClick={() => setFaction('')} marginBottom={true}>
        Reset
      </Button>
    </Card>
  );
};
