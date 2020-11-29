// base url
const baseURL = 'https://api.rawg.io/api/';

// getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) return `0${month}`;
  else return month;
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) return `0${day}`;
  else return day;
};
const currentYear = new Date().getFullYear();
const currenMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currenMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currenMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currenMonth}-${currentDay}`;

// popular games
const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${baseURL}${popularGames}`;
export const upcomingGamesURL = () => `${baseURL}${upcomingGames}`;
export const newGamesURL = () => `${baseURL}${newGames}`;
export const gameDetailsURL = (gameId) => `${baseURL}games/${gameId}`;
export const gameScreenshotURL = (gameId) =>
  `${baseURL}games/${gameId}/screenshots`;
export const searchGameURL = (gameName) =>
  `${baseURL}games?search=${gameName}&page_size=9`;
