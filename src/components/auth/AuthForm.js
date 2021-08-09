import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import { useState } from 'react';

const textMap = {
  login: '로그인',
  signUp: '회원가입',
};
// 회원가입, 로그인 폼을 보여줍니다.
const AuthForm = ({ type }) => {
  const text = textMap[type];
  const [authObj, setAuthObj] = useState({
    id: '',
    password: '',
    passwordConfirm: '',
    username: '',
  });

  const onChange = async (event) => {
    const {
      target: { name, value },
    } = event;
    setAuthObj((authObj) => ({ ...authObj, [name]: value }));
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('onSubmit');
    } catch (e) {
      console.error(e);
    }
  };
  // const [id, setId] = React.useState('');
  // const [password, setPassword] = React.useState('');
  // const [passwordConfirm, setPasswordConfirm] = React.useState('');
  // const [username, setUsername] = React.useState('');

  return (
    <AuthFormBlock>
      <h3>{text} </h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete='id'
          name='id'
          placeholder='아이디'
          onChange={onChange}
          value={authObj.id}
        />

        <StyledInput
          autoComplete='new-password'
          name='password'
          placeholder='비밀번호'
          type='password'
          onChange={onChange}
          value={authObj.password}
        />
        {type === 'signUp' && (
          <>
            <StyledInput
              autoComplete='new-password'
              name='passwordConfirm'
              placeholder='비밀번호 확인'
              type='password'
              onChange={onChange}
              value={authObj.passwordConfirm}
            />
            <StyledInput
              autoComplete='username'
              name='username'
              placeholder='이름'
              onChange={onChange}
              value={authObj.username}
            />
          </>
        )}
        <ButtonWithMarginTop navy fullWidth style={{ marginTop: '2rem' }}>
          {text}
        </ButtonWithMarginTop>
        <input type='submit' value={text} />
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
