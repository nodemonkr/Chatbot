import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

// 회원가입, 로그인 페이지의 레이아웃을 담당하는 컴포넌트
const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <BaseBox>
        <div className='logo-area'>
          <Link to='/'>Himeeting</Link>
        </div>
        {children}
      </BaseBox>
    </AuthTemplateBlock>
  );
};

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 4rem;
  bottom: 0;
  right: 0;
  background-color: ${palette.white[0]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BaseBox = styled.div`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  width: 30rem;
  border-radius: 30px;
  border: 1px solid ${palette.navy[0]};
  .logo-area {
    padding-top: 1rem;
    border-radius: 30px 30px 0 0;
    display: block;
    padding-bottom: 1rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 1px;
    border: none;
    background-color: ${palette.navy[0]};
    a {
      color: ${palette.white[0]};
      font-size: 1.5rem;
      text-decoration: none;
    }
  }
`;
export default AuthTemplate;
