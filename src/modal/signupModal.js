import React from 'react'
import {Modal,Form} from 'react-bootstrap'
import "../css/login.css"




const signupModal = ({show,onHide}) => {
    return (
        <Modal
        show={show}
        onHide={onHide}
        
      >
        
         <div className="LogoWrapper">
         <a>Himetting</a>
         </div>
          
        
        <strong className="logintop">로그인</strong>
        <Form>
  
    <p class="login">ID</p>
    <input className="form-control" type="ID" placeholder="ID" />

  

 
    <p class="login">Password</p>
    <input className="form-control" type="password" placeholder="Password" />
  <br/>
  
  <button className="loginbutton" type="submit" value="로그인">
    Submit
  </button>
</Form>
<hr></hr>
<div className="kakao"><strong className="tt">또는</strong>
        <br>
        </br>
        <a  href=""><img height="70px;" width="300px;" src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" /> </a>
        <br>
        </br>
        </div> 
      
      </Modal>
    )
}

export default signupModal