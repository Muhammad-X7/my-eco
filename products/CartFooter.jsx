import { Link } from "react-router-dom"

export default function CartFooter() {
    return (
        <footer className="bg-[#111518] text-gray-300 py-12 md:py-16">
            <div className="container mx-auto px-4">
                {/* Main Footer Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
                    {/* Column 1: Gadgets Info */}
                    <div>
                        <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 flex items-center">
                            Gadgets
                        </h3>
                        <p className="text-gray-400 mb-6 text-sm md:text-base">
                            Cras gravida bibendum dolor eu varius morbi fermentum velit eget vehicula lorem sodales donec quis volutpat orci.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Media Icons/Buttons */}
                            <a href="#" className="w-10 h-10 bg-white hover:bg-zinc-300 rounded-full flex items-center justify-center transition duration-300">
                                <img src="/icon-facebook.png" alt="icon-facebook" className="w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white hover:bg-zinc-300 rounded-full flex items-center justify-center transition duration-300">
                                <img src="/icon-twitter.png" alt="icon-twitter" className="w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white hover:bg-zinc-300 rounded-full flex items-center justify-center transition duration-300">
                                <img src="/icon-linkedin.png" alt="icon-linkedin" className="w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Useful Links */}
                    <div>
                        <h3 className="text-white text-lg md:text-xl font-semibold mb-4 md:mb-6">USEFUL LINKS</h3>
                        <ul className="space-y-2 md:space-y-3">
                            <Link to="/about-us">
                                <li className="text-gray-400 hover:text-white transition duration-300 text-sm md:text-base">About Us</li>
                            </Link>
                            <Link to="/contact-us">
                                <li className="text-gray-400 hover:text-white transition duration-300 text-sm md:text-base">Contact Us</li>
                            </Link>
                            <Link to="/products">
                                <li className="text-gray-400 hover:text-white transition duration-300 text-sm md:text-base">Products</li>
                            </Link>
                            <Link to="/">
                                <li className="text-gray-400 hover:text-white transition duration-300 text-sm md:text-base">Login</li>
                            </Link>
                            <Link to="/">
                                <li className="text-gray-400 hover:text-white transition duration-300 text-sm md:text-base">Sign Up</li>
                            </Link>
                        </ul>
                    </div>

                    {/* Column 3: Custom Area */}
                    <div>
                        <h3 className="text-white text-lg md:text-xl font-semibold mb-4 md:mb-6">CUSTOM AREA</h3>
                        <ul className="space-y-2 md:space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 text-sm md:text-base">My Account</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 text-sm md:text-base">Tracking List</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 text-sm md:text-base">Privacy Policy</a></li>
                            <Link to="/cart">
                                <li className="text-gray-400 hover:text-white transition duration-300 text-sm md:text-base">Orders</li>
                            </Link>
                            <Link to="/cart">
                                <li className="text-gray-400 hover:text-white transition duration-300 text-sm md:text-base">My Cart</li>
                            </Link>
                        </ul>
                    </div>

                    {/* Column 4: More Information */}
                    <div>
                        <h3 className="text-white text-lg md:text-xl font-semibold mb-4 md:mb-6">MORE INFORMATION</h3>
                        <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
                            Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus vitae.
                        </p>
                        <div className="flex items-center space-x-2">
                            {/* Payment Method Icons */}
                            <img src="/payment-icons.svg" alt="icon-payment" className="max-w-full h-auto" />
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="pt-8 text-center text-gray-400 text-xs md:text-sm">
                    <p>Copyright © {new Date().getFullYear()} - Gadgets Theme by CreativeThemes</p>
                </div>
            </div>
        </footer>
    );
}