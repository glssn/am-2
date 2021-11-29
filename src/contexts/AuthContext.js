import React, { useContext, useState, useEffect } from 'react';
import instance from '../axios.setup'
import { auth, db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider ({children}) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    })

    return unsubscribe
  }, [])

  function signup(email, password, currentUser) {
    auth.createUserWithEmailAndPassword(email, password)
    .then(function(user) {
      console.log(user.user)
      const uid = user.user.uid;
      const email = user.user.email;
      // const creationdate = user.user.metadata.creationDate;
      // const lastsignindate = creationdate;
      db.collection("users").doc(uid).set({
          uid: uid,
          email: email
      })
      .then(() => {
          console.log("Document written for new user with id: ", uid);
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
    });
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  const value = {
    currentUser,
    signup,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
