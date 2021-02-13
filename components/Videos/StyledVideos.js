import styled from 'styled-components';

export const VideosWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    margin-top: 5rem;

    @media  (max-width:768px) {
        justify-content:center;
        padding-left:6.5%;
    }

    @media (min-width:710px) {
        justify-content:center;
        padding-left:2.5%;
    }

    @media (min-width:930px) {
        padding-left: 12%;
        justify-content:center;
    }

    @media (min-width:1440px) {
        padding-left: 10%;
        justify-content:flex-start;
    }

    @media (min-width:1900px) {
        padding-left: 8%;
    }

    @media (min-width:2200px) {
        padding-left: 8%;
    }

    @media (min-width:2550px) {
        padding-left: 6%;
    }
`;

export const VideoItemWrapper = styled.div`
        margin-right:1rem;
        margin-bottom:1.25rem;
`;

export const VideoIframe = styled.div`
        width:100%;
`;

export const Title = styled.div`
            margin-left: .5rem;
            text-align: left;
            font-weight: bold;
            margin-top: .1rem;
            width:300px;
`;

export const Description = styled.div`
            margin-left: .5rem;
            text-align: left;
            margin-top: 0rem;
`;