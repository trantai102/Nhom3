// src/components/SignInForm.js
import React, { useState } from 'react';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Xử lý đăng nhập ở đây, có thể gửi thông tin đăng nhập lên máy chủ hoặc thực hiện các xử lý cần thiết
    console.log('Email:', email);
    console.log('Password:', password);
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
