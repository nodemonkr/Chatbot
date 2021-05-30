import React from 'react'
import "../css/chat.css"



const Chatbot = () => {
    return (
       <div>


            <div className="align-items-center">
        <div className="d-inline-flex flex-column border" id="chat">
          <div className="card-body msg_card_body mt-1">
          <div>2021년 5월 30일</div><br/>
          <strong>하이밋</strong><br/>
            <div className="d-flex justify-content-start  mb-4">
            <img src='images/임시chaticon.png' width="40" height="40"></img>
              <div className="msg_cotainer">
                <p>받은 메시지</p>
                <span className="msg_time">11시 40분</span>
              </div>
            </div>
            <div className="d-flex justify-content-end  mb-4">
              <div className="msg_cotainer_send">
                <p>보낸 메시지</p>
                <span className="msg_time_send">11시 45분</span>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="input-group">
              <input
                className="form-control type_msg"
                placeholder="메세지를 입력해주세요"
                // value={}
                // onChange={}
                // onKeyPress={}
              />
              <div className="input-group-append">
                <span
                  className="input-group-text send_btn "
                  // onClick={}
                >
                  send
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    )
}

export default Chatbot
