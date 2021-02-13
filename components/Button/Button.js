import Link from 'next/link';
import React from 'react';
import { Wrapper, StyledButton, StyledLink, SuperButton } from './StyledButton';


const Button = ({ primary, children }) => {
    return (
        <div>
            <Wrapper>
                <StyledButton primary={primary}>{children}</StyledButton>
                <SuperButton>{children}</SuperButton>
                <StyledLink>
                    <Link href="https://www.google.com">Link</Link>
                </StyledLink>
            </Wrapper>
        </div>
    )
}

export default Button;
