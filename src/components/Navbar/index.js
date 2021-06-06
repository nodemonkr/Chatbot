import React,{useState} from 'react'
import SignUpModal from '../../modal/signupModal'
import SignModal from '../../modal/signModal'
import styles from './index.module.css'
import { NavLink } from 'react-router-dom'

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
            <div className= {styles.nav}>
                <div><NavLink className= {styles.navLink} to='/'>
                    <img src='images/himeeting_logo3.png' alt="Himeeting" width="200" height="50" />   
                    <div className= {styles.navLink}>
                        <ul className= {styles.navMenu} menu={menu}>
                            <li><NavLink className= {styles.navLink} to="/" active>Home</NavLink></li>
                            <li><NavLink className= {styles.navLink} to='/Chatbot' >Chatbot</NavLink></li>
                            <li><NavLink className= {styles.navLink} to='/Team' >Team</NavLink></li>
                            <li className= {styles.navBtn}>
                                <li className= {styles.navBtnLink} onClick={() => setSignModalOn(true)} to='/SignUp'>Sign Up </li>    
                                <li className= {styles.navBtnLink} onClick={() => setSignUpModalOn(true)} to='/Login'>Login</li>
                            </li>
                        </ul>
                    </div>
                </NavLink></div>
            </div>
        </>
    );
};

export default Navbar;
