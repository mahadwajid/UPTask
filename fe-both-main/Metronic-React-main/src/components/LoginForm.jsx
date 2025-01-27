import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const request = {
        username,
        password,
      };
      const { data: token } = await axios.post(
        "https://fast-api-server-livid.vercel.app/login",
        request
      );
      const res = await axios.post(
        "https://fast-api-server-livid.vercel.app/users/get_current_user",
        token
      );
      if (res.status === 200) {
        setLoading(false);
        console.log("Success");
        console.log(res.data);
        localStorage.setItem("User", res.data);
        navigate("/");
      }
    } catch (err) {
      setLoading(false);
      setError("An error occured");
      console.log(err.message);
    }
  };
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="space-y-6">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">
          Sign in
        </h3>
        <div>
          <label
            htmlFor="username"
            className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
          >
            Username
          </label>
          <input
            name="username"
            id="username"
            placeholder="john123"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required=""
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
          >
            Your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required=""
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <div className="text-sm ml-3">
              <label
                htmlFor="remember"
                className="font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
          </div>
          <a
            href="#"
            className="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500"
          >
            Lost Password?
          </a>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {loading ? "Loading..." : "Login to your account"}
        </button>
        {error && <p className="text-red-500">{error}</p>}
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?{" "}
          <a
            href="#"
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Create account
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
