import { CardContainer } from '../../../../common/containers/card/CardContainer';
import { TextInput } from '../../../../common/inputs/text/TextInput';
import { Button } from '../../../../common/button/Button';

export const NameFilter = ({ searchText, setSearchText }) => {
  return (
    <CardContainer lessPadding={true}>
      <TextInput id={'cardSearch'} labelText={'Card Search:'} value={searchText} onType={setSearchText} />
      <Button onClick={() => setSearchText('')} marginBottom={true}>
        Reset
      </Button>
    </CardContainer>
  );
};
