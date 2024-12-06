import React from 'react';
import NavBar from '../pages/NavBar';
import Footer from '../pages/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const MainLayout = () => {
    const location = useLocation();

    const isNotFoundPage = location.pathname === '/404' || location.pathname === '*';

    return (
        <div>
            {!isNotFoundPage && <NavBar />}
            <Outlet />
            {!isNotFoundPage && <Footer />}
        </div>
    );
};

export default MainLayout;
