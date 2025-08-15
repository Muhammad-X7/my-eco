import { Link } from "react-router-dom"

import "../home/Footer.css"

export default function Footer() {
    return (
        <footer className="text-gray-300 py-16 md:py-24 lg:py-0 -top-40 md:top-24 lg:-top-56  relative">
            <div className="container mx-auto px-4">
                {/* Main Footer Content Grid */}
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Gadgets Info */}
                    <div>
                        <h3 className="text-white text-3xl font-bold mb-4 flex items-center -top-2 relative">
                            Gadgets
                        </h3>
                        <p className="text-gray-400 mb-6">
                            Cras gravida bibendum dolor eu varius morbi fermentum velit eget vehicula lorem sodales donec quis volutpat orci.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Media Icons/Buttons */}
                            <a href="#" className="w-[56.5px] h-0 md:w-[38.5px] md:h-[38.5px]  bg-white hover:bg-zinc-300 rounded-4xl  flex items-center justify-center text-white transition duration-300">
                                <img src="/icon-facebook.png" alt="icon-facebook" className="w-5" />
                            </a>
                            <a href="#" className="w-[56.5px] h-0 md:w-[38.5px] md:h-[38.5px]  bg-white hover:bg-zinc-300 rounded-4xl  flex items-center justify-center text-white transition duration-300">
                                <img src="/icon-twitter.png" alt="icon-twitter" className="w-5" />
                            </a>
                            <a href="#" className="w-[56.5px] h-0 md:w-[38.5px] md:h-[38.5px]  bg-white hover:bg-zinc-300 rounded-4xl flex items-center justify-center text-white transition duration-300">
                                <img src="/icon-linkedin.png" alt="icon-linkedin" className="w-5" />
                            </a>
                        </div>
                    </div>
                    {/* Column 2: Useful Links */}
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-6">USEFUL LINKS</h3>
                        <ul className="space-y-3">
                            <Link to={"/about-us"}>
                                <li className="about transition duration-300">About Us</li>
                            </Link>

                            <Link to={"/contact-us"}>
                                <li className="about transition duration-300">Contact Us</li>
                            </Link>
                            <Link to={"/products"}>
                                <li className="about transition duration-300">Products</li>
                            </Link>
                            <Link to="/">
                                <li className="about transition duration-300">Login</li>
                            </Link>
                            <Link to="/">
                                <li className="about transition duration-300">Sign Up</li>
                            </Link>
                        </ul>
                    </div>
                    {/* Column 3: Custom Area */}
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-6">CUSTOM AREA</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="about transition duration-300">My Account</a></li>
                            <li><a href="#" className="about transition duration-300">Tracking List</a></li>
                            <li><a href="#" className="about transition duration-300">Privacy Policy</a></li>
                            <Link to="/cart">
                                <li className="about transition duration-300 pb-2">Orders</li>
                            </Link>
                            <Link to="/cart">
                                <li className="about transition duration-300">My Cart</li>
                            </Link>
                        </ul>
                    </div>
                    {/* Column 4: More Information */}
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-6">MORE INFORMATION</h3>
                        <p className="text-gray-400 mb-6">
                            Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus vitae.
                        </p>
                        <div className="flex items-center space-x-2">
                            {/* Payment Method Icons */}
                            <img src="/payment-icons.svg" alt="icon-payment" />
                        </div>
                    </div>
                </div>
                {/* Copyright Section */}
                <div className="py-0 lg:py-10 text-center text-gray-300 text-sm">
                    <p>Copyright © {new Date().getFullYear()} - Gadgets Theme by CreativeThemes</p>
                </div>
            </div>
        </footer>
    );
}