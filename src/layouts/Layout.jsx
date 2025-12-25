import React, {useState, useRef} from 'react';

import './Layout.scss';

import LockedIcon from './assets/locked-user.svg?jsx';
import ArrowUpIcon from './assets/arrow-up.svg?jsx';

import Header from './elements/Header/Header';
import {ScrollContext} from '../context/scrollContext';

const Layout = ({children}) => {
    // const [auth, setAuth] = useState(true);
    const mainContentRef = useRef(null);

    const scrollToCoordinates = (x, y) => {
        if (!mainContentRef.current) return;

        mainContentRef.current.scrollTo({
            top: y,
            left: x,
            behavior: 'smooth',
        });
    };

    return (
        <ScrollContext.Provider value={{
                mainContentRef,
                scrollToCoordinates,
            }}>
            <div className="document">
                <Header scrollToCoordinates={scrollToCoordinates} />
    
                <main className="main-wrapper">
                    <button
                        type="button"
                        className="main-wrapper__btn"
                        onClick={() => scrollToCoordinates(0, 0)}
                    >
                        <ArrowUpIcon />
                    </button>

                    <div ref={mainContentRef} className="main-content">
                        {children}
                    </div>
                </main>
            </div>
        </ScrollContext.Provider>
    );
};

export default Layout;
