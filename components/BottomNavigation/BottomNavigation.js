import React from 'react';
import { BottomNavigationWrapper, BottomNavigationItemWrapper, BottomNavigationIcon, Paragraph } from './StyledBottomNavigation';

const BottomNavigation = () => {
    return (
        <BottomNavigationWrapper>
            <BottomNavigationItemWrapper>
                <BottomNavigationIcon>
                    <i className="fas fa-home"></i>
                   
                </BottomNavigationIcon>
                <Paragraph>
                        Home
                    </Paragraph>
            </BottomNavigationItemWrapper>
            <BottomNavigationItemWrapper>
                <BottomNavigationIcon>
                    <i className="fab fa-hotjar"></i>
                   
                </BottomNavigationIcon>
                <Paragraph>
                        Hot Videos
                    </Paragraph>
            </BottomNavigationItemWrapper>
            <BottomNavigationItemWrapper>
                <BottomNavigationIcon>
                    <i className="fas fa-photo-video"></i>
                </BottomNavigationIcon>
                <Paragraph>
                    Subscription
                    </Paragraph>
            </BottomNavigationItemWrapper>
        </BottomNavigationWrapper>
        // <div className="bottom-nav d-flex justify-content-between">
        //     <div className="bottom-item">
        //         <i className="fas fa-home"></i>
        //         <p>Home</p>
        //     </div>
        //     <div className="bottom-item">
        //     <i className="fab fa-hotjar"></i>
        //         <p>Hot Videos</p>
        //     </div>
        //     <div className="bottom-item">
        //         <i className="fas fa-photo-video"></i>
        //         <p>Subscription</p>
        //     </div>
        // </div>
    )
}

export default BottomNavigation;
