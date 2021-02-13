import { GET_ALL_VIDEOS_REQUEST, GET_ALL_VIDEOS_REQUEST_FAIL, GET_ALL_VIDEOS_REQUEST_SUCCESS } from "../constants/videoConstants";

export const videoReducer = (state = { videos: [] }, action) => {
    switch (action.type) {
        case GET_ALL_VIDEOS_REQUEST:
            return { loading: true, videos: [] };
        case GET_ALL_VIDEOS_REQUEST_SUCCESS:
            return { loading: false, videos: action.payload };
        case GET_ALL_VIDEOS_REQUEST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;

    }
}