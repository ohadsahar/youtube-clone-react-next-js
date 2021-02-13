import styled from 'styled-components';

export const BottomNavigationWrapper = styled.div`
    position:fixed;
    display:flex;
    justify-content:center;
    height: 60px;
    width: 100%;
    bottom: 0;
    z-index: 1;
    overflow: hidden;
    background-color: black;
    @media screen and (max-width:768px) {
        display: flex;   
    }

    @media screen and (min-width:930px) {
        display: none !important;
    }
    
`;

export const BottomNavigationItemWrapper = styled.div`
     width: 100%;
        border-right: 1px solid grey;
        border-top: 1px solid grey;
        padding: 0.3rem;
        display:flex;
        align-items:center;
        justify-content:center;
`;

export const BottomNavigationIcon = styled.i`
 display: flex;
            justify-content: center;
            color: white;
            padding: 0.3rem;
            margin-right:.3rem;
`;

export const Paragraph = styled.p`
   color: white;
            text-align: center;
            margin: 0;
`;