import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { updateProfile } from "firebase/auth";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const { SignUp, setLoading, setUser, logOut } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [eye, setEye] = useState(false);

  const resetValue = () => {
    setUsername("");
    setPassword("");
    setEmail("");
  };

  const validate = () => {
    const errors = {};
    if (!username) {
      errors.username = "Username is required";
    }
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

  const handleRegister = (e) => {
    e.preventDefault();
    const validationError = validate();
    if (Object.keys(validationError).length > 0) {
      setErrors(validationError);
      return;
    }

    logOut();
    setLoading(true);

    SignUp(email, password)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: username,
        });
        return user;
      })
      .then((user) => {
        console.log(user);
        setUser(user);
        resetValue();
        e.target.reset();
        const userData = {
          name: username,
          email,
          uid: user.uid,
          phone: "",
          address: "",
          isAdmin: false,
        };
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/register`, userData)
          .then((res) => {
            console.log("mongodb good", res.data);
            navigate("/login");
          })
          .catch((err) => {
            console.log(err.message, "mongodb failed");
          });
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center relative justify-center min-h-screen bg-[#1a1a1a] text-white">
      <Link
        to="/"
        className="syne absolute right-5 bottom-5 text-2xl md:text-3xl lg:text-4xl text-white"
      >
        Zada
      </Link>
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-lg shadow-md">
        <h2 className="syne text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          Register
        </h2>
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-300"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setErrors((prev) => ({ ...prev, username: "" }));
              }}
              className={`mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:border-amber-600 ${errors.username ? "border-red-600" : ""} focus:ring-amber-600 sm:text-sm`}
            />
            {errors.username && (
              <p className="mt-1 text-xs text-red-600">{errors.username}</p>
            )}
          </div>

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
              className={`mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:border-amber-600 ${errors.email ? "border-red-600" : ""} focus:ring-amber-600 sm:text-sm`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={eye ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors((prev) => ({ ...prev, password: "" }));
                }}
                className={`mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:border-amber-600 ${errors.password ? "border-red-600" : ""} focus:ring-amber-600 sm:text-sm`}
              />
              {password.length > 0 && (
                <button
                  type="button"
                  onClick={() => setEye(!eye)}
                  className="absolute inset-y-0 right-0 top-0 pr-3 flex items-center text-gray-500"
                >
                  {eye ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              )}
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-amber-600 hover:text-amber-700">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
