// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector
import Header from './components/Header';
import QLSach from './components/QLSach';
import Home from './components/Home';
import SignInForm from './components/SignInForm'; // Import SignInForm

function App() {
  // Sử dụng useSelector để lấy trạng thái đăng nhập từ Redux store
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  return (
    <div>

      {/* Hiển thị SignInForm nếu chưa đăng nhập */}
      {!isLoggedIn &&
       <SignInForm />}
      
      {/* Hiển thị giao diện chính nếu đã đăng nhập */}
        {isLoggedIn && (
          <div className="app">
            <Header />
            <main className="app-main">
              <Router>
                <Routes>
                  <Route path="/trangchu" element={<Home />} />
                  <Route path="/quansach" element={<QLSach />} />
                </Routes>
              </Router>
            </main>
          </div>
        )}
      </div>
    
  );
}

export default App;
