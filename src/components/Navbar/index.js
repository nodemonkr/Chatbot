import React,{useState} from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';
import  SignUpModal from '../../modal/signupModal'

const Navbar = () => {
    const [signUpModalOn, setSignUpModalOn] = useState(false);
    return (
        <>
      <SignUpModal
        show={signUpModalOn}
        onHide={() => setSignUpModalOn(false)}
      />
            <Nav>
                <NavLink to='/'>
                    <img src='images/himeeting_logo3.png' alt='Himeeting' width="200" height="60" />   
                </NavLink>    
                <Bars />
                <NavMenu>
                    <NavLink to='/' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/Chatbot' activeStyle>
                        Chatbot
                    </NavLink>
                    <NavLink to='/Team' activeStyle>
                        Team
                    </NavLink>
                   
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/SignUp'>Sign Up </NavBtnLink>    
                   <NavBtnLink onClick={() => setSignUpModalOn(true)} to='/Login'>Login</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
