import './App.css';
// import { useState } from 'react';
// import axios from 'axios';
import SignInForm from './components/SignInForm';
import SignupForm from './components/SignupForm';
function App() {
  return (
    <div className="app">
    <header className="app-header">
    </header>
    <main className="app-main">
      <SignupForm />
    </main>
  </div>
  );
}

export default App;
