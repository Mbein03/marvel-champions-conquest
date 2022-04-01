import { Card } from '../../../common/Card';
import { TextInput } from '../../../common/TextInput';
import { Button } from '../../../common/Button';

export const NameFilter = ({ searchText, setSearchText }) => {
  return (
    <Card grid={true}>
      <TextInput id={'cardSearch'} labelText={'Card Search:'} value={searchText} onType={setSearchText} />
      <Button onClick={() => setSearchText('')} marginBottom={true}>
        Reset
      </Button>
    </Card>
  );
};
