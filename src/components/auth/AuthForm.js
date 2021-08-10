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
        await axios
          .post(`/userLogin`, authObj)
          // 로그인 응답 성공
          .then((res) => {
            // setData(res.data);
            console.log(
              `[로그인] id: ${authObj.user_id} , password: ${authObj.user_pw}`,
            );
            console.log(res.data.username);
            alert(res.data.username + '님 환영합니다!' + res.data.userphone);
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
      <AuthFormName>{text} </AuthFormName>
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
          <GotoLink>
            <p>이미 하이미팅 회원이신가요?</p>
            <Link to='/signUp'>회원가입</Link>
          </GotoLink>
        ) : (
          <GotoLink>
            <p>아직 하이미팅 회원이 아니신가요?</p>{' '}
            <Link to='/login'>로그인</Link>
          </GotoLink>
        )}
      </Footer>
    </AuthFormBlock>
  );
};
const AuthFormBlock = styled.div`
  padding: 2rem;
`;
const AuthFormName = styled.div`
  color: ${palette.navy[2]};
  // border: 1px solid red;
  display: flex;
  justify-content: center;
  margin: 1rem auto 3rem;
  font-size: 2rem;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  border: none;
  border: 1px solid ${palette.navy[0]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;

  &:focus {
    color: ${palette.black[0]};
    border: 1px solid ${palette.navy[1]};
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
`;

const GotoLink = styled.div`
  display: flex;
  float: right;
  p {
    margin-right: 1rem;
    color: ${palette.black[0]};
  }
  a {
    color: ${palette.navy[1]};
    text-decoration: underline;
    &:hover {
      color: ${palette.navy[2]};
    }
  }
`;

export default AuthForm;
