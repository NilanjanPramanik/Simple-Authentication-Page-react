import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Authentication from './Authentication';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import { useEffect } from 'react';
import { auth } from './firebase';
import { loginUser, setLoading } from "./features/userSlice"
import Loader from './Loader';

function App() {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.data.user.isLoading);
  // console.log(isLoader)

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch(loginUser({
            uid: authUser.uid,
            email: authUser.email,
          })
          );
        dispatch(setLoading(false));
      }
      else{console.log("User is not logged in")}
    })
  }, []);
  
  return (
    <>
      {isLoading ? (<Loader />) : (<>{user ? (<Home />) : (<Authentication />)}</>)}
    </>
  )
}

export default App;
