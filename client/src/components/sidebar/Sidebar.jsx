import { SidebarContainer } from './SidebarContainer';
import { PlayerSelect } from './players/PlayerSelect';
import { NavButtons } from './nav/NavButtons';

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <PlayerSelect />
      <NavButtons />
    </SidebarContainer>
  );
};
