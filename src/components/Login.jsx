import React from 'react';
import Header from './Header';
import SignForm from './SignForm';

import { Sign_background } from '../constant'


const Login = () => {
  return (
    <div
      className="login-container relative h-[100vh] w-full"
      style={{ backgroundImage: `url(${Sign_background})` }}
    >

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      
      {/* Header below the overlay */}
        <Header />
      

      {/* Login Form - Above the overlay */}
        <SignForm/>

    </div>
  );
};

export default Login;
