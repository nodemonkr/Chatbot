import React, { useState } from 'react'
import SignUpModal from '../../modal/signupModal'
import SignModal from '../../modal/signModal'
import styles from './index.module.css'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        background:'white',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));


const NavbarComponent = () => {
    const classes = useStyles();
    const [signUpModalOn, setSignUpModalOn] = useState(false);
    const [signModalOn, setSignModalOn] = useState(false);
    const [menu, setmenu] = useState(false)     // reactHooks

    return (
        <React.Fragment>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <img src='images/himeeting_logo3.png' alt="Himeeting" width="200" height="50" />
                    <div className={styles.navLink}>
                        <ul className={styles.navMenu} menu={menu}>
                            <li><NavLink className={styles.navLink} to="/" active>Home</NavLink></li>
                            <li><NavLink className={styles.navLink} to='/Chatbot' >Chatbot</NavLink></li>
                            <li><NavLink className={styles.navLink} to='/Team' >Team</NavLink></li>
                            <li className={styles.navBtn}>
                                <li className={styles.navBtnLink} onClick={() => setSignModalOn(true)} to='/SignUp'>Sign Up </li>
                                <li className={styles.navBtnLink} onClick={() => setSignUpModalOn(true)} to='/Login'>Login</li>
                            </li>
                        </ul>
                    </div>
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
        </React.Fragment>
    );
};

export default NavbarComponent;
