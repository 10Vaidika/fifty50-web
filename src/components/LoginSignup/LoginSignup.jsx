import React, { useState } from 'react';
import './LoginSignup.css';
import loginImage from './../assets/login1.png';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='center'>
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">

        <div className='login-image-container'>
          <img src={loginImage} style={{width: '220px', height: '220px'}}/>
        </div>

        <div className="input-group">
          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="login-button">Login</button>

        <div className="signup-link">
          New user? <a href="/signup">Sign up</a>
        </div>
      </form>
    </div>
    </div>
  );
}

export default LoginScreen;
