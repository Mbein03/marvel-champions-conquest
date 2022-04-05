import { useEffect, useContext } from 'react';
import { GlobalContext } from '../../../../../App';
import { LootContext } from '../../LootOverview';
import { CardContainer } from '../../../../common/containers/card/CardContainer';
import { Header } from '../../../../common/headers/header/Header';
import { Button } from '../../../../common/button/Button';
import * as api from '../../../../../helpers/api';

export const LootActionPhase = () => {
  const { setPlayers, activePlayer, setDisablePlayerSelect } = useContext(GlobalContext);
  const { setLootPhase, setLootDrop, setDisableLootDropInput, setLootedCard } = useContext(LootContext);

  useEffect(() => {
    setDisablePlayerSelect(false);
    setDisableLootDropInput(false);
    setLootedCard('');
  }, [setDisablePlayerSelect, setDisableLootDropInput, setLootedCard]);

  const schemeThwarted = async () => {
    const players = await api.markSchemeThwarted(activePlayer);
    setPlayers(players);
  };

  const minionDefeated = (lootDrop) => {
    setLootDrop(lootDrop);
    setLootPhase('LootDrop');
    setDisableLootDropInput(true);
  };

  return (
    <CardContainer fullScreen={true}>
      <Header textCenter={true}>Claim Loot Rewards</Header>
      <Button confirmText={'Confirm Scheme Thwarted'} onConfirm={() => schemeThwarted()} marginBottom={true}>
        Side Scheme Thwarted
      </Button>
      <Button confirmText={'Confirm Defeat (2-4 Health)'} onConfirm={() => minionDefeated('T1')} marginBottom={true}>
        Minion Defeated (2-4 Health)
      </Button>
      <Button confirmText={'Confirm Defeat (5-7 Health)'} onConfirm={() => minionDefeated('T1+')} marginBottom={true}>
        Minion Defeated (5-7 Health)
      </Button>
      <Button confirmText={'Confirm Defeat (8+ Health)'} onConfirm={() => minionDefeated('T2')} marginBottom={true}>
        Minion Defeated (8+ Health)
      </Button>
      <Button confirmText={'Confirm Manual Drop'} onConfirm={() => setLootPhase('LootDrop')}>
        Manually Select Drop
      </Button>
    </CardContainer>
  );
};
