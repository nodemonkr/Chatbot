import React from 'react'
import {Modal} from 'react-bootstrap'
import styles from "../css/login.module.css"




const signModal = ({show,onHide}) => {
    return (
        <Modal
        show={show}
        onHide={onHide}
        
      >
        
         <div className={styles.LogoWrapper}>
         <a>Himetting</a>
         </div>
          
        
        <strong className={styles.logintop}>회원가입</strong>
        <form>

        <p class={styles.login}>ID</p>
    <input className={styles.loginform} type="ID" placeholder="ID" />
    <small className={styles.loginsmall}>이메일을 입력해주세요.</small>

    <p class={styles.login}>NICKNAME</p>
    <input className={styles.loginform} type="ID" placeholder="NICKNAME" />
    <small className={styles.loginsmall}>3~12자 이내의 한글,영문,숫자,특수문자만 사용할 수 있습니다.</small>
 
    <p class={styles.login}>Password</p>
    <input className={styles.loginform} type="password" placeholder="Password" />
    <small className={styles.loginsmall}>8~12자 이내로 영문자,숫자,특수문자가 적어도 1개이상 포함되어야 합니다.</small>
    <p class={styles.login}>Password</p>
    <input className={styles.loginform} type="password" placeholder="Confirm Password" />
    <small className={styles.loginsmall}>비밀번호를 다시 한번 입력해주세요.</small>
  <br/>
  <br/>
  
  <button className={styles.loginbutton} type="submit" value="로그인">
    회원가입
  </button>
</form>


      
      </Modal>
    )
}

export default signModal