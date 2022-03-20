import { createContext } from 'react';
import { useRewardController } from './hooks/controllers/useRewardController';
import { usePlayerController } from './hooks/controllers/usePlayerController';
import { Sidebar } from './components/content/Sidebar';
import { Main } from './components/content/Main';

// Create contexts
export const RewardContext = createContext();
export const PlayerContext = createContext();

export const App = () => {
  // Set controllers in prep for passing to context providers
  // Must pass in card to PlayerController b/c players must be refreshed when reward card updates
  const RewardController = useRewardController();
  const PlayerController = usePlayerController(RewardContext.rewardCard);

  return (
    <>
      <RewardContext.Provider value={RewardController}>
        <PlayerContext.Provider value={PlayerController}>
          <Sidebar />
          <Main />
        </PlayerContext.Provider>
      </RewardContext.Provider>
    </>
  );
};
