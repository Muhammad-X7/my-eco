import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

export default function UserRegister({ isOpen, onClose, onSwitchToLogin }) {
    const [input, setInput] = useState({ name: "", password: "" }); // Input state for username and password
    const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

    // Reference to main modal element
    const modalRef = useRef(null);

    // Reset input fields when modal opens
    useEffect(() => {
        if (isOpen) {
            setInput({ name: "", password: "" });
        }
    }, [isOpen]);

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target) && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isOpen, onClose]);

    // Handle browser back button to close modal
    useEffect(() => {
        const handlePopState = () => {
            if (isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            window.history.pushState({ userRegisterOpen: true }, '');
            window.addEventListener('popstate', handlePopState);
        }

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [isOpen, onClose]);

    // Close modal on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null; // Don't render if modal is closed

    // Toggle password visibility
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    // Handle form submission for registration
    const handleRegister = (e) => {
        e.preventDefault();
        const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
        const userExists = existingUsers.some((user) => user.name === input.name);

        if (userExists) {
            toast.error("Username is already taken.");
            return;
        }

        const updatedUsers = [...existingUsers, input];
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        toast.success("Account created successfully!");
        onClose();
        onSwitchToLogin(); // Switch to login after successful registration
    };

    // Close modal when clicking backdrop
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-[rgba(0,0,0,0.66)] z-[9999] flex items-center justify-center p-4"
            onClick={handleBackdropClick}
        >
            <div ref={modalRef} className="bg-white p-8 md:p-12 rounded-lg shadow-lg relative w-full max-w-md mx-auto">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
                >
                    <img src="/close-b.png" alt="close-icon" className="w-8 hover:rotate-90 cursor-pointer transition duration-400" />
                </button>

                <h2 className="text-xl font-semibold mb-6 text-gray-800 text-center">
                    Create Account
                </h2>

                {/* Registration form */}
                <form onSubmit={handleRegister}>
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
                                className="absolute inset-y-0 right-0 pr-3 md:pr-20 lg:pr-3 flex items-center text-gray-500 cursor-pointer hover:text-gray-700"
                            >
                                {showPassword ? (
                                    <img src="/eye.png" alt="eye-icon" className="w-5 h-5" />
                                ) : (
                                    <img src="/hidden.png" alt="eye-icon" className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-700 text-white py-3 rounded-md font-semibold hover:bg-blue-600 cursor-pointer transition-colors duration-200"
                    >
                        Sign up
                    </button>
                </form>

                {/* Switch to Login */}
                <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{" "}
                    <button onClick={onSwitchToLogin} className="text-blue-600 hover:underline cursor-pointer">
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
}
