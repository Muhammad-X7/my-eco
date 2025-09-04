import { Link } from "react-router-dom";
import "./IpadProSection.css"

export default function IpadProSection() {
    return (
        <section className="bg-gray-950 text-white py-16 md:py-24 lg:py-32 overflow-hidden -top-30 md:top-44 lg:-top-70 relative">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between ">

                <div className="text-left w-full lg:w-1/2 md:px-24 lg:px-50  lg:pl-16 order-last mb-12 lg:mb-0 left-5 md:-left-96 lg:left-8 relative z-20 ">
                    <p className="text-gray-400  text-base md:text-lg lg:text-xl mb-2">From $1099</p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl w-64 lg:w-3xl  lg:text-7xl font-bold mb-6">iPad Pro</h2>

                    <p className="text-gray-300 text-sm md:text-base lg:text-lg sm:-left-20 md:left-0 mb-4 max-w-md lg:mx-0 mx-auto relative">
                        Libero nunc consequat interdum varius sit amet mattis vulputate.
                    </p>
                    <p className="text-gray-300 text-sm md:text-base lg:text-lg mb-8 max-w-md lg:mx-0 mx-auto sm:-left-20 md:left-0 relative">
                        Ultricies mieget mauris pharetra
                    </p>
                    <Link to="/products/8">
                        <button className="btn-ip bg-white text-gray-900 px-6 py-2 md:px-8 md:py-3 cursor-pointer rounded-lg font-semibold transition duration-300 shadow-md text-sm md:text-base outline-none">
                            Buy Now
                        </button>
                    </Link>
                </div>

                <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center lg:justify-start pb-16 pt-8 ">
                    <img
                        src='/home-page-cta-ipad.webp'
                        alt="iPad Pro"
                        className="image-ip w-full max-w-2xs sm:max-w-sm lg:max-w-3xl h-auto  object-cover md:-left-48 lg:left-5 relative"
                        loading="lazy"
                    />
                    {/* Floating "Super Powerful Chip" Card */}
                    <div className="sup hidden md:block absolute bg-zinc-800 opacity-75 backdrop-blur-sm rounded-lg p-3 md:p-4 text-xs md:text-sm max-w-xs left-1/2 transform -translate-x-1/2 top-1/3 md:left-1/3 md:top-64 lg:left-1/3 lg:top-96">
                        <p className="font-semibold mb-1 text-sm md:text-base">Super Powerful Chip</p>
                        <p className="text-xs md:text-sm">Pellentesque pulvinar habitant morbi tristique maecenas.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}