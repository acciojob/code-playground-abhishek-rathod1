import React from 'react'
import Login from './Login'

const Playground = ({loggedIn, setLoggedIn}) => {
  return (
    <div>{loggedIn===true?'Welcome to code Playground' : <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/> }</div>
  )
}

export default Playground