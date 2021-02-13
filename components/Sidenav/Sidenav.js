import React, { useRef, useState } from 'react';
import { SideNavWrapper, SideNavLink, SideNavIcon, Title } from './StyledSideNav';

const Sidenav = () => {

    return (
        <SideNavWrapper>
            <SideNavLink>
                <SideNavIcon>
                    <SideNavIcon>
                        <i className="fas fa-home "></i>
                    </SideNavIcon>
                </SideNavIcon>
                <Title>Home</Title>
            </SideNavLink>
            <SideNavLink>
                <SideNavIcon>
                    <SideNavIcon>
                        <i className="fab fa-hotjar"></i>
                    </SideNavIcon>
                </SideNavIcon>
                <Title>Hot Videos</Title>
            </SideNavLink>
            <SideNavLink>
                <SideNavIcon>
                    <SideNavIcon>
                        <i className="fas fa-video"></i>
                    </SideNavIcon>
                </SideNavIcon>
                <Title>Subscriptions</Title>
            </SideNavLink>
            <SideNavLink>
                <SideNavIcon>
                    <SideNavIcon>
                        <i className="fas fa-photo-video"></i>
                    </SideNavIcon>
                </SideNavIcon>
                <Title>Library</Title>
            </SideNavLink>
        </SideNavWrapper>
    )
}

export default Sidenav;


