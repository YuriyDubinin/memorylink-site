import React, {Suspense, useRef} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';

import Layout from '../layouts/Layout';
import MainPage from '../containers/MainPage/MainPage';

const App = () => {
    const mainContentRef = useRef(null);

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
        <BrowserRouter>
            <Layout mainContentRef={mainContentRef}>
                <Suspense>
                    <Routes>
                        <Route path="/" element={<Navigate to="/main" />} />
                        <Route
                            path="/main"
                            element={
                                <MainPage
                                    scrollToCoordinates={(x, y) => scrollToCoordinates(x, y)}
                                />
                            }
                        />
                    </Routes>
                </Suspense>
            </Layout>
            <Toaster />
        </BrowserRouter>
    );
};

export default App;
