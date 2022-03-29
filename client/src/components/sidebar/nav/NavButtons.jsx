import { useContext } from 'react';
import { GlobalContext } from '../../../App';
import { NavButtonsContainer } from './NavButtonsContainer';
import { Button } from '../../Button';

export const NavButtons = () => {
  const contentCategories = ['Cards', 'Loot'];

  const { setDisablePlayerSelect, mainContent, setMainContent } = useContext(GlobalContext);

  const mapButtons = (cards) => {
    return contentCategories.map((category) => (
      <Button
        key={category}
        onClick={() => updateMainContent(category)}
        color={mainContent === category ? 'green' : ''}
        marginBottom={true}
      >
        {category === 'Cards' ? category + ' Collection' : category}
      </Button>
    ));
  };

  const updateMainContent = (mainContent) => {
    setDisablePlayerSelect(false);
    setMainContent(mainContent);
  };

  return <NavButtonsContainer>{mapButtons()}</NavButtonsContainer>;
};
