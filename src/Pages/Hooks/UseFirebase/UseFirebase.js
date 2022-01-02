import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";
import firebaseInitialize from '../../firebase/firebaseInitialize';


firebaseInitialize();
const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true)

  const auth = getAuth()
  // registerUser section
  const registerUser= (email,password)=>{
    setLoading(true)
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    })
    .finally(()=> setLoading(false));
  }
  // signIn With Email And Password
  const loginUser =(email,password)=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
  })
  .finally(()=> setLoading(false));
  }

  // onAuthStateChanged section
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
      setLoading(false)
    });
    return () => unSubscribe;
  },[])

  // LogOut section
    const logOut =()=>{
      setLoading(true)
      signOut(auth).then(() => {

      }).catch((error) => {

      })
      .finally(()=> setLoading(false));
    }
  return {
    user,
    loading,
    registerUser,
    logOut,
    loginUser,
  };
};

export default UseFirebase;