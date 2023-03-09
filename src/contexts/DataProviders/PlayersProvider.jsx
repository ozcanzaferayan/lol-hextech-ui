import { createContext, useState } from "react";

export const PlayersContext = createContext(null);
export const PlayersDispatcherContext = createContext(null);
import champions from "../../data/champions.json";

const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = useState([
    {
      username: "IBeudy",
      championName: "Selecting...",
      avatar: champions["Singed"].icon,
      summonerSpells: [
        require("../../../assets/summoner-spells/ghost.png"),
        require("../../../assets/summoner-spells/flash.png"),
      ],
    },
    {
      username: "cheerwood",
      championName: "Selecting...",
      avatar: champions["Jinx"].icon,
      summonerSpells: [
        require("../../../assets/summoner-spells/heal.png"),
        require("../../../assets/summoner-spells/flash.png"),
      ],
    },
    {
      username: "MIKITAHHHH",
      championName: "Selecting...",
      avatar: champions["XinZhao"].icon,
      summonerSpells: [
        require("../../../assets/summoner-spells/smite.png"),
        require("../../../assets/summoner-spells/flash.png"),
      ],
    },
    {
      username: "Jaheira Tarannon",
      championName: "Garen",
      avatar: champions["Garen"].icon,
      summonerSpells: [
        require("../../../assets/summoner-spells/ignite.png"),
        require("../../../assets/summoner-spells/flash.png"),
      ],
    },
    {
      username: "thufir",
      championName: "Blitzcrank",
      avatar: champions["Blitzcrank"].icon,
      summonerSpells: [
        require("../../../assets/summoner-spells/ignite.png"),
        require("../../../assets/summoner-spells/heal.png"),
      ],
    },
  ]);

  return (
    <PlayersContext.Provider value={players}>
      <PlayersDispatcherContext.Provider value={setPlayers}>
        {children}
      </PlayersDispatcherContext.Provider>
    </PlayersContext.Provider>
  );
};

export default PlayersProvider;
