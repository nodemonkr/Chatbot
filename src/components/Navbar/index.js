import React,{useState} from 'react'
import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';
import  SignUpModal from '../../modal/signupModal'
import  SignModal from '../../modal/signModal'

const Navbar = () => {
    const [signUpModalOn, setSignUpModalOn] = useState(false);
    const [signModalOn, setSignModalOn] = useState(false);
    const [menu, setmenu] = useState(false)     // reactHooks

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
                    <img src='images/himeeting_logo3.png' alt="Himeeting" width="200" height="50" />   
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
                    <NavBtnLink onClick={() => setSignModalOn(true)} to='/SignUp'>Sign Up </NavBtnLink>    
                   <NavBtnLink onClick={() => setSignUpModalOn(true)} to='/Login'>Login</NavBtnLink>
                </NavBtn>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
