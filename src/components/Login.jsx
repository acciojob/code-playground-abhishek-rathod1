import React from 'react'

const Login = ({loggedIn, setLoggedIn}) => {
  return (
    <div>
      <div>Login</div>
      <button onClick={()=> setLoggedIn(!loggedIn)}>{loggedIn===true?"Logout":"Login"}</button>
    </div>
    
  )
}

export default Login