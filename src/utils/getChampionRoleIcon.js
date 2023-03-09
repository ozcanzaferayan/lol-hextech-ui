const getChampionRoleIcon = (champion) => {
  const roles = champion.roles;
  const BASE_URL = "https://static.wikia.nocookie.net/leagueoflegends/images";
  if (roles.some((x) => ["CONTROLLER", "ENCHANTER", "CATCHER"].includes(x))) {
    return BASE_URL + "/5/58/Controller_icon.png";
  }
  if (roles.some((x) => ["FIGHTER", "JUGGERNAUT", "DIVER"].includes(x))) {
    return BASE_URL + "/8/8f/Fighter_icon.png";
  }
  if (
    roles.some((x) => ["MAGE", "BURST", "BATTLEIMAGE", "ARTILLERY"].includes(x))
  ) {
    return BASE_URL + "/2/28/Mage_icon.png";
  }
  if (roles.some((x) => ["MARKSMAN"].includes(x))) {
    return BASE_URL + "/7/7f/Marksman_icon.png";
  }
  if (roles.some((x) => ["SLAYER", "ASSASSIN", "SKIRMISHER"].includes(x))) {
    return BASE_URL + "/2/28/Slayer_icon.png";
  }
  if (roles.some((x) => ["TANK", "VANGUARD", "WARDEN"].includes(x))) {
    return BASE_URL + "/5/5a/Tank_icon.png";
  }
  return BASE_URL + "/6/67/Specialist_icon.png";
};

export default getChampionRoleIcon;
