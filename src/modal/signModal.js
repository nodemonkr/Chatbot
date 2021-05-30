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

        <p class="login">이름</p>
    <input className="form-control" type="ID" placeholder="이름" />

    <p class="login">ID</p>
    <input className="form-control" type="ID" placeholder="ID" />
 
    <p class="login">Password</p>
    <input className="form-control" type="password" placeholder="Password" />
  <br/>
  
  <button className="loginbutton" type="submit" value="로그인">
    회원가입
  </button>
</form>


      
      </Modal>
    )
}

export default signModal