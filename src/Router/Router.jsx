import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Components/Header/Header';

const Router = () => {
    const location = useLocation() ; 
    const [hide,setHide] = useState(false)
    useEffect(() => {

const isHave = ["/login","/register","/dashboard"].find((a)=> a === location.pathname ) ;
if(isHave){
    setHide(true)
}else{
    setHide(false)
}


    //  location.pathname ? 
    
     
    }, [location.pathname])
    





    return (
        <div className='min-h-screen flex text-white   bg-[#1c1c1c] flex-col'>
         {hide ||   <Header/>}
            <Outlet/>
            
        </div>
    );
};

export default Router;