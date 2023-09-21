import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from "./features/userSlice"
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

function Home() {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  };

  return (
    <div>
      <h1>Home</h1>
      <h2>Wellcome {user.email}</h2>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Home