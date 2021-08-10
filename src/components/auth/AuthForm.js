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
  const [data, setData] = useState(null);
  const text = textMap[type];
  const [authObj, setAuthObj] = useState({
    user_id: '',
    user_pw: '',
    user_name: '',
    user_phone: '',
  });

  const onChange = async (event) => {
    console.log('onchange');
    const {
      target: { name, value },
    } = event;
    setAuthObj((authObj) => ({ ...authObj, [name]: value }));
  };
  const onSubmit = async (event) => {
    event.preventDefault(); //submit과 동시에 창이 다시 실행되는 것을 막아줍니다.
    if (type === 'signUp') {
      // 회원가입
      try {
        console.log(
          `[회원가입] id: ${authObj.user_id} + password: ${authObj.user_pw} + usename: ${authObj.user_name} userphone: ${authObj.user_phone}`,
        );
        await axios
          .post(`/userRegister`, authObj)
          // 회원가입 성공
          .then((res) => {
            alert('회원가입 성공!');
            console.log(res.data);
          })
          // 회원가입 실패
          .catch(function (e) {
            alert('회원가입 실패');
            console.log(e);
          });
      } catch (e) {
        alert(e);
      }
    } else {
      // 로그인
      try {
        console.log(
          `[로그인] id: ${authObj.user_id} + password: ${authObj.user_pw}`,
        );
        await axios
          .post(`/userLogin`, authObj)
          // 로그인 응답 성공
          .then((res) => {
            setData(res.data);
            alert(data.username + '님 환영합니다!' + data.userphone);
          })
          // 응답 실패
          .catch(function (e) {
            alert('아이디, 비밀번호를 확인해주세요.');
            console.log(e);
          });
      } catch (e) {
        console.log(e);
      }
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
