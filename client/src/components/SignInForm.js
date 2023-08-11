// src/components/SignInForm.js
import React, { useState } from 'react';
import axios from 'axios';

const SignInForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [User, setUser] = useState([]);//thông tin user được trả về tại đây

  const handleSignIn = () => {
    axios.post('http://localhost:3000/account/signin',{
      name: name,
      password:password    
    }
    ).then(response => {
      setUser({...response.data});
      // Xử lý dữ liệu từ API response
    })
    .catch(error => {
      console.error('Error:', error);     
      // Xử lý lỗi
    });
    
  };

  return (
    <div className="signin-form">
      <h2>Đăng nhập</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Mật khẩu:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleSignIn}>Đăng nhập</button>
    </div>
  );
};

export default SignInForm;
