import React from 'react';
import NavBar from '../pages/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;