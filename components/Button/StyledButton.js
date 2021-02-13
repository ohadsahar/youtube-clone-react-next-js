import styled, { css, keyframes } from 'styled-components';

export const fadeIn = keyframes`
0%{opacity:0}
100%{opacity:1}
`;

export const StyledButton = styled.button`
  display: flex;
  background-color: ${(props) => props.theme.colors.red};
  font-size: 36px;
  color: green;
  border: none;
  animation: 2s ${fadeIn} ease-in;
  ${({ primary }) =>
    primary &&
    css`
      background-color: black;
      color: blue;
      font-size: 32px;
      justify-content: ${({ primary }) => {
        if (primary) return 'flex-end';
        else if (!primary) return 'flex-start';
      }};
    `}

  &:hover {
    color: purple;
    background-color: whitesmoke;
  }
`;

export const StyledLink = styled.div`
  a {
    color: purple;
  }
`;

export const Link = styled.a.attrs((props) => ({
  target: '_blank',
}))`
  color: red;
  font-size: 2rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  background-color: violet;
  margin: 1rem 1rem;
  &:hover ${StyledButton} {
    color: red;
  }
`;

export const SuperButton = styled(StyledButton)`
  font-size: 5rem;
`;
