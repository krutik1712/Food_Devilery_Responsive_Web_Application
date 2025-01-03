import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

export default function LoginPopUp({ setShowLogin, setIsLoggedIn, navigate }) {
    
    const [currentState, setCurrentState] = useState("Sign Up");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validatePassword = (password) => {
        const passwordWithoutSpaces = password.replace(/\s+/g, '');
        if (passwordWithoutSpaces.length < 8) return "Password must be at least 8 characters.";
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(passwordWithoutSpaces)) return "Password must contain at least one special character.";
        if (!/\d/.test(passwordWithoutSpaces)) return "Password must contain at least one number.";
        if (!/(?=.*[a-z])(?=.*[A-Z])/.test(passwordWithoutSpaces)) return "Password must contain at least one uppercase and one lowercase letter.";
        return "";
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value.replace(/\s+/g, '');
        setPassword(newPassword);
        const error = validatePassword(newPassword);
        setPasswordError(error);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentState === "Sign Up") {
            if (passwordError) {
                setError(passwordError);
                return;
            }

            if (password !== confirmPassword) {
                setError("Passwords do not match");
                return;
            }

            setError("");
            alert("Sign-Up successful");
            setCurrentState("Login");
            return;
        }

        if (currentState === "Login") {
            setError("");
            setIsLoggedIn(true);
            setShowLogin(false);
            alert("Login successful");
            navigate("/");
        }
    };

    const toggleState = () => {
        setCurrentState((prevState) => (prevState === "Sign Up" ? "Login" : "Sign Up"));
        setPassword("");
        setConfirmPassword("");
        setPasswordError("");
        setError("");
    };

    return (
        <div className="fixed inset-0 z-[60] bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md max-h-full relative overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl md:text-2xl font-bold">{currentState}</h2>
                    <button
                        className="text-gray-500 hover:text-gray-800 text-2xl"
                        onClick={() => setShowLogin(false)}
                        aria-label="Close"
                    >
                        <RxCross1 />
                    </button>
                </div>
                <form onSubmit={handleSubmit}>

                    {/* Form Fields */}
                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Username"
                            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#ff4929]"
                            required
                        />
                        {currentState === "Sign Up" && (
                            <input
                                type="email"
                                placeholder="Email"
                                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#ff4929]"
                                required
                            />
                        )}

                        {/* Password Fields */}
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#ff4929]"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-3 text-sm text-[#ff4929] font-semibold cursor-pointer"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        {/* Password Error Message */}
                        {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}

                        {/* Conditionally Render Confirm Password */}
                        {currentState === "Sign Up" && !passwordError && password && (
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm Password"
                                    className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#ff4929]"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-3 text-sm text-[#ff4929] font-semibold cursor-pointer"
                                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                                >
                                    {showConfirmPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        )}

                        {/* Error Message */}
                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-[#ff4929] text-white font-semibold py-3 rounded-md hover:bg-[#e84328] transition duration-300"
                        >
                            {currentState === "Sign Up" ? "Create Account" : "Login"}
                        </button>
                    </div>
                </form>

                {/* Toggle Login/Sign-Up */}
                <p className="text-center mt-4 text-sm text-gray-600">
                    {currentState === "Sign Up"
                        ? "Already have an account?"
                        : "Don't have an account?"}
                    <button
                        type="button"
                        className="text-[#ff4929] font-semibold ml-1 hover:underline"
                        onClick={toggleState}
                    >
                        {currentState === "Sign Up" ? "Login" : "Sign Up"}
                    </button>
                </p>
            </div>
        </div>
    );
}