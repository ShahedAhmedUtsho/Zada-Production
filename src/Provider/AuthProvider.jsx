import { useState } from "react";
import { createContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import Auth from "../Firebase/firebase.config";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);

      setLoading(false);
      console.log("its user", currentUser, currentUser?.email);
    });
    return () => {
      unsubscribed();
    };
  }, []);
  const logOut = () => {
    signOut(Auth);
    console.log("logout");
  };

  const LogIn = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };
  const SignUp = (email,password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };
  const GoogleProvider = new GoogleAuthProvider()
  const googleLogin = ()=>{
    return signInWithPopup(Auth, GoogleProvider)

  }

  const share = { loading, setLoading, user, setUser, logOut, LogIn, SignUp ,googleLogin};
  return <AuthContext.Provider value={share}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
