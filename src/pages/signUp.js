import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';

const SignUp = () => {
  return (
    <AuthTemplate>
      <AuthForm type='signUp'></AuthForm>
    </AuthTemplate>
  );
};

export default SignUp;
