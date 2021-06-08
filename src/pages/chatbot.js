import React, { useState, useEffect ,useStateCallback} from 'react'
import styles from "../css/chat.module.css"
import classNames from 'classnames'
import { API } from "../api/api"
import { DynamicFeed } from '@material-ui/icons'


const Chatbot = (props) => {

    const [contents, setContents] = useState([])
    const [today, setToday] = useState("")
    const [message, setMessage] = useState('')


    const chatBotCall = () => {
          API.post("/chatbot",{question:message}).then(res =>{
            setContents([...contents, { name: 'haibot', message: "message" }])
            console.log(res)
          }).catch(err =>{
            console.log(err)
            setContents([...contents,{ name: 'haibot', message: "message" }])
          })
        setMessage('')
    }

    useEffect(() => {
        let date = new Date()
        setToday(`${date.getFullYear()}년${date.getMonth() + 1}월${date.getDate()}일`)
        console.log('dfdf')
        if(contents.length != 0 && contents[contents.length -1 ].name == 'user' ){
            console.log('dfdf')
            chatBotCall()
        }
    }, [contents])

    return (
        <div className={styles.chatbot}>
            {/* 왼쪽 챗봇 리스트 */}
            <div className={styles.chatbotLeft}>
                <div className={classNames({ [styles.chatbotList]: true, [styles.chatbotFont]: true })}>
                    <ul>
                        <li><p># 직업별 질문 챗봇</p></li>
                        <li><p># 기업별 질문 챗봇</p></li>
                        <li><p># 성격별 질문 챗봇</p></li>
                    </ul>
                </div>
            </div>
            {/* 오른쪽 챗봇 채팅 */}
            <div className={styles.chatbotRight}>
                {/* 대화 중인 챗봇 */}
                <div className={classNames({ [styles.chatbotFont]: true, [styles.chatbotName]: true })}>
                    # 직업별 질문 챗봇
          </div>
                {/* 대화 내용 */}
                <div className={styles.chatbotTalk}>
                    <div className={styles.center}>

                        <span className={styles.talkDay}>{today}</span>
                    </div>
                    {
                        contents.map((item) => {
                            if (item.name == 'haibot') {
                                {/* 받은 메시지 */ }
                                return (<div className={styles.getTalk}>
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
                                </div>)
                            } else {
                                {/* 보낸 메시지 */ }
                                return (
                                    <div className={styles.sendTalk}>
                                        <span className={styles.sendTalkAbout}>
                                            <div><p className={styles.talkTime}>11시 40분</p></div>
                                            <div className={classNames({ [styles.sendMsg]: true, [styles.chatbotFont]: true })}>
                                                <p>{item.message}</p>
                                            </div>
                                        </span>
                                    </div>)
                            }
                        })
                    }


                </div>
                {/* 톡 보내기 */}
                <div className={styles.chatbotSandTalk}>
                    <div className={styles.inputSandTalk}>
                        <input
                            className={styles.formControl}
                            placeholder="메세지를 입력해주세요"
                            value={message}
                            onChange={(e) => {setMessage(e.target.value)}}
                        // onKeyPress={}
                        />
                        <div>
                            <span
                                className={styles.inputSendBox}
                                onClick={()=>{setContents([...contents,{ name: 'user', message: message }])}}
                                >
                                send
                      </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>



    )
}

export default Chatbot
