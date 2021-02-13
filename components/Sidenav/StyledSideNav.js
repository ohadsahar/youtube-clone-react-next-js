import styled from 'styled-components';

export const SideNavWrapper = styled.div`
  background-color: black;
    color: white;
    position: fixed;
    height: 100%;
    padding:1rem;
    margin-top:3rem;

    @media screen and (max-width:928px) {
        display: none;
    }
`;

const Link = styled.div`
        font-size: 0.8rem;
        padding: .5rem;
        cursor: pointer;
`;

export const SideNavLink = styled.a`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-bottom:1rem;
    ${Link}
`;

export const SideNavIcon = styled.i`
color:white;
margin-top:1rem;
margin-bottom:1rem;
font-size:16px;
`;

export const Title = styled.h1`
font-size:0.95rem;
`;