import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';

const Router = () => {
    return (
        <div className='min-h-screen flex text-white   bg-[#1c1c1c] flex-col'>
           <Header/>
            <Outlet/>
            
        </div>
    );
};

export default Router;