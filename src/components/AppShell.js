import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// css 작업
const styles = {
    root : {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 'auto'     // 왼쪽 정렬
    }
}

class AppShell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle:false
        };
    }

    // 함수 생성 : hancleDrawerToggle 가 실행되면 toggle의 반대 값을 넣어준다.
    hancleDrawerToggle = () => this.setState({toggle: !this.state.toggle})
    render(){
        console.log('toggle : ' + this.state.toggle);
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <IconButton className={classes.menuButton} color="inherit" onClick={this.hancleDrawerToggle}>
                        <MenuIcon/>
                    </IconButton>    
                </AppBar>
                <Drawer open={this.state.toggle}>
                    <MenuItem onClick={this.hancleDrawerToggle}>About</MenuItem>
                    <MenuItem onClick={this.hancleDrawerToggle}>Chatting</MenuItem>
                    <MenuItem onClick={this.hancleDrawerToggle}>Q&A</MenuItem>
                    <MenuItem onClick={this.hancleDrawerToggle}>Chatting</MenuItem>
                </Drawer>
            </div>
        );
    }

}

export default withStyles(styles)(AppShell);