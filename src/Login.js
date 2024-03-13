// Login.js
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory();

  // const handleLogin = () => {
  // //   // Perform login logic here (e.g., validate credentials)
  // //   // For simplicity, this example always sets loggedIn to true
  // //   setLoggedIn(true);
  // //   history.push('/home');
  // };

  return (
    <div className='login-section'>
      <div className='login-block'>
      <h2 className='login-title'>Login</h2>
      <form onSubmit={handleLogin} className='login-form'>
        <input
          type="text"
          placeholder="Username"
          value={username}
          required
          min={5}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          min={5}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <div className='login-button-block'>
            <button type="submit" className='login-button'>Login</button>
        </div>
        
      </form>
      </div>
    </div>
  );
};

export default Login;
