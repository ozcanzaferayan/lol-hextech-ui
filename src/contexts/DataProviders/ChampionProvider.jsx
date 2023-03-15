import { createContext, useState } from 'react';
import champions from '../../data/champions.json';

export const ChampionContext = createContext(null);
export const ChampionDispatcherContext = createContext(null);

const ChampionProvider = ({ children }) => {
  const [champion, setChampion] = useState(champions['Annie']);

  return (
    <ChampionContext.Provider value={champion}>
      <ChampionDispatcherContext.Provider value={setChampion}>
        {children}
      </ChampionDispatcherContext.Provider>
    </ChampionContext.Provider>
  );
};

export default ChampionProvider;
