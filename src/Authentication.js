import React, { useState } from 'react'
import Login from './Login';
import Signup from './Signup';

function Authentication() {

    const [active, setActive] = useState('login');

    const handleSignupLogin = () => {
        setActive(active === "login" ? "signup" : "login")
    }

  return (
    <div>
        <h1>Hey want to use our app please {active === "login" ? (<>Login</>) : (<>Sign up</>)}</h1>
        {active === "login" ? (<Login/>) : (<Signup />)}
          <div className='signup'>{active === "login" ? (<>Dont have any account?</>) : (<>Have any account?</>)} <span onClick={handleSignupLogin}>{active}</span></div>
    </div>
  )
}

export default Authentication