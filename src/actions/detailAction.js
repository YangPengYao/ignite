import axios from 'axios';
import { gameDetailsURL, gameScreenshotURL } from '../api';

export const loadDetail = (gameId) => async (dispatch) => {
  dispatch({ type: 'LOADING_DETAIL' });

  const [detailData, screenData] = await Promise.all([
    axios.get(gameDetailsURL(gameId)),
    axios.get(gameScreenshotURL(gameId)),
  ]);

  dispatch({
    type: 'GET_DETAIL',
    payload: {
      game: detailData.data,
      screen: screenData.data,
    },
  });
};
