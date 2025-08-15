import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import SearchOverlay from "../home/SearchOverlay";
import UserLogin from "../home/UserLogin";
import UserRegister from "../home/UserRegister";
import { useCart } from '../products/CreateContext';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);
  const [isUserLoginOpen, setIsUserLoginOpen] = useState(false);
  const [isUserRegisterOpen, setIsUserRegisterOpen] = useState(false);

  const { closeCart, getTotalItems } = useCart();
  const location = useLocation();

  // مرجع للعنصر الرئيسي للهيدر
  const headerRef = useRef(null);

  // إغلاق جميع الـ overlays عند تغيير المسار
  useEffect(() => {
    closeCart();
    setIsMobileMenuOpen(false);
    setIsSearchOverlayOpen(false);
    setIsUserLoginOpen(false);
    setIsUserRegisterOpen(false);
  }, [location.pathname, closeCart]);

  // إضافة وإزالة event listener للضغط خارج القائمة
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target) && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // معالجة زر العودة في المتصفح
  useEffect(() => {
    const handlePopState = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      // إضافة state جديد إلى التاريخ عندما تفتح القائمة
      window.history.pushState({ mobileMenuOpen: true }, '');
      window.addEventListener('popstate', handlePopState);
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isMobileMenuOpen]);

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
    <div ref={headerRef} className="bg-[#111518] py-6 lg:py-7 top-0 z-50 relative">
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
                to="/"
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
                className={`font-medium transition duration-200 ${isActiveLink("/about-us")
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
                to="/contact-us"
                onClick={handleNavigationClick}
                className={`font-medium transition duration-200 ${isActiveLink("/contact-us")
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
                className="text-white hover:text-gray-400 text-lg duration-200 cursor-pointer focus:outline-none"
                aria-label="Search"
              >
                <img src="/search.png" alt="search-icon" className="w-7 left-1.5 top-1 relative" />
              </button>
            </li>
            <li>
              <button
                onClick={() => setIsUserLoginOpen(true)}
                className="text-white hover:text-gray-400 text-lg duration-200 cursor-pointer focus:outline-none"
                aria-label="User account"
              >
                <img src="/user.png" alt="user-icon" className="w-5 left-1.5 top-1 relative" />
              </button>
            </li>
            <li className="relative">
              <Link
                to="/cart"
                className="text-white hover:text-gray-400 text-lg duration-200 focus:outline-none relative inline-block"
                aria-label="Shopping Cart"
              >
                <img src="/shopping-bags.png" alt="shopping-icon" className="w-6 left-1.5 top-0.5 relative" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2.5 -right-5 bg-indigo-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center min-w-[20px] font-medium">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>

        {/* Hamburger/Close Icon for Mobile */}
        <div className="lg:hidden ml-auto">
          {isMobileMenuOpen ? (
            <button onClick={toggleMobileMenu} className="cursor-pointer">
              <img src="/close.png" alt="close-icon" className="w-6 left-1.5 top-1 hover:rotate-90 transition duration-400 relative" />
            </button>
          ) : (
            <button onClick={toggleMobileMenu} className="cursor-pointer">
              <img src="/menu.png" alt="menu-icon" className="w-6 left-1.5 top-1 relative" />
            </button>
          )}
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black shadow-lg py-4 border-t border-gray-800">
            <ul className="flex flex-col items-center space-y-4">
              <li>
                <Link
                  to="/"
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
                  className={`block font-medium py-2 duration-500 ${isActiveLink("/about-us")
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
                  className={`block font-medium py-2 duration-500 ${isActiveLink("/contact-us")
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                    }`}
                >
                  Contact Us
                </Link>
              </li>

              {/* Search Button for Mobile */}
              <li>
                <button
                  onClick={() => {
                    setIsSearchOverlayOpen(true);
                    handleNavigationClick();
                  }}
                  className="text-gray-400 hover:text-white cursor-pointer font-medium py-2 flex items-center space-x-2 duration-500"
                >
                  <img src="/search.png" alt="search-icon" className="w-6" />
                  <span>Search</span>
                </button>
              </li>

              {/* Login Button for Mobile */}
              <li>
                <button
                  onClick={() => {
                    setIsUserLoginOpen(true);
                    handleNavigationClick();
                  }}
                  className="text-gray-400 hover:text-white font-medium py-2 flex items-center cursor-pointer space-x-2 duration-500"
                >
                  <img src="/user.png" alt="user-icon" className="w-4" />
                  <span>Login</span>
                </button>
              </li>

              {/* Cart Link for Mobile */}
              <li className="relative">
                <Link
                  to="/cart"
                  onClick={handleNavigationClick}
                  className="text-gray-400 hover:text-white font-medium py-2 flex items-center space-x-2 duration-500"
                >
                  <div className="relative">
                    <img src="/shopping-bags.png" alt="shopping-icon" className="w-5" />
                    {getTotalItems() > 0 && (
                      <span className="absolute -top-5 lg:-top-2 right-8 md:right-20 lg:-right-2  bg-indigo-700 text-white rounded-full h-0 w-15 md:h-4 md:w-4 flex items-center justify-center text-[30px] md:text-[10px] font-medium">
                        {getTotalItems()}
                      </span>
                    )}
                  </div>
                  <span>Cart</span>
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

      </div>
    </div>
  );
}