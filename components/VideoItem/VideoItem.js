import React from 'react';
import { Description, Title, VideoIframe, VideoItemWrapper } from './StyledVideoItem';

const VideoItem = ({ video }) => {
    return (
        <VideoItemWrapper >
            <VideoIframe>
                <iframe src={video?.src}>
                </iframe>
            </VideoIframe>
            <Title>{video?.title}</Title>
            <Description>{video?.description}</Description>
        </VideoItemWrapper>
    )
}

export default VideoItem;
