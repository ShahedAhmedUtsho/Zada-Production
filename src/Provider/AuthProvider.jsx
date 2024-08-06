import { useState } from "react";
import { createContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
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

  const share = { loading, setLoading, user, setUser, logOut, LogIn, SignUp };
  return <AuthContext.Provider value={share}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
