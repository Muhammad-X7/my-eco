import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faBagShopping,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import SearchOverlay from "../home/SearchOverlay";
import UserLogin from "../home/UserLogin";
import UserRegister from "../home/UserRegister";

import MyCart from "../home/MyCart";

import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);
  const [isUserLoginOpen, setIsUserLoginOpen] = useState(false);
  const [isUserRegisterOpen, setIsUserRegisterOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigationClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="bg-[#111518] py-6 lg:py-7 top-0 z-50 relative">
      <div className="container mx-auto flex items-center h-16 px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <div className="Logo mr-auto lg:mr-0">
          <h2 className="text-2xl font-bold text-white tracking-wide">
            Gadgets
          </h2>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:block flex-grow">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link
                to="/home"
                onClick={handleNavigationClick}
                className={`font-medium transition duration-200 ${isActiveLink("/") ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                onClick={handleNavigationClick}
                className={`font-medium transition duration-200 ${isActiveLink("/products")
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
                  }`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                onClick={handleNavigationClick}
                className={`font-medium transition duration-200 ${isActiveLink("/about")
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
                  }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                onClick={handleNavigationClick}
                className={`font-medium transition duration-200 ${isActiveLink("/blog")
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
                  }`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={handleNavigationClick}
                className={`font-medium transition duration-200 ${isActiveLink("/contact")
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
                  }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Data Items (Icons) */}
        <div className="hidden lg:flex items-center space-x-6 ml-auto">
          <ul className="flex items-center space-x-6">
            <li>
              <button
                onClick={() => setIsSearchOverlayOpen(true)}
                className="text-white hover:text-gray-400 text-lg duration-200 focus:outline-none"
                aria-label="Search"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </li>
            <li>
              <button
                onClick={() => setIsUserLoginOpen(true)}
                className="text-white hover:text-gray-400 text-lg duration-200 focus:outline-none"
                aria-label="User account"
              >
                <FontAwesomeIcon icon={faUser} />
              </button>
            </li>
            <Link to="/cart">
              <li>
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="text-white hover:text-gray-400 text-lg duration-200 focus:outline-none"
                  aria-label="Shopping Cart"
                >
                  <FontAwesomeIcon icon={faBagShopping} />
                </button>
              </li>
            </Link>
          </ul>
        </div>

        {/* Hamburger/Close Icon for Mobile */}
        <div className="lg:hidden ml-auto">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-gray-400 text-2xl focus:outline-none"
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black shadow-lg py-4 border-t border-gray-800">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link
                to="/home"
                onClick={handleNavigationClick}
                className={`block font-medium py-2 duration-500 ${isActiveLink("/") ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                onClick={handleNavigationClick}
                className={`block font-medium py-2 duration-500 ${isActiveLink("/products")
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
                  }`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                onClick={handleNavigationClick}
                className={`block font-medium py-2 duration-500 ${isActiveLink("/about")
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
                  }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                onClick={handleNavigationClick}
                className={`block font-medium py-2 duration-500 ${isActiveLink("/blog")
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
                  }`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                onClick={handleNavigationClick}
                className={`block font-medium py-2 duration-500 ${isActiveLink("/contact")
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
                  }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Overlays & Modals */}
      <SearchOverlay
        isOpen={isSearchOverlayOpen}
        onClose={() => setIsSearchOverlayOpen(false)}
      />

      <UserLogin
        isOpen={isUserLoginOpen}
        onClose={() => setIsUserLoginOpen(false)}
        onSwitchToRegister={() => {
          setIsUserLoginOpen(false);
          setIsUserRegisterOpen(true);
        }}
      />

      <UserRegister
        isOpen={isUserRegisterOpen}
        onClose={() => setIsUserRegisterOpen(false)}
        onSwitchToLogin={() => {
          setIsUserRegisterOpen(false);
          setIsUserLoginOpen(true);
        }}
      />

      {isCartOpen && <MyCart onClose={() => setIsCartOpen(false)} />}
    </div>
  );
}
