import React from 'react';
import AuthTemplate from '../components/user/AuthTemplate';
import RegisterForm from '../containers/user/RegisterForm';

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
