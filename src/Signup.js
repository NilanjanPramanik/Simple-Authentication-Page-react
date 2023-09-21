import React, {useState} from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from './firebase';

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = () =>{
      createUserWithEmailAndPassword(auth, email, password).then(
        // signInWithEmailAndPassword(auth, email, password)
      ).catch((err)=>{
        alert(err);
      })
    }

  return (
    <div>
        <h1>Create an account</h1>
          <div>
              <form>
                  <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='enter email' value={email}/>
                  <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='enter password' value={password}/>
              </form>
              <button onClick={handleSignup}>Create</button>
          </div>
    </div>
  )
}

export default Signup