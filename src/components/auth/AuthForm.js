import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';

const textMap = {
  login: '로그인',
  signUp: '회원가입',
};
// 회원가입, 로그인 폼을 보여줍니다.
const AuthForm = ({ type }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text} </h3>
      <form>
        <StyledInput autoComplete='id' name='id' placeholder='아이디' />

        <StyledInput
          autoComplete='new-password'
          name='password'
          placeholder='비밀번호'
          type='password'
        />
        {type === 'signUp' && (
          <>
            <StyledInput
              autoComplete='new-password'
              name='passwordConfirm'
              placeholder='비밀번호 확인'
              type='password'
            />
            <StyledInput
              autoComplete='username'
              name='username'
              placeholder='이름'
            />
          </>
        )}
        <ButtonWithMarginTop navy fullWidth style={{ marginTop: '2rem' }}>
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === 'login' ? (
          <Link to='/signUp'>회원가입</Link>
        ) : (
          <Link to='/login'>로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};
const AuthFormBlock = styled.div`
  padding: 2rem;
  h3 {
    margin: 0;
    color: ${palette.black[0]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[3]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: ${palette.black[0]};
    border-bottom: 1px solid ${palette.navy[3]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[3]};
    text-decoration: underline;
    &:hover {
      color: #a4a9bc;
    }
  }
`;

export default AuthForm;
