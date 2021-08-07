import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';

const Login = () => {
  return (
    <>
      <AuthTemplate>
        <AuthForm type='login'></AuthForm>
      </AuthTemplate>
    </>
  );
};

export default Login;
