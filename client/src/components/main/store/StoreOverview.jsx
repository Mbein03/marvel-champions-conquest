import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../../App';
import { StoreCards } from './StoreCards';
import * as api from '../../../helpers/api';
import { storeCardTiers, factionRolls } from '../../../helpers/constants';

export const StoreOverview = () => {
  const [cardPool, setCardPool] = useState('');
  const [resetCards, setResetCards] = useState(false);

  const { players, setPlayers, activePlayer } = useContext(GlobalContext);

  useEffect(() => {
    const initializeCardPool = async () => {
      const cards = await api.fetchCardPool();
      setCardPool(cards);
    };

    initializeCardPool();
  }, []);

  const mapCards = (tiers) => {
    return tiers.map((tier) => console.log(tier));
  };

  if (cardPool) {
    mapCards(storeCardTiers);
  }

  console.log(cardPool);

  // const resetConfirmed = () => {
  //   console.log('reset confirmed');
  // };
  return (
    <>
      <StoreCards />
    </>
    // <div className='flex items-center justify-center'>
    //   <Grid>
    //     <div className='col-span-4'>
    //       <Button confirmText={'Confirm Reset'} onConfirm={() => resetConfirmed()} marginBottom={true}>
    //         Reset Cards
    //       </Button>
    //     </div>
    //     {storeCards}
    //   </Grid>
    // </div>
  );
};
