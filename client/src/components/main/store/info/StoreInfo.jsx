import { useState } from 'react';
import { CardContainer } from '../../../common/containers/card/CardContainer';
import { ListContainer } from '../../../common/containers/list/ListContainer';
import { Header } from '../../../common/headers/header/Header';
import { Subheader } from '../../../common/headers/subheader/Subheader';
import { Button } from '../../../common/button/Button';

export const StoreInfo = () => {
  const [showActions, setShowActions] = useState(false);
  return (
    <CardContainer spanColumns={true}>
      {showActions && (
        <>
          <Header textCenter={true} underline={true}>
            Helicarrier Actions
          </Header>
          <Subheader
            title={'Buy Cards'}
            text={'Spend credits to buy new cards at the vendor.'}
            block={true}
            marginBottom={true}
          />
          <ListContainer>
            <li>
              <Subheader title={'Tier B'} text={'250 credits'} block={true} />
            </li>
            <li>
              <Subheader title={'Tier A'} text={'500 credits'} block={true} />
            </li>
            <li>
              <Subheader title={'Tier S'} text={'100 credits'} block={true} marginBottom={true} />
            </li>
          </ListContainer>
          <Subheader
            title={'Sell Cards'}
            text={'Sell Basics for 25 credits each. Colored for 50 credits each.'}
            block={true}
            marginBottom={true}
          />
          <Subheader
            title={'Recruit New Hero'}
            text={
              'Players may unlock the next Hero tier once all intel points required are checked-off, along with paying the associated recruitment fee. See page 7 of rulebook for more info on the Hero Intel Recruitment System.'
            }
            block={true}
            marginBottom={true}
          />
          <ListContainer>
            <li>
              <Subheader title={'Tier C'} text={'500 credits'} block={true} />
            </li>
            <li>
              <Subheader title={'Tier B'} text={'750 credits'} block={true} />
            </li>
            <li>
              <Subheader title={'Tier A'} text={'1000 credits'} block={true} />
            </li>
            <li>
              <Subheader title={'Tier S'} text={'1250 credits'} block={true} marginBottom={true} />
            </li>
          </ListContainer>
          <Subheader
            title={'Learn New Aspect'}
            text={
              '2000 credits. Randomly draw 8x Tier-B, 5x Tier-A, 2x Tier-S (any duplicates are redrawn). These cards are intended to provide a large boost to creating a deck centered around your newly purchased aspect.'
            }
            block={true}
            marginBottom={true}
          />
          <Subheader title={'Swap Aspects'} text={'Free.'} block={true} marginBottom={true} />
          <Subheader
            title={'Research & Development'}
            text={
              'Players may purchase a non-refundable R&D package of any chosen aspect. After choosing an aspect and paying the required cost, the player rolls a D6 die and gains the following rewards.'
            }
            block={true}
            marginBottom={true}
          />
          <ListContainer>
            <li>
              <Subheader title={'Die Roll 1-3'} text={'3x Tier-B'} block={true} />
            </li>
            <li>
              <Subheader title={'Die Roll 4-5'} text={'1x Tier-B & 1x Tier-A'} block={true} />
            </li>
            <li>
              <Subheader title={'Die Roll 6'} text={'1x Tier S'} block={true} marginBottom={true} />
            </li>
          </ListContainer>
          <Subheader
            title={'Power Card'}
            text={
              'The Power Card deck is made up of the four Condition/Improved Condition cards from the Rise of the Red Skull Campaign. Each time the Helicarrier vendor is reset, the deck is shuffled. Whichever card appears on top of this stack is available to be purchased for use in the upcoming encounter. Players may purchase a Power Card while debriefing to add to their deck during the upcoming encounter ONLY. After this encounter ends, whether in victory or defeat, this card is returned to the Power Card Deck. If playing on Expert, only the Basic side may be used. When playing on Heroic, either side may be used for their respective cost (200 credits) for the Basic side, 400 credits for the improved side). If playing on Standard, these cards cannot be used.'
            }
            block={true}
            marginBottom={true}
          />
          <Subheader
            title={'Refresh Vendor'}
            text={
              'After each win, upon exiting the Helicarrier, cards must be reset. After a loss played in full, you may choose to reset the vendor before the next mission.'
            }
            block={true}
            marginBottom={true}
          />
        </>
      )}
      <Button onClick={() => setShowActions(!showActions)}>{showActions ? 'Hide Actions' : 'Show Actions'}</Button>
    </CardContainer>
  );
};
