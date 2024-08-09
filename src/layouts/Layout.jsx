import React, {useState} from 'react';

import './Layout.scss';

import LockedIcon from './assets/locked-user.svg?jsx';
import ArrowUpIcon from './assets/arrow-up.svg?jsx';

import Header from './elements/Header/Header';

const Layout = ({children, mainContentRef}) => {
    const [auth, setAuth] = useState(true);

    const scrollToCoordinates = (x, y) => {
        if (mainContentRef.current) {
            mainContentRef.current.scrollTo({
                top: y,
                left: x,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="document">
            <>
                <Header scrollToCoordinates={scrollToCoordinates} />
                <main className="main-wrapper">
                    <div className="main-wrapper__btn" onClick={() => scrollToCoordinates(0, 0)}>
                        <ArrowUpIcon />
                    </div>
                    {/* <aside>{<MainSideBar />}</aside> */}
                    <div ref={mainContentRef} className="main-content">
                        {React.Children.map(children, (child) =>
                            React.cloneElement(child, {mainContentRef: mainContentRef}),
                        )}
                    </div>
                </main>
            </>
        </div>
    );
};

export default Layout;
