
import React from 'react'
import styles from "../css/index.module.css"

const Home = () => {
    return (
        <div className={styles.home_container}>
            <div className={styles.home_image}>
                이미지
            </div>
            <div className={styles.home_text}>
                <div className={styles.Himeeting_about}>
                    <div className={styles.home_logo}><img src="/images/himeeting_logo1.png" weight="50px" height="50px" /></div>
                    <div className={styles.bold_font}>하이미팅과 면접 준비 같이해요!   </div>
                    <div className={styles.small_font}>
                        면접을 준비하는 과정에서 가장 중요한 부분은 무엇일까요?<br/>
                        면접에서 당황하지 않도록 다양한 질문 리스트를 미리 연습해보는 것입니다.<br/>
                        하이미팅에서는 직무별/기업별/성격별로 다양한 질문 리스트를 보다 빠르고 편리하게 만나볼 수 있어요!
                    
                    </div>
                    <div >
                        <button className={styles.chatBot_category}>직무별 질문 </button>
                        <button className={styles.chatBot_category}>기업별 질문</button>
                        <button className={styles.chatBot_category}>성격별 질문 </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
