import { useState, useEffect, useCallback, useContext } from 'react';
import { GlobalContext } from '../../../App';
import { PlayerCards } from './cards/PlayerCards';
import { CreditUpdater } from './credits/updater/CreditUpdater';
import { NameFilter } from './filters/name/NameFilter';
import { FactionFilter } from './filters/faction/FactionFilter';
import { TierFilter } from './filters/tier/TierFilter';
import { GridContainer } from '../../common/containers/grid/GridContainer';
import { factionOrder, tierOrder } from '../../../helpers/constants';

export const PlayerOverview = () => {
  const [cards, setCards] = useState('');
  const [searchText, setSearchText] = useState('');
  const [faction, setFaction] = useState('');
  const [tier, setTier] = useState('');

  const { activePlayer } = useContext(GlobalContext);

  const sortCards = (filteredCards) => {
    filteredCards
      .sort((a, b) => {
        return factionOrder[a.faction] - factionOrder[b.faction];
      })
      .sort((a, b) => {
        if (a.faction === b.faction) return tierOrder[a.tier] - tierOrder[b.tier];
        return null;
      });
    return filteredCards;
  };

  const filterCards = useCallback(() => {
    return activePlayer.cards
      .filter((card) => card.name.toLowerCase().includes(searchText.toLowerCase()))
      .filter((card) => !faction || card.faction === faction)
      .filter((card) => !tier || card.tier === tier);
  }, [activePlayer, searchText, faction, tier]);

  useEffect(() => {
    if (activePlayer) {
      const filteredCards = filterCards();
      const sortedCards = sortCards(filteredCards);
      setCards(sortedCards);
    }
  }, [activePlayer, filterCards]);

  return (
    <>
      <GridContainer>
        <CreditUpdater />
        <NameFilter searchText={searchText} setSearchText={setSearchText} />
        <FactionFilter faction={faction} setFaction={setFaction} />
        <TierFilter tier={tier} setTier={setTier} />
      </GridContainer>
      <PlayerCards cards={cards} />
    </>
  );
};
