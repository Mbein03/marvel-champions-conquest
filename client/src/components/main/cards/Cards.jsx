import { useState, useEffect, useCallback, useContext } from 'react';
import { GlobalContext } from '../../../App';
import { PlayerCards } from './PlayerCards';
import { NameFilter } from './filters/NameFilter';
import { FactionFilter } from './filters/FactionFilter';
import { TierFilter } from './filters/TierFilter';
import { Card } from '../../common/Card';
import { TextInput } from '../../common/TextInput';
import { Grid } from '../../common/Grid';
import { Button } from '../../common/Button';

export const Cards = () => {
  const { activePlayer } = useContext(GlobalContext);

  const [cards, setCards] = useState('');
  const [searchText, setSearchText] = useState('');
  const [faction, setFaction] = useState('');
  const [tier, setTier] = useState('');
  const [credits, setCredits] = useState('');

  const filterCards = useCallback(() => {
    return activePlayer.cards
      .filter((card) => card.name.toLowerCase().includes(searchText.toLowerCase()))
      .filter((card) => {
        if (faction && tier) return card.faction === faction && card.tier === tier;
        if (faction) return card.faction === faction;
        if (tier) return card.tier === tier;
        return true;
      });
  }, [activePlayer, searchText, faction, tier]);

  useEffect(() => {
    if (activePlayer) {
      const filteredCards = filterCards();
      setCards(filteredCards);
      setCredits(activePlayer.credits);
    }
  }, [activePlayer, filterCards]);

  return (
    <>
      <Grid>
        <Card grid={true}>
          <TextInput id={'credits'} labelText={'Credits:'} value={credits} onType={setCredits} />
          <Button confirmText={'Confirm Credits'} marginBottom={true}>
            Update Credits
          </Button>
        </Card>
        <NameFilter cards={cards} setCards={setCards} searchText={searchText} setSearchText={setSearchText} />
        <FactionFilter cards={cards} setCards={setCards} faction={faction} setFaction={setFaction} />
        <TierFilter cards={cards} setCards={setCards} tier={tier} setTier={setTier} />
      </Grid>
      <PlayerCards cards={cards} />
    </>
  );
};
