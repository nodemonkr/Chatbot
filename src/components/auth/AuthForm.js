import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import { useState } from 'react';
import axios from 'axios';

const textMap = {
  login: '로그인',
  signUp: '회원가입',
};
// 회원가입, 로그인 폼을 보여줍니다.
const AuthForm = ({ type }) => {
  const [data, setDate] = useState(null);
  const text = textMap[type];
  const [authObj, setAuthObj] = useState({
    user_id: '',
    user_pw: '',
    user_name: '',
    user_phone: '',
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
      console.log('id : ' + authObj.user_id);
      console.log('password : ' + authObj.user_pw);
      console.log('username : ' + authObj.user_name);
      await axios.post(`/userRegister`, authObj).then((res) => {
        console.log(res.data);
      });
    } catch (e) {
      alert(e);
    }
  };

  return (
    <AuthFormBlock>
      <h3>{text} </h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete='id'
          name='user_id'
          placeholder='아이디'
          onChange={onChange}
          value={authObj.user_id}
        />

        <StyledInput
          autoComplete='new-password'
          name='user_pw'
          placeholder='비밀번호'
          type='password'
          onChange={onChange}
          value={authObj.user_pw}
        />
        {type === 'signUp' && (
          <>
            <StyledInput
              autoComplete='new-password'
              name='passwordConfirm'
              placeholder='비밀번호 확인'
              type='password'
              onChange={onChange}
            />
            <StyledInput
              autoComplete='username'
              name='user_name'
              placeholder='이름'
              onChange={onChange}
              value={authObj.user_name}
            />
            <StyledInput
              autoComplete='userphone'
              name='user_phone'
              placeholder='휴대폰 번호'
              onChange={onChange}
              value={authObj.user_phone}
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
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
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
