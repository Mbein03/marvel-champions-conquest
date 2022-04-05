import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../../../../App';
import { CardContainer } from '../../../../common/containers/card/CardContainer';
import { TextInput } from '../../../../common/inputs/text/TextInput';
import { Button } from '../../../../common/button/Button';
import * as api from '../../../../../helpers/api';

export const CreditUpdater = () => {
  const [credits, setCredits] = useState('');

  const { setPlayers, activePlayer } = useContext(GlobalContext);

  useEffect(() => {
    if (activePlayer) {
      setCredits(activePlayer.credits);
    }
  }, [activePlayer]);

  const updateCredits = async () => {
    const players = await api.updateCredits(activePlayer, credits);
    setPlayers(players);
  };

  return (
    <CardContainer lessPadding={true}>
      <TextInput id={'credits'} labelText={'Credits:'} value={credits} onType={setCredits} />
      <Button confirmText={'Confirm Update'} onConfirm={() => updateCredits()} marginBottom={true}>
        Update Credits
      </Button>
    </CardContainer>
  );
};
