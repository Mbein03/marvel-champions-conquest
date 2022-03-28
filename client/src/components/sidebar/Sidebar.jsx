import { PlayerSelect } from './players/PlayerSelect';
import { NavButtons } from './nav/NavButtons';

export const Sidebar = () => {
  return (
    <div className='w-1/4 flex-shrink flex-grow-0'>
      <div className='sticky top-0 p-4 w-full'>
        <PlayerSelect />
        <NavButtons />
      </div>
    </div>
  );
};
