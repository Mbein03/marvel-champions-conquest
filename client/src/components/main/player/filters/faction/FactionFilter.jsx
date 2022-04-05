import { CardContainer } from '../../../../common/containers/card/CardContainer';
import { SelectInput } from '../../../../common/inputs/select/SelectInput';
import { Button } from '../../../../common/button/Button';
import { factionOptions } from '../../../../../helpers/constants';

export const FactionFilter = ({ faction, setFaction }) => {
  return (
    <CardContainer lessPadding={true}>
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
    </CardContainer>
  );
};
