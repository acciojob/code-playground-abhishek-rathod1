import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({loggedIn, children}) => {
  return loggedIn ? children : <Navigate to={'/login'}/>
  return (
    <div>PrivateRoute</div>
  )
}

export default PrivateRoute