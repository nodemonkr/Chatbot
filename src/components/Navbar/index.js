import React, { useState } from 'react'
import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = () => {
    const [menu, setmenu] = useState(false)     // reactHooks

    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <img src='images/himeeting_logo3.png' alt='Himeeting' width="200" height="60" />   
                </NavLink>   
                
                <NavMenu menu={menu}>
                    <NavLink to='/' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/Chatbot' activeStyle>
                        Chatbot
                    </NavLink>
                    <NavLink to='/Team' activeStyle>
                        Team
                    </NavLink>
                   
                    <NavBtn>
                        <NavBtnLink to='/SignUp'>Sign Up </NavBtnLink>    
                        <NavBtnLink to='/Login'>Login</NavBtnLink>    
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
