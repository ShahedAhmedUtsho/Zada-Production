import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAuth = () => {
  const a = useContext(AuthContext);

  return a;
};
export default useAuth;
