import React, { useState } from 'react'
import "./Login.css"
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebase"

function Login() {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");  
    
    const handleLogin = () =>{
      signInWithEmailAndPassword(auth, email, password).catch(err =>{
        alert(err);
      });
    };
    
  return (
    <div className='login'>
        <h1>Login</h1>
        <div>
            <form>
                <input 
                onChange={(e) =>setEmail(e.target.value)} 
                type='email' 
                placeholder='enter email' 
                value={email}
                />
                <input 
                onChange={(e) => setPassword(e.target.value)} 
                type='password' 
                placeholder='enter password' 
                value={password}
                />
            </form>
            <button onClick={handleLogin}>Login</button>
            
        </div>
    </div>
  )
}

export default Login;