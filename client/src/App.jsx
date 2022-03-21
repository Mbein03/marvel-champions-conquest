import { createContext } from 'react';
import { useLootController } from './hooks/controllers/useLootController';
import { usePlayerController } from './hooks/controllers/usePlayerController';
import { Sidebar } from './components/content/Sidebar';
import { Main } from './components/content/Main';

export const LootContext = createContext();
export const PlayerContext = createContext();

export const App = () => {
  const LootController = useLootController();
  const PlayerController = usePlayerController(LootController.reward.card);

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
