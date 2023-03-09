import { createContext, useState } from "react";

export const ChampionContext = createContext(null);
export const ChampionDispatcherContext = createContext(null);
import champions from "../../data/champions.json";

const ChampionProvider = ({ children }) => {
  const [champion, setChampion] = useState(champions["Aatrox"]);

  return (
    <ChampionContext.Provider value={champion}>
      <ChampionDispatcherContext.Provider value={setChampion}>
        {children}
      </ChampionDispatcherContext.Provider>
    </ChampionContext.Provider>
  );
};

export default ChampionProvider;
