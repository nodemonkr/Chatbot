import React,{useState} from 'react'
import styles from "../css/chat.module.css"
import classNames from 'classnames'
import {API} from "../api/api"


const Chatbot = () => {

    const [contents, setContents] = useState({haibot:"",me:""})
    const [message, setMessage] = useState("")

    
    const chatBotCall = () =>{
      API.post("/chatbot",{
        message:message
      }).then(res =>{
        setContents({...contents, res})
      }).catch(err =>{
        console.log(err)
      })
      setMessage('')
    }


    return (
      <div className={styles.chatbot}>
      {/* 왼쪽 챗봇 리스트 */}
      <div className={styles.chatbotLeft}>
          <div className={classNames({[styles.chatbotList]:true, [styles.chatbotFont]:true})}>
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
          <div className={classNames({[styles.chatbotFont]:true, [styles.chatbotName]:true})}>
                 # 직업별 질문 챗봇
          </div>
          {/* 대화 내용 */}
          <div className={styles.chatbotTalk}>
              <div className={styles.center}>

              <span className={styles.talkDay}>2021년 5월 30일</span>
              </div>
                  {/* 받은 메시지 */}
                  <div className={styles.getTalk}>
                      <span className={styles.chatbotImage}>
                          <img src='images/임시chaticon.png' width="30" height="30"/>
                      </span>
                      <div claaName={styles.talkContainer}>
                          <strong className={styles.talkChatbotName}>하이밋</strong><br/>
                          
                          <span className={styles.getTalkAbout}>
                              <div className={classNames({[styles.getMsg]:true, [styles.chatbotFont]:true})}>
                                  <p>받은 메시지</p>
                              </div>  
                              <div><p className={styles.talkTime}>11시 40분</p></div>
                          </span>
                      </div>
                  </div>
                   {/* 보낸 메시지 */}
                   <div className={styles.sendTalk}>
                       <span className={styles.sendTalkAbout}>
                              <div><p className={styles.talkTime}>11시 40분</p></div>
                              <div className={classNames({[styles.sendMsg]:true, [styles.chatbotFont]:true})}>
                                  <p>보낸 메시지</p>
                              </div>
                      </span>
                  </div>
          </div>
          {/* 톡 보내기 */}
          <div className={styles.chatbotSandTalk}>
                  <div className={styles.inputSandTalk}>
                  <input
                      className={styles.formControl}
                      placeholder="메세지를 입력해주세요"
                      //value={message}
                      //onChange={(e)=>setMessage(e.target.value)}
                      // onKeyPress={}
                  />
                  <div>
                      <span
                         className={styles.inputSendBox}
                      // onClick={chatBotCall}
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
