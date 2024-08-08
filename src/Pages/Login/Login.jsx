import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import useAuth from "../../Hooks/useAuth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);
  const [errors, setErrors] = useState({});
  const { LogIn ,setLoading , user,setUser} = useAuth();
  const navigate = useNavigate();
  const resetValue = () => {

    setPassword("");
    setEmail("");
  };
  const validate = () => {
    const errors = {};

    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const validationError = validate();
    if (Object.keys(validationError).length > 0) {
      setErrors(validationError);
    }
    LogIn(email, password)
      .then((res) => {
        setLoading(true);
        setUser(res.user);
        setLoading(false)
        console.log(res.user , "login okey");
        resetValue();
        e.target.reset();
        navigate("/")
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="flex flex-col relative items-center justify-center min-h-screen bg-[#1a1a1a] text-white">
      <Link
        to="/"
        className="syne  uppercase  absolute right-5 bottom-5  text-2xl md:text-3xl lg:text-4xl text-white  "
      >
        Zada
      </Link>

      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-lg shadow-md">
        <h2 className="syne text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({ ...prev, email: "" }));
              }}
              className={` mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:border-amber-600 ${errors.email && "border-red-600"} focus:ring-amber-600 sm:text-sm `}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email}</p>
            )}
          </div>
          <div className=" relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            ></label>
            <div className="relative">
              {" "}
              <input
                id="password"
                type={eye ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors((prev) => ({ ...prev, password: "" }));
                }}
                className={` mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:border-amber-600 ${errors.password && "border-red-600"} focus:ring-amber-600 sm:text-sm `}
              />
              {password.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setEye(!eye);
                  }}
                  className="absolute  inset-y-0 right-0  pr-3 flex items-center text-gray-500"
                >
                  {eye ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              )}
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-red-600">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none  focus:ring-offset-2 focus:ring-amber-500"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center  text-gray-400">
          Don't have an account?{" "}
          <Link to="/register" className="text-amber-600 hover:text-amber-700">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
