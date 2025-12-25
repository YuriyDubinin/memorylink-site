import React, {Suspense} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';

import Layout from '../layouts/Layout';
import MainPage from '../containers/MainPage/MainPage';
import Loader from '../components/Loader/Loader';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/main" replace />} />
                        <Route path="/main" element={<MainPage />} />
                    </Routes>
                </Suspense>
            </Layout>
            <Toaster />
        </BrowserRouter>
    );
};

export default App;
