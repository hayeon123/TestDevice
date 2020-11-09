import React from 'react';
import AuthTemplate from '../components/user/AuthTemplate';
import LoginForm from '../containers/user/LoginForm';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
};

export default LoginPage;
