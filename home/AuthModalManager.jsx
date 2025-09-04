import { useState } from "react";
import UserLogin from "../home/UserLogin";
import UserRegister from "../home/UserRegister";

/**
 * AuthModalManager Component
 * --------------------------
 * Manages the state of authentication modals (Login & Register).
 * Ensures that only one modal is open at a time and allows switching between them.
 *
 * Props:
 * - onLoginSuccess: function called when login is successful
 */
export default function AuthModalManager({ onLoginSuccess }) {
    // State for tracking if the Login modal is open
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    // State for tracking if the Register modal is open
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    // Open Login modal and close Register modal if it's open
    const openLogin = () => {
        setIsLoginOpen(true);
        setIsRegisterOpen(false);
    };

    // Open Register modal and close Login modal if it's open
    const openRegister = () => {
        setIsRegisterOpen(true);
        setIsLoginOpen(false);
    };

    // Close both modals
    const closeModals = () => {
        setIsLoginOpen(false);
        setIsRegisterOpen(false);
    };

    return (
        <>
            {/* Login Modal */}
            <UserLogin
                isOpen={isLoginOpen}                // Controls visibility
                onClose={closeModals}               // Closes modal
                onSwitchToRegister={openRegister}   // Switch to Register modal
                onLoginSuccess={onLoginSuccess}     // Callback on successful login
            />

            {/* Register Modal */}
            <UserRegister
                isOpen={isRegisterOpen}             // Controls visibility
                onClose={closeModals}               // Closes modal
                onSwitchToLogin={openLogin}         // Switch to Login modal
            />
        </>
    );
}
