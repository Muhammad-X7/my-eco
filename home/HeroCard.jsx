import { Link } from "react-router-dom";

import "../home/HeroCard.css";

export default function HeroCard() {
  return (
    // Main hero container with flex centering and responsive padding
    <div className="hero flex items-center justify-center bg-gray-50 px-4 py-24 md:py-0 my-0 md:my-28 lg:my-0 md:top-80 lg:-top-60 relative z-20">

      <div className="content-hero bg-gradient-to-t lg:bg-gradient-to-bl from-indigo-600 to-black rounded-2xl shadow-3xl px-16 lg:px-36 py-10 flex flex-col md:flex-row items-center justify-center lg:justify-betweenw h-auto lg:h-96 mx-auto">

        {/* Text section: title, description, and CTA buttons */}
        <div className="text-white text-center md:text-left mb-6 lg:mb-0 flex-1 right-0 lg:right-20 relative">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Oculus VR</h2>
          {/* Product title */}

          <p className="text-lg  mb-9 max-w-md mx-auto lg:mx-0">
            Ullamcorper malesuada proin libero nunc consequat interdum varius consequat mauris nunc congue nisi vitae.
          </p>
          {/* Short product description */}

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Call-to-action buttons */}

            <Link to="/products/12">
              <button className="btn-hero bg-white cursor-pointer  text-indigo-950 font-semibold py-3 px-6 rounded-lg transition duration-300">
                Buy Now
              </button>
            </Link>
            {/* "Buy Now" button linking to the product page */}

            <Link to="https://www.youtube.com/watch?v=aNTBGLqVJmk">
              <button className="hero-btn bg-transparent border cursor-pointer border-transparent text-white opacity-70 font-semibold py-3 px-6 mx-auto rounded-lg transition duration-400 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                </svg>
                Watch Video
              </button>
            </Link>
            {/* "Watch Video" button linking to YouTube with a play icon */}
          </div>
        </div>

        {/* Image section */}
        <div className="flex-shrink-0 mt-6 lg:mt-0 left-0 lg:left-16 relative">
          <img
            src='/oculus-img.webp'
            alt="Oculus VR Headset"
            className="w-64 md:w-80 lg:full h-auto object-contain"
            loading="lazy"
          />
          {/* Product image with lazy loading for better performance */}
        </div>
      </div>
    </div>
  );
}
