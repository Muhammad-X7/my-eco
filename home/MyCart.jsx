import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

import Footer from "../home/Footer"
import Header from "../home/Header"

export default function MyCart({ onClose }) {
  return (
    <div className="fixed inset-0 bg-white z-50 overflow-auto flex flex-col h-auto">

      <Header />
      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 lg:px-8 py-16 flex-grow">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-gray-800">
          Cart
        </h1>

        {/* Your cart is currently empty */}
        <div className="bg-gray-100 p-6 rounded-lg flex items-center text-gray-700 text-lg mb-8">
          <FontAwesomeIcon
            icon={faBell}
            className="mr-4 text-2xl text-gray-600"
          />
          <p>Your cart is currently empty.</p>
        </div>

        {/* Return to shop */}
        <button
          onClick={onClose}
          className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
        >
          Return to shop
        </button>
      </main>
      <div className="bg-black  pb-96 pt-20 top-40 relative" >

      </div>

      <div className="top-0 relative mt-[0px] -mb-88  h-0">
        <Footer />
      </div>
    </div>
  );
}
