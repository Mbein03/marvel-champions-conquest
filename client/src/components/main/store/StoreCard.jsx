import { useState, useContext } from 'react';
import { PlayerContext } from '../../../App';
import { LootContext } from '../../../App';
import { Button } from '../../Button';
import { Image } from '../../Image';
import * as api from '../../../helpers/api';
import { Subheader } from '../../Subheader';

export const StoreCard = ({ card }) => {
  //   const [confirmSale, setConfirmSale] = useState(false);
  //   const { setPlayers, selectedPlayer } = useContext(PlayerContext);
  //   const { setCardPool } = useContext(LootContext);
  //   const saleConfirmed = async () => {
  //     const responseData = await api.markCardSold(card, selectedPlayer);
  //     if (responseData) {
  //       setCardPool(responseData.cardPool);
  //       setPlayers(responseData.players);
  //       setConfirmSale(!confirmSale);
  //     }
  //   };
  //   return (
  //     <div className='justify-center border-2 border-gray-300 rounded-xl px-6 py-2 bg-gray-100'>
  //       <Image src={'https://marvelcdb.com/' + card.image_path} alt={card.name} />
  //       <Subheader title={'Quantity'} text={card.qty} />
  //       {!confirmSale && (
  //         <Button
  //           onClick={() => setConfirmSale(!confirmSale)}
  //           marginBottom={true}
  //         >
  //           Sell Card
  //         </Button>
  //       )}
  //       {confirmSale && (
  //         <Button
  //           onClick={() => saleConfirmed()}
  //           color={'green'}
  //           marginBottom={true}
  //         >
  //           Confirm Sale
  //         </Button>
  //       )}
  //     </div>
  //   );
};
