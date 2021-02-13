import axios from 'axios';
import { GET_ALL_VIDEOS_REQUEST, GET_ALL_VIDEOS_REQUEST_SUCCESS } from '../constants/videoConstants';

export const getAllVideos = (url) => async dispatch => {
    dispatch({ type: GET_ALL_VIDEOS_REQUEST, })
    const videoList = await axios.get(url);
    dispatch({ type: GET_ALL_VIDEOS_REQUEST_SUCCESS, payload: videoList.data.items});


}