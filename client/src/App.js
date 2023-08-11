import './App.css';
import { useState } from 'react';
import axios from 'axios';
import SignInForm from './components/SignInForm';
function App() {

  async function callAPI() {
    await axios.get('http://localhost:3000/')
      .then(response => {
        setData({...response.data});
        // Xử lý dữ liệu từ API response
      })
      .catch(error => {
        console.error('Error:', error);
        // Xử lý lỗi
      });
  }

  const [data, setData] = useState([]);
  // useEffect(() => {
  //   // Gọi API khi component được mount
    
  //   callAPI();

  // }, [])

  return (
    <div className="app">
    <header className="app-header">
    </header>
    <main className="app-main">
      <SignInForm />
    </main>
  </div>
  );
}

export default App;
