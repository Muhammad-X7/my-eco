import "../home/HeroSection.css"
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <div className="bg text-white grid items-center justify-center">
            <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 ">
                <div className="texts w-full text-left mb-8 md:mb-0 top-4 md:-top-30 lg:-top-44 relative z-10">
                    <p className="text-zinc-200 text-center lg:text-left text-lg mb-2">From $999</p>
                    <h1 className="text-4xl md:text-5xl lg-text-6xl text-center lg:text-left font-bold mb-14">iPhone 12 Pro</h1>
                    <div className="flex items-center space-x-4 left-0 sm:left-24 md:left-0 relative">
                        <Link to="/products/7">
                            <button className="btn-hero-sec bg-white text-black font-semibold py-4 px-9 mr-11 rounded-lg cursor-pointer hover:transition-colors">
                                Buy Now
                            </button>
                        </Link>
                        <Link to="https://www.youtube.com/watch?v=KymUT1_YYLQ">
                            <button className="a flex items-center text-zinc-50 lg:text-gray-400 transition-colors cursor-pointer">
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                                </svg>
                                Watch Video
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="width hidden md:flex justify-center">
                    <img src="/home-hero-image.jpg" alt="iPhone 12 Pro" className="max-w-full h-auto object-cover top-14  lg:top-0 relative" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;