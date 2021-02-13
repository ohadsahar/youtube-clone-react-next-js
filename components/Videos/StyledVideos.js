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
