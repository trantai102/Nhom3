// src/components/SignInForm.js
import React, { useState } from 'react';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [User, setUser] = useState([]);//thông tin user

  const handleSignIn = async () => {
    await axios.post('http://localhost:3000/account/signin',
      email,password    
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
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
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
