import React from 'react';
import Navbar from '../Pages/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';

const Main = () => {
    const location = useLocation();
    const noheader = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            {noheader || <Navbar></Navbar>}
            <Outlet></Outlet>

        </div>
    );
};

export default Main;