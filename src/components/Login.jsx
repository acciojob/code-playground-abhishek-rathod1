import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ onLogin,loggedIn}) => {
  const navigate = useNavigate();
  const handleLogin = () =>{
    onLogin();
    navigate('/playground');
  }
  return (
    <div>
      <div>Login Page</div>
      
      <button onClick={handleLogin}>{loggedIn ? "Logout":"Login"}</button>
    </div>
    
  )
}

export default Login