import { useContext } from 'react';
import { GlobalContext } from '../../../../App';
import { NavButtonsContainer } from './container/NavButtonsContainer';
import { Button } from '../../../common/button/Button';

export const NavButtons = () => {
  const contentCategories = ['Player Overview', 'Helicarrier', 'Claim Loot Rewards'];

  const { setDisablePlayerSelect, mainContent, setMainContent } = useContext(GlobalContext);

  const mapButtons = () => {
    return contentCategories.map((category) => (
      <Button
        key={category}
        onClick={() => updateMainContent(category)}
        color={mainContent === category ? 'green' : ''}
        marginBottom={true}
      >
        {category}
      </Button>
    ));
  };

  const updateMainContent = (mainContent) => {
    setDisablePlayerSelect(false);
    setMainContent(mainContent);
  };

  const buttonElements = mapButtons();

  return <NavButtonsContainer>{buttonElements}</NavButtonsContainer>;
};
