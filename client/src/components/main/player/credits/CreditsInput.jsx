import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../../../App';
import { Card } from '../../../common/Card';
import { TextInput } from '../../../common/TextInput';
import { Button } from '../../../common/Button';
import * as api from '../../../../helpers/api';

export const CreditsInput = () => {
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
    <Card grid={true}>
      <TextInput id={'credits'} labelText={'Credits:'} value={credits} onType={setCredits} />
      <Button confirmText={'Confirm Update'} onConfirm={() => updateCredits()} marginBottom={true}>
        Update Credits
      </Button>
    </Card>
  );
};
