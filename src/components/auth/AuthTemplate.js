import styled from 'styled-components';
import React from 'react';
import palette from '../../lib/styles/palette';

// 회원가입, 로그인 페이지의 레이아웃을 담당하는 컴포넌트
const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <BaseBox>{children}</BaseBox>
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
  border: 1px solid ${palette.navy[0]};
`;
export default AuthTemplate;
