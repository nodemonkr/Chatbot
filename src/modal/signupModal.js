import React from 'react'
import {Modal} from 'react-bootstrap'
import styles from "../css/login.module.css"




const signupModal = ({show,onHide}) => {
    return (
        <Modal
        show={show}
        onHide={onHide}
        
      >
        
         <div className={styles.LogoWrapper}>
         <a>Himetting</a>
         </div>
          
        
        <strong className={styles.logintop}>로그인</strong>
        <form>
  
    <p class={styles.login}>ID</p>
    <input className={styles.loginform} type="ID" placeholder="ID" />

  

 
    <p class={styles.login}>Password</p>
    <input className={styles.loginform} type="password" placeholder="Password" />
  <br/>
  
  <button className={styles.loginbutton} type="submit" value="로그인">
    로그인
  </button>
</form>
<hr></hr>
<div className={styles.kakao}><strong className="tt">또는</strong><br></br>
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