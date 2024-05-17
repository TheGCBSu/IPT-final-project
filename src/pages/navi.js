import React from 'react'
import logo from './resources/logo.jpg'
import './styles.css';
import { useState,useEffect } from 'react';
function Navi()
{
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    function goHome(){
        window.location.pathname=""
    }
    function goAbout(){
        window.location.pathname="./about"
    }
    function goUpload(){
      window.location.pathname="./upload"
  }
  function goUpdate(){
    window.location.pathname="./update"
}
    function goMenu(){
      window.location.pathname="./menu"
  }
  function goLocation(){
    window.location.pathname="./location"
}
function goSocial(){
  window.location.href="https://www.facebook.com/pizzeriablend"
}

function handleLogout() {
  setIsLoggedIn(false);
  localStorage.removeItem('token'); 
  window.location.pathname = './login';
}

useEffect(() => {
  const token = localStorage.getItem('token'); 
  const isLoggedIn = Boolean(token); 
  setIsLoggedIn(isLoggedIn);
}, []);

return (
  <header className="header">
    <div className="container">
      <img src={logo} alt="Logo" className="logo" />
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <p onClick={goHome} className="nav-link">
              Home
            </p>
          </li>
          <li className="nav-item">
            <p onClick={goAbout} className="nav-link">
              About
            </p>
          </li>
          <li className="nav-item">
            <p onClick={goLocation} className="nav-link">
              Location
            </p>
          </li>
          <li className="nav-item">
            <p onClick={goMenu} className="nav-link">
              Menu
            </p>
          </li>
          <li className="nav-item">
            <p onClick={goSocial} className="nav-link">
              Social Media
            </p>
          </li>
          {isLoggedIn && (
            <li className="nav-item">
              <div className="header-links">
                <p onClick={goUpdate} className="nav-link">
                  Update
                </p>
                <p onClick={goUpload} className="nav-link">
                  Upload
                </p>
                <p onClick={handleLogout} className="nav-link">
                  Logout
                </p>
              </div>
            </li>
          )}
        </ul>
      </nav>
    </div>
  </header>
);
}
export default Navi