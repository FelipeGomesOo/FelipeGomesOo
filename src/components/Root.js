import React from 'react'; 
import NavBar from './NavBar';
import {Outlet} from 'react-router-dom';
import BurgerMenu from './BurgerMenu';


const Root = () => {     
    return (
        <div id='page-wrap'> 
            <BurgerMenu />            
            <NavBar />        
            <Outlet />           
        </div>
    );
};

export default Root;