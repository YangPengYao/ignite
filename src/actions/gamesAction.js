import axios from 'axios';
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from '../api';

export const loadGames = () => async (dispatch) => {
  const popularPromise = axios.get(popularGamesURL());
  const upcomingPromise = axios.get(upcomingGamesURL());
  const newGamesPromise = axios.get(newGamesURL());

  const [popularData, upcomingData, newGamesData] = await Promise.all([
    popularPromise,
    upcomingPromise,
    newGamesPromise,
  ]);

  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (gameName) => async (dispatch) => {
  const searchedData = await axios.get(searchGameURL(gameName));
  dispatch({
    type: 'FETCH_SEARCHED',
    payload: { searched: searchedData.data.results },
  });
};
