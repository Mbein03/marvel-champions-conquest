import { createContext } from 'react';
import { useLootDropController } from './hooks/controllers/useLootDropController';
import { usePlayerController } from './hooks/controllers/usePlayerController';
import { Sidebar } from './components/content/Sidebar';
import { Main } from './components/content/Main';

// Create contexts
export const LootDropContext = createContext();
export const PlayerContext = createContext();

export const App = () => {
  // Set controllers in prep for passing to context providers
  // Must pass in card to PlayerController b/c players must be refreshed when card updates
  const LootDropController = useLootDropController();
  const PlayerController = usePlayerController(LootDropController.card);

  return (
    <>
      <LootDropContext.Provider value={LootDropController}>
        <PlayerContext.Provider value={PlayerController}>
          <Sidebar />
          <Main />
        </PlayerContext.Provider>
      </LootDropContext.Provider>
    </>
  );
};
