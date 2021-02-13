import React from 'react';
import { useDispatch } from 'react-redux';
import VideoItem from '../VideoItem/VideoItem';
import { VideosWrapper } from './StyledVideos';

const Videos = ({ videos }) => {

    const dispatch = useDispatch();
    // const videoState = useSelector(state => state.videos);
    // const { videos } = videoState;

    // useEffect(() => {
    //     const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=eminem&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
    //     dispatch(getAllVideos(url));
    // }, [dispatch])


    return (
        <VideosWrapper>
            {videos.map((video) => (
                <VideoItem key={video?.id} video={video} />
            ))}
        </VideosWrapper>
    )
    
    {/* {videos.length === 0 ? <h2>Loading...</h2> :
                (
                    videos.map(video => (
                        <div>
                            {video.id.videoId ? <iframe width="200px" height="200px"
                                src={`https://www.youtube.com/embed/${video.id.videoId}`}>
                            </iframe> : (null)}
                        </div>
                    )
                    )
                )
            } */}
}

export default Videos;

