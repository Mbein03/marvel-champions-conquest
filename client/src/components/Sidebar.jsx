import { PlayerSelect } from './PlayerSelect';
import { SidebarActions } from './SidebarActions';

export const Sidebar = ({
  players,
  player,
  setPlayer,
  showResults,
  resetLootRoll,
}) => {
  return (
    <div className='w-1/4 flex-shrink flex-grow-0'>
      <div className='sticky top-0 p-4 w-full'>
        <PlayerSelect
          players={players}
          player={player}
          setPlayer={setPlayer}
          showResults={showResults}
        />
        <SidebarActions resetLootRoll={resetLootRoll} />
      </div>
    </div>
  );
};
