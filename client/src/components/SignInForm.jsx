// src/components/SignInForm.js
import React, { useState } from 'react';
import axios from 'axios';
import SignupForm from './SignupForm';
import { useDispatch } from 'react-redux';
import { login } from '../components/auth/authActions';

const SignInForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const handleSignIn = () => {
    // axios.post('http://localhost:3001/account/signin',{
    //   name: name,
    //   password:password    
    // }
    // ).then(response => {
    //   setUser({...response.data});
    //   // Xử lý dữ liệu từ API response
    //   alert("Đăng nhập thành công.")
    //   onLogin();
    // })
    // .catch(error => {
    //   console.error('Error:', error);     
    //   // Xử lý lỗi
    // });
    onLogin();
  };

  const toggleSignUpForm = () => {
    setShowSignUpForm(!showSignUpForm);
  };

  return (
    <div className="signin-form">
      <h2>Đăng nhập</h2>
      {error && <div className="error">{error}</div>}
      <div>
        <label>Username:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Mật khẩu:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleSignIn}>Đăng nhập</button>
      <button onClick={toggleSignUpForm}>Đăng ký</button>
      {showSignUpForm && <SignupForm />}
    </div>
  );
};


export default SignInForm;