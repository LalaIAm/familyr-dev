import { createContext, useContext, useState, useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

import { getFirebaseConfig } from './config'

const firebaseContext = createContext()

export function ProvideFirebase({ children }) {
  const firebase = useProvideFirebase()
  return (
    <firebaseContext.Provider displayName='firebase' value={firebase}>
      {children}
    </firebaseContext.Provider>
  )
}

export const useFirebase = () => {
  return useContext(firebaseContext)
}

const useProvideFirebase = () => {
  const [user, setUser] = useState(null)
  const [firebase, setFirebase] = useState(null)

  async function googleSignIn() {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(getAuth(), provider)
  }

  async function emailSignUp(email, password) {
    try {
      const result = await createUserWithEmailAndPassword(
        getAuth(),
        email,
        password
      )
      setUser(result.user)
      return result.user
    } catch (err) {
      console.log(err)
    }
  }

  async function emailLogIn(email, password) {
    await signInWithEmailAndPassword(getAuth(), email, password)
  }

  function signOutUser() {
    signOut(getAuth())
  }

  function initFirebaseAuth() {
    onAuthStateChanged(getAuth(), authStateObserver)
  }

  function getProfilePicUrl() {
    return getAuth().currentUser.photoURL
  }

  function getUserName() {
    return getAuth().currentUser.displayName
  }

  function isUserSignedIn() {
    return !!getAuth().currentUser
  }

  function authStateObserver(user) {
    if (user) {
      localStorage.setItem('loggedIn', 'true')
      localStorage.setItem('user', JSON.stringify(user))
      setUser(user)
    } else {
      localStorage.removeItem('loggedIn')
      localStorage.removeItem('user')
      setUser(null)
    }
  }

  const firebaseApp = initializeApp(getFirebaseConfig())
  initFirebaseAuth()

  useEffect(() => {
    if (!firebase) {
      setFirebase(firebaseApp)
    }
  }, [firebase, firebaseApp])

  return {
    user,
    googleSignIn,
    emailLogIn,
    emailSignUp,
    signOutUser,
    isUserSignedIn,
    getUserName,
    getProfilePicUrl,
  }
}
