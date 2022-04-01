import { Card } from '../../../common/Card';
import { SelectInput } from '../../../common/SelectInput';
import { Button } from '../../../common/Button';
import { factionOptions } from '../../../../helpers/constants';

export const FactionFilter = ({ faction, setFaction }) => {
  return (
    <Card grid={true}>
      <SelectInput
        id={'faction'}
        labelText={'Faction:'}
        options={factionOptions}
        value={faction}
        onSelect={setFaction}
      />
      <Button onClick={() => setFaction('')} marginBottom={true}>
        Reset
      </Button>
    </Card>
  );
};
