import { createContext, useState } from "react";

export const AbilityContext = createContext(null);
export const AbilityDispatcherContext = createContext(null);
import champions from "../../data/champions.json";

const AbilityProvider = ({ children }) => {
  const [ability, setAbility] = useState("P");

  return (
    <AbilityContext.Provider value={ability}>
      <AbilityDispatcherContext.Provider value={setAbility}>
        {children}
      </AbilityDispatcherContext.Provider>
    </AbilityContext.Provider>
  );
};

export default AbilityProvider;
