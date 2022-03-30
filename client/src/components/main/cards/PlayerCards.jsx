import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../../App';
import { PlayerCard } from './PlayerCard';
import { Card } from '../../Card';
import { TextInput } from '../../TextInput';
import { Grid } from '../../Grid';

export const PlayerCards = () => {
  const [cards, setCards] = useState('');
  const [searchText, setSearchText] = useState('');
  const { activePlayer } = useContext(GlobalContext);

  useEffect(() => {
    if (activePlayer) {
      if (!searchText) {
        setCards(activePlayer.cards);
      } else {
        const filteredCards = filterCardsByName();
        setCards(filteredCards);
      }
    }
  }, [activePlayer, searchText]);

  const filterCardsByName = () => cards.filter((card) => card.name.toLowerCase().includes(searchText.toLowerCase()));

  const mapCards = (cards) => {
    return cards.map((card) => <PlayerCard key={card.player_card_id} card={card} />);
  };

  const playerCards = cards ? mapCards(cards) : [];

  return (
    <>
      <Grid>
        <Card grid={true}>
          <TextInput id={'cardSearch'} labelText={'Card Search:'} value={searchText} onType={setSearchText} />
        </Card>
      </Grid>
      <Grid>{playerCards}</Grid>
    </>
  );
};
