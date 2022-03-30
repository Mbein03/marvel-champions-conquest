import { useEffect, useContext } from 'react';
import { GlobalContext } from '../../../App';
import { LootContext } from './Loot';
import { Card } from '../../Card';
import { Header } from '../../Header';
import { Button } from '../../Button';
import * as api from '../../../helpers/api';

export const LootAction = () => {
  const { players, setPlayers, activePlayer, setActivePlayer, setDisablePlayerSelect } = useContext(GlobalContext);
  const { setLootContent, setLootDrop, setDisableLootDropInput, setLootedCard } = useContext(LootContext);

  useEffect(() => {
    setDisablePlayerSelect(false);
    setDisableLootDropInput(false);
    setLootedCard('');
    if (activePlayer) activePlayer.player_id === 1 ? setActivePlayer(players[0]) : setActivePlayer(players[1]);
  }, [setDisablePlayerSelect, setDisableLootDropInput, setLootedCard, players, activePlayer, setActivePlayer]);

  const schemeThwarted = async () => {
    const players = await api.markSchemeThwarted(activePlayer);
    setPlayers(players);
  };

  const minionDefeated = (lootDrop) => {
    setLootDrop(lootDrop);
    setLootContent('LootDrop');
    setDisableLootDropInput(true);
  };

  return (
    <Card>
      <Header textCenter={true}>Claim Loot Rewards</Header>
      <Button confirmText={'Confirm Scheme Thwarted'} onConfirm={() => schemeThwarted('T1')} marginBottom={true}>
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
      <Button confirmText={'Confirm Manual Drop'} onConfirm={() => setLootContent('LootDrop')}>
        Manually Select Drop
      </Button>
    </Card>
  );
};
