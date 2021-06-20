import React, { useState, useEffect, useStateCallback } from 'react'
import styles from "../css/chat.module.css"
import classNames from 'classnames'
import { API } from "../api/api"
import { DynamicFeed } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import SendIcon from '@material-ui/icons/Send';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paperRoot: {
        width: '100%'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
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
        height: '100vh'
    },
    drawerHeader: {
        width: '100%',
        padding: theme.spacing(0, 1),
    },
}));

const Chatbot = (props) => {

    const [contents, setContents] = useState([])
    const [today, setToday] = useState("")
    const [message, setMessage] = useState('')
    const classes = useStyles();
    const chatBotCall = () => {
        API.post("/chatbot", { question: message }).then(res => {
            setContents([...contents, { name: 'haibot', message: res.data.response }])
        }).catch(err => {
            setContents([...contents, { name: 'haibot', message: "ERR" }])
        })
        setMessage('')
    }

    useEffect(() => {
        let date = new Date()
        setToday(`${date.getFullYear()}년${date.getMonth() + 1}월${date.getDate()}일`)
        if (contents.length != 0 && contents[contents.length - 1].name == 'user') {
            chatBotCall()
        }
    }, [contents])

    return (
        <div className={classes.root}>
            <Hidden xsDown>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Toolbar />
                    <div className={classes.drawerContainer}>
                        <List>
                            {['직업별 질문 챗봇', '기업별 질문 챗봇', '성격별 질문 챗봇'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                    </div>
                </Drawer>
            </Hidden>

            <main className={classes.content}>

                {/* 오른쪽 챗봇 채팅 */}
                <div className={styles.chatbotRight}>
                    {/* 대화 중인 챗봇 */}

                    <Typography className={classNames({ [styles.chatbotFont]: true, [styles.chatbotName]: true })}>
                        # 직업별 질문 챗봇
                    </Typography>
                    {/* 대화 내용 */}
                    <Box>
                        <Box>
                            <Box className={classes.drawerHeader, styles.talkBox}>
                                <ul className={styles.chatbotTalk}>
                                    <div className={styles.center}>
                                        <span className={styles.talkDay}>{today}</span>
                                    </div>
                                    {
                                        contents.map((item) => {
                                            if (item.name == 'haibot') {
                                                {/* 받은 메시지 */ }
                                                return (<li className={styles.getTalk}>
                                                    <span className={styles.chatbotImage}>
                                                        <img src='images/임시chaticon.png' width="30" height="30" />
                                                    </span>
                                                    <div claaName={styles.talkContainer}>
                                                        <strong className={styles.talkChatbotName}>하이밋</strong><br />

                                                        <span className={styles.getTalkAbout}>
                                                            <div className={classNames({ [styles.getMsg]: true, [styles.chatbotFont]: true })}>
                                                                <p>{item.message}</p>
                                                            </div>
                                                            <div><p className={styles.talkTime}>11시 40분</p></div>
                                                        </span>
                                                    </div>
                                                </li>)
                                            } else {
                                                {/* 보낸 메시지 */ }
                                                return (
                                                    <li className={styles.sendTalk}>
                                                        <span className={styles.sendTalkAbout}>
                                                            <div><p className={styles.talkTime}>11시 40분</p></div>
                                                            <div className={classNames({ [styles.sendMsg]: true, [styles.chatbotFont]: true })}>
                                                                <p>{item.message}</p>
                                                            </div>
                                                        </span>
                                                    </li>)
                                            }
                                        })
                                    }
                                </ul>
                            </Box>
                        </Box>
                        <Box>
                            {/* 톡 보내기 */}
                            <div className={styles.chatbotSandTalk}>
                                <Paper component="form" className={classes.paperRoot}>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-between"
                                        alignItems="flex-start"
                                    >
                                        <Grid item xs={8}>
                                            <InputBase
                                                style={{ width: '100%',height:'100%' }}
                                                className={classes.input}
                                                placeholder="메세지를 입력해주세요"
                                                inputProps={{ 'aria-label': '메세지를 입력해주세요' }}
                                                value={message}
                                                onChange={(e) => { setMessage(e.target.value) }}
                                            />
                                        </Grid>
                                        <Grid item xs={2}>
                                            <IconButton
                                                onClick={() => { setContents([...contents, { name: 'user', message: message }]) }}
                                                className={classes.iconButton} aria-label="search">
                                                <SendIcon />
                                            </IconButton>
                                            <Divider className={classes.divider} orientation="vertical" />
                                        </Grid>
                                    </Grid>

                                </Paper>
                            </div>
                        </Box>
                    </Box>

                </div>
            </main>
        </div>
    )
}
export default Chatbot
