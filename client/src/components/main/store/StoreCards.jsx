import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../../App';
import { StoreCard } from './StoreCard';
import { Button } from '../../Button';
import { Grid } from '../../Grid';

export const StoreCards = () => {
  const { players, activePlayer, setActivePlayer } = useContext(GlobalContext);
  const [resetCards, setResetCards] = useState(false);
  const tiers = ['B', 'A', 'S', 'Power'];

  useEffect(() => {
    if (activePlayer) {
      activePlayer.player_id === 1 ? setActivePlayer(players[0]) : setActivePlayer(players[1]);
    }
  }, [activePlayer, setActivePlayer, players]);

  const mapCards = (tiers) => {
    return tiers.map((tier) => (
      <StoreCard key={tier} tier={tier} resetCards={resetCards} setResetCards={setResetCards} />
    ));
  };

  const resetConfirmed = () => {
    console.log('reset confirmed');
  };

  const storeCards = mapCards(tiers);

  return (
    <div className='flex items-center justify-center'>
      <Grid>
        <div className='col-span-4'>
          <Button confirmText={'Confirm Reset'} onConfirm={() => resetConfirmed()} marginBottom={true}>
            Reset Cards
          </Button>
        </div>
        {storeCards}
      </Grid>
    </div>
  );
};
