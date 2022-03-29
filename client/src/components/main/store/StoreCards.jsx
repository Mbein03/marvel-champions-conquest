import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../../App';
import { StoreCard } from './StoreCard';
import { Button } from '../../Button';
import { Grid } from '../../Grid';

export const StoreCards = () => {
  const { players, activePlayer, setActivePlayer } = useContext(GlobalContext);
  const [resetCards, setResetCards] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const tiers = ['B', 'A', 'S', 'Power'];

  useEffect(() => {
    if (activePlayer) {
      activePlayer.player_id === 1
        ? setActivePlayer(players[0])
        : setActivePlayer(players[1]);
    }
  }, [activePlayer, setActivePlayer, players]);

  const mapCards = (tiers) => {
    return tiers.map((tier) => (
      <StoreCard
        key={tier}
        tier={tier}
        resetCards={resetCards}
        setResetCards={setResetCards}
      />
    ));
  };
  const storeCards = mapCards(tiers);

  return (
    <>
      <div className='flex items-center justify-center'>
        <Grid>
          <div className='col-span-4'>
            {!confirmReset && (
              <Button
                onClick={() => setConfirmReset(!confirmReset)}
                marginBottom={true}
              >
                Reset Shop
              </Button>
            )}
            {confirmReset && (
              <Button
                onClick={() => setResetCards(true)}
                color={'green'}
                marginBottom={true}
              >
                Confirm Reset
              </Button>
            )}
          </div>
          {storeCards}
        </Grid>
      </div>
    </>
  );
};
