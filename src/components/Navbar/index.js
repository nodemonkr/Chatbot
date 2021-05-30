import React,{useState} from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';
import  SignUpModal from '../../modal/signupModal'
import  SignModal from '../../modal/signModal'

const Navbar = () => {
    const [signUpModalOn, setSignUpModalOn] = useState(false);
    const [signModalOn, setSignModalOn] = useState(false);
    return (
        <>
      <SignUpModal
        show={signUpModalOn}
        onHide={() => setSignUpModalOn(false)}
      />
      <SignModal
        show={signModalOn}
        onHide={() => setSignModalOn(false)}
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
                    <NavBtnLink onClick={() => setSignModalOn(true)} to='/SignUp'>Sign Up </NavBtnLink>    
                   <NavBtnLink onClick={() => setSignUpModalOn(true)} to='/Login'>Login</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
