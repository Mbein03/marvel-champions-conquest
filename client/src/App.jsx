import { createContext } from 'react';
import { useLootController } from './hooks/controllers/useLootController';
import { usePlayerController } from './hooks/controllers/usePlayerController';
import { Sidebar } from './components/content/Sidebar';
import { Main } from './components/content/Main';

// Create contexts
export const LootContext = createContext();
export const PlayerContext = createContext();

export const App = () => {
  // Set controllers in prep for passing to context providers
  // Must pass in card to PlayerController b/c players must be refreshed when reward card updates
  const LootController = useLootController();
  const PlayerController = usePlayerController(LootController.rewardCard);

  return (
    <>
      <LootContext.Provider value={LootController}>
        <PlayerContext.Provider value={PlayerController}>
          <Sidebar />
          <Main />
        </PlayerContext.Provider>
      </LootContext.Provider>
    </>
  );
};
