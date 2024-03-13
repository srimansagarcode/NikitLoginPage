import React, { useState } from 'react';
import { Route, Routes, NavLink, Link, redirect } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import About from './About';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (logged = true) => {
    setLoggedIn(logged);
    redirect('/')
  };

  return (
    <>
      {loggedIn && <>
        <nav className='main-nav'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='about'>About</NavLink>
          <Link to='/' onClick={() => handleLogin(false)}>Logout</Link>

        </nav>
      </>}
      <Routes>
        <Route path="/" element={loggedIn ? <Home /> : <Login handleLogin={handleLogin} />} />
        <Route path="/about" element={loggedIn ? <About /> : <Login handleLogin={handleLogin} />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
      </Routes>
    </>
  );
};

export default App;
