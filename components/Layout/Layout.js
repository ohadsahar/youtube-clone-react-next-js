import React from 'react';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import Meta from '../Meta';
import Nav from '../Nav/Nav';
import Sidenav from '../Sidenav/Sidenav';
import { LayoutWrapper } from './StyledLayout';


const Layout = ({ children }) => {
    return (
        <div>
            <Meta />
            <Nav />
            <LayoutWrapper>
                <Sidenav />
                <main>
                    {children}
                </main>
            </LayoutWrapper>
            <BottomNavigation />
        </div>
    )
}

export default Layout
