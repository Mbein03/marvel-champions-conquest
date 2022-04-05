import { CardContainer } from '../../../common/containers/card/CardContainer';
import { ListContainer } from '../../../common/containers/list/ListContainer';
import { Header } from '../../../common/headers/header/Header';
import { Subheader } from '../../../common/headers/subheader/Subheader';

export const StoreInfo = () => {
  return (
    <CardContainer spanColumns={true}>
      <Header textCenter={true} underline={true}>
        The Helicarrier
      </Header>
      <Subheader title={'Buy'} text={'Spend credits to buy new cards at the vendor.'} block={true} />
      <ListContainer>
        <li>
          <Subheader title={'Tier B'} text={'250 credits'} block={true} />
        </li>
        <li>
          <Subheader title={'Tier A'} text={'500 credits'} block={true} />
        </li>
        <li>
          <Subheader title={'Tier S'} text={'100 credits'} block={true} />
        </li>
      </ListContainer>
      <Subheader title={'Sell'} text={'Sell Basics for 25 credits each. Colored for 50 credits each.'} block={true} />
      <Subheader title={'Recruit A New Hero'} text={'See the Hero Intel Recruitment System (page 8).'} block={true} />
      <Subheader
        title={'Learn A New Aspect'}
        text={
          '2000 credits. Randomly draw 8x Tier-B, 5x Tier-A, 2x Tier-S (any duplicates are redrawn). These cards are intended to provide a large boost to creating a deck centered around your newly purchased aspect.'
        }
        block={true}
      />
      <Subheader title={'Swap Aspects'} text={'Free.'} block={true} />
      <Subheader
        title={'Research & Development'}
        text={
          'Players may purchase a non-refundable R&D package of any chosen aspect. After choosing an aspect and paying the required cost, the player rolls a D6 die and gains the following rewards.'
        }
        block={true}
      />
      <ListContainer>
        <li>
          <Subheader title={'Die Roll 1-3'} text={'3x Tier-B'} block={true} />
        </li>
        <li>
          <Subheader title={'Die Roll 4-5'} text={'1x Tier-B & 1x Tier-A'} block={true} />
        </li>
        <li>
          <Subheader title={'Die Roll 6'} text={'1x Tier S'} block={true} />
        </li>
      </ListContainer>
      <Subheader
        title={'Power Card'}
        text={
          'The Power Card deck is made up of the four Condition/Improved Condition cards from the Rise of the Red Skull Campaign. Each time the Helicarrier vendor is reset, the deck is shuffled. Whichever card appears on top of this stack is available to be purchased for use in the upcoming encounter. Players may purchase a Power Card while debriefing to add to their deck during the upcoming encounter ONLY. After this encounter ends, whether in victory or defeat, this card is returned to the Power Card Deck. If playing on Expert, only the Basic side may be used. When playing on Heroic, either side may be used for their respective cost (200 credits) for the Basic side, 400 credits for the improved side). If playing on Standard, these cards cannot be used.'
        }
        block={true}
      />
    </CardContainer>
  );
};
