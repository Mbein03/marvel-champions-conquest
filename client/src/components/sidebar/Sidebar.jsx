import { SidebarContainer } from './container/SidebarContainer';
import { PlayerSelect } from './players/select/PlayerSelect';
import { NavButtons } from './nav/buttons/NavButtons';

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <PlayerSelect />
      <NavButtons />
    </SidebarContainer>
  );
};
