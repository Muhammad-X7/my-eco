import { useState } from "react";
import UserLogin from "../home/UserLogin";
import UserRegister from "../home/UserRegister";

export default function AuthModalManager({ onLoginSuccess }) {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    const openLogin = () => {
        setIsLoginOpen(true);
        setIsRegisterOpen(false);
    };

    const openRegister = () => {
        setIsRegisterOpen(true);
        setIsLoginOpen(false);
    };
    const closeModals = () => {
        setIsLoginOpen(false);
        setIsRegisterOpen(false);
    };

    return (
        <>
            <UserLogin
                isOpen={isLoginOpen}
                onClose={closeModals}
                onSwitchToRegister={openRegister}
                onLoginSuccess={onLoginSuccess}
            />

            <UserRegister
                isOpen={isRegisterOpen}
                onClose={closeModals}
                onSwitchToLogin={openLogin}
            />
        </>
    );
}
