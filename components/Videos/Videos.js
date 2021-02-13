import React from 'react';
import { useDispatch } from 'react-redux';
import { Description, Title, VideoIframe, VideoItemWrapper, VideosWrapper } from './StyledVideos';


const Videos = ({ videos }) => {

    const dispatch = useDispatch();
    // const videoState = useSelector(state => state.videos);
    // const { videos } = videoState;

    // useEffect(() => {
    //     const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=eminem&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
    //     dispatch(getAllVideos(url));
    // }, [dispatch])

    //console.log(videos);

    return (
        //         <div className="content" >
        // {videos.map((video) => (
        //     <div className="video-frame" key={video.id}>
        //         <iframe className="video" src={video.src}>
        //         </iframe>
        //         <p className="title">{video.title}</p>
        //         <p className="sub-title">{video.description}</p>
        //     </div>
        // ))}
        // </div >
        <VideosWrapper>
            {videos.map((video) => (
                console.log(video?.src),
                <VideoItemWrapper key={video.id}>
                    <VideoIframe>
                        <iframe src={video?.src}>
                        </iframe>
                    </VideoIframe>
                    <Title>{video?.title}</Title>
                    <Description>{video?.description}</Description>
                </VideoItemWrapper>
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

