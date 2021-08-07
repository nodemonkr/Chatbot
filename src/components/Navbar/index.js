import React, { useState } from 'react';
import styles from './index.module.css';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: 'white',
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
  // const [signUpModalOn, setSignUpModalOn] = useState(false);
  // const [signModalOn, setSignModalOn] = useState(false);
  const [menu, setmenu] = useState(false); // reactHooks

  return (
    <React.Fragment>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <img
            src='images/himeeting_logo3.png'
            alt='Himeeting'
            width='200'
            height='50'
          />
          <div className={styles.navLink}>
            <ul className={styles.navMenu} menu={menu}>
              <li>
                <NavLink className={styles.navLink} to='/' active>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.navLink} to='/chatbot'>
                  Chatbot
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.navLink} to='/team'>
                  Team
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.navLink} to='/signUp'>
                  SignUp
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.navLink} to='/login'>
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar id='back-to-top-anchor' />
    </React.Fragment>
  );
};

export default NavbarComponent;
