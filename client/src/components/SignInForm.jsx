import React, { useState } from 'react';
import axios from 'axios';
import SignupForm from './SignupForm';

const SignInForm = ({onLogin}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const handleSignIn = () => {
    axios
      .post('http://localhost:3001/account/signin', {
        name: name,
        password: password,
      })
      .then(response => {
        const result = response.data;
        console.log(response.data.results[0]);
        if (response.status == 200) {
          setUser({ name: name });
          alert('Đăng nhập thành công.');
          onLogin();
        } else {
          setError('Tên người dùng hoặc mật khẩu không đúng.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Đăng nhập không thành công. Vui lòng kiểm tra thông tin đăng nhập.');
      });
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