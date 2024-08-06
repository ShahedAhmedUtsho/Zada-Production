import { useState } from "react";
import { createContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import Auth from "../Firebase/firebase.config";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
      console.dir(currentUser);
      setLoading(false);
    });
    console.dir(onAuthStateChanged);
    return unsubscribed();
  }, []);

  const share = { loading, setLoading, user, setUser };
  return <AuthContext.Provider value={share}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
