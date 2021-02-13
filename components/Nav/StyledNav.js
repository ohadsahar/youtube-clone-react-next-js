import styled, { css } from 'styled-components';

export const showYoutube = css`
    position: absolute;
    top: .3rem;
    transition: .5s ease-in;
    margin-left: .5rem;

    @media screen and (min-width:768px) {
        position: absolute;
        top: .3rem;
        transition: .5s ease-in;
        margin-left: .5rem;
        left: 0;
    }
`;

export const hideYoutube = css`
   position: absolute;
    top: -5rem;
    transition: .2s ease-in;
    margin-left: .5rem;
`;

export const showUserActions = css`
    position: absolute;
                    top: -1rem;
                    transition: .5s ease-in;
                    margin-left: .5rem;
`;

export const hideUserActions = css`
  position: absolute;
                    top: -5rem;
                    transition: .2s ease-in;
                    margin-left: .5rem;
`;

export const showMobile = css`
   position: absolute;
                top: .9rem;
                transition: .5s ease-in;
                margin-left: .5rem;
`;

export const hideMobile = css`
 position: absolute;
                top: -5rem;
                transition: .2s ease-in;
                margin-left: .5rem;
`;

export const HeaderWrapper = styled.div`
  position: relative;
`;

export const NavbarWrapper = styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1;
        background-color: black;
        overflow: hidden;
        height: 60px;
`;

export const MenuWrapper = styled.div`
        width:100%;
`;

export const YoutubeWrapper = styled.div`
display:flex;
align-items:center;   
position:relative;
 ${({ showModal }) => (showModal === true ? showYoutube : hideYoutube)};
`;

export const YoutubeLogoWrapper = styled.div`
    position:relative;
    display:flex;
    align-items:center;
`;

export const Title = styled.h1`
    color:white;
    font-size:1.25rem;
    margin-left:.3rem;
`;

export const YoutubeIcon = styled.div`
        color: red;
        font-size: 2rem;
`;

export const SearchWrapper = styled.div`
    display:flex;
    justify-content:center;

  @media screen and (max-width: 768px) {
    display:none;
  }
`;

export const InputSearch = styled.input`
    width: 400px;
    padding: .3rem;
`;

export const SearchButton = styled.button`
        padding: .5rem;
        width: 5rem;
        color:black;

        @media screen and (max-width:768px) {
            width: 3rem;
        }
`;

export const SearchMobile = styled.div`
    width: 95%;
    @media screen and (max-width:768px){
        width: 100%;
        padding: .2rem;
    }
    ${({ showModal }) => (showModal !== true ? showMobile : hideMobile)};
    
`;

export const SearchMobileActions = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export const SearchMobileInput = styled.input`
        width: 100%;
        padding: .3rem;
        @media screen and(max-width:768px) {
            width: 100%;
            padding: .4rem;
        }
`;

export const ActionSection = styled.div`
position: relative;
`;

export const Actions = styled.div`
    display:flex;
    align-items:center;
    position: absolute;
    top: -1rem;
    right: 0;
    ${({ showModal }) => (showModal === true ? showUserActions : hideUserActions)};
`;

export const CircleIconUser = styled.i`
    font-size: 2rem;
    color: #01589b;
    margin-right:1rem;
`;

export const SearchIconMobile = styled.div`
   display:none;

   @media screen and (max-width: 768px) {
                    display: block;
                    color: white;
                    margin-right:1rem;
  }
`;

export const ExitIcon = styled.i` 
    color:white;
    margin-left:1rem;
    margin-right:.5rem;
`;