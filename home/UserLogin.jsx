import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function UserLogin({ isOpen, onClose, onSwitchToRegister, onLoginSuccess }) {
  const [input, setInput] = useState({ name: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setInput({ name: "", password: "" });
    }
  }, [isOpen]);
  if (!isOpen) return null;

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const matchedUser = users.find(
      (user) =>
        user.name.trim().toLowerCase() === input.name.trim().toLowerCase() &&
        user.password === input.password
    );

    if (matchedUser) {
      toast.success("Logged in successfully!");
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
      onLoginSuccess(matchedUser);
      onClose();
    } else {
      toast.error("Incorrect username or password!");
    }
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.66)] z-[9999] flex items-center justify-center p-4">
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg relative w-full max-w-md mx-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h2 className="text-xl font-semibold mb-6 text-gray-800 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={input.name}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                required
                value={input.password}
                onChange={(e) => setInput({ ...input, password: e.target.value })}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-md font-semibold hover:bg-gray-700 cursor-pointer transition-colors duration-200"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <button onClick={onSwitchToRegister} className="text-blue-600 hover:underline cursor-pointer">
            Create one
          </button>
        </p>
      </div>
    </div>
  );
}
