import { useState, useEffect, useContext } from 'react';
import { LootDropContext } from '../../App';
import { Header } from '../headers/Header';
import { Button } from '../buttons/Button';
import { SelectInput } from '../inputs/SelectInput';
import * as constants from '../../helpers/constants';

export const RewardRollSelect = () => {
  // Set state to toggle reward confirmation button
  const [confirmReward, setConfirmReward] = useState(false);

  // Set variables from necessary controllers via context
  const {
    rewardFaction,
    setRewardFaction,
    showFactionSelectInput,
    rewardRoll,
    setRewardRoll,
    disableRewardRollInput,
    setDisableRewardRollInput,
    rollForReward,
  } = useContext(LootDropContext);

  useEffect(() => {
    // If faction select is showing or user is in process of confirming reward, disable reward select input
    if (showFactionSelectInput || confirmReward) {
      setDisableRewardRollInput(true);
    }
  });

  return (
    <div>
      <Header textCenter={true}>
        {showFactionSelectInput ? 'Select Faction' : 'Select Reward Roll'}
      </Header>
      <SelectInput
        id={'rewardRoll'}
        name={'rewardRoll'}
        labelText={'Roll:'}
        data={constants.rewardRolls}
        value={rewardRoll}
        onSelect={setRewardRoll}
        disabled={disableRewardRollInput}
      />
      {showFactionSelectInput && (
        <>
          <SelectInput
            id={'faction'}
            name={'faction'}
            labelText={'Faction:'}
            data={constants.factions}
            value={rewardFaction}
            onSelect={setRewardFaction}
          />
        </>
      )}
      {confirmReward ? (
        <Button onClick={() => rollForReward()} color={'green'}>
          Confirm
        </Button>
      ) : (
        <Button onClick={() => setConfirmReward(!confirmReward)}>Submit</Button>
      )}
    </div>
  );
};
