import React, { useState } from 'react';
import {
    HeaderWrapper, NavbarWrapper, MenuWrapper, YoutubeWrapper,
    YoutubeLogoWrapper, YoutubeIcon, Title, SearchWrapper, InputSearch, SearchButton,
    ActionSection, Actions, SearchMobile, SearchMobileActions, SearchMobileInput, CircleIconUser,
    SearchIconMobile, ExitIcon
} from './StyledNav';

const Nav = () => {

    const [showModal, setModalStatus] = useState(true);

    const handleModalStatus = () => {
        const newValue = !showModal;
        setModalStatus(newValue);
    }

    return (
        <HeaderWrapper>
            <NavbarWrapper>
                <MenuWrapper>
                    <YoutubeWrapper showModal={showModal}>
                        <YoutubeLogoWrapper>
                            <YoutubeIcon>
                                <i className="fab fa-youtube"></i>
                            </YoutubeIcon>
                            <Title>Youtube</Title>
                        </YoutubeLogoWrapper>
                    </YoutubeWrapper>
                    <SearchWrapper >
                        <InputSearch type="text" title="Search" />
                        <SearchButton type="button" title="Search" >
                            <i className="fas fa-search"></i>
                        </SearchButton>
                    </SearchWrapper>
                </MenuWrapper>
                <SearchMobile showModal={showModal}>
                    <SearchMobileActions>
                        <SearchMobileInput type="text" placeholder="Search"></SearchMobileInput>
                        <ExitIcon>
                            <i className="fas fa-times" onClick={handleModalStatus}></i>
                        </ExitIcon>
                    </SearchMobileActions>
                </SearchMobile>
                <ActionSection>
                    <Actions showModal={showModal}>
                    <CircleIconUser>
                            <i className="fas fa-user-circle"></i>
                        </CircleIconUser>
                        <SearchIconMobile>
                            <i className="fas fa-search" onClick={handleModalStatus}></i>
                        </SearchIconMobile>
                    </Actions>
                </ActionSection>
            </NavbarWrapper>
        </HeaderWrapper>
    )
}

export default Nav;
