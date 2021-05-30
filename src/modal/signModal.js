import React from 'react'
import {Modal} from 'react-bootstrap'
import "../css/login.css"




const signModal = ({show,onHide}) => {
    return (
        <Modal
        show={show}
        onHide={onHide}
        
      >
        
         <div className="LogoWrapper">
         <a>Himetting</a>
         </div>
          
        
        <strong className="logintop">회원가입</strong>
        <form>

        <p class="login">ID</p>
    <input className="loginform" type="ID" placeholder="ID" />
    <small className="loginsmall">이메일을 입력해주세요.</small>

    <p class="login">NICKNAME</p>
    <input className="loginform" type="ID" placeholder="NICKNAME" />
    <small className="loginsmall">3~12자 이내의 한글,영문,숫자,특수문자만 사용할 수 있습니다.</small>
 
    <p class="login">Password</p>
    <input className="loginform" type="password" placeholder="Password" />
    <small className="loginsmall">8~12자 이내로 영문자,숫자,특수문자가 적어도 1개이상 포함되어야 합니다.</small>
    <p class="login">Password</p>
    <input className="loginform" type="password" placeholder="Confirm Password" />
    <small className="loginsmall">비밀번호를 다시 한번 입력해주세요.</small>
  <br/>
  <br/>
  
  <button className="loginbutton" type="submit" value="로그인">
    회원가입
  </button>
</form>


      
      </Modal>
    )
}

export default signModal