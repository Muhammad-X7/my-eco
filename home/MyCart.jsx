import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
// FontAwesome icons for increment/decrement quantity buttons

import CartFooter from "../products/CartFooter";
// Footer component for the cart page

import { useCart } from '../products/CreateContext';
// Custom context hook to access cart state and actions

export default function MyCart() {
  // Destructure cart state and actions from context
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate(); // For programmatic navigation

  // Helper function to format prices consistently
  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  // Navigate to checkout page
  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 md:px-6 lg:px-8 py-16">

        {/* Header with page title and Clear Cart button */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Cart</h1>
          {cartItems.length > 0 && (
            <button
              onClick={clearCart}
              className="px-4 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 cursor-pointer transition-colors duration-200 flex items-center space-x-2"
            >
              <img src="/trash-bin.png" alt="Trash-icon" className="w-5" />
              <span>Clear Cart</span>
            </button>
          )}
        </div>

        {/* Empty cart state */}
        {cartItems.length === 0 ? (
          <>
            <div className="bg-gray-100 p-6 rounded-lg flex items-center text-gray-700 text-lg mb-8">
              <img src="/bell.png" alt="Bell-icon" className="w-5 mr-3" />
              <p>Your cart is currently empty.</p>
            </div>
            <Link to="/products">
              <button className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold cursor-pointer rounded-md hover:bg-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75">
                Return to shop
              </button>
            </Link>
          </>
        ) : (
          // Cart items grid layout
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left section: Product list */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border">

                {/* Table headers */}
                <div className="grid grid-cols-12 gap-4 p-4 border-b bg-gray-50 font-semibold text-gray-700">
                  <div className="col-span-3 md:col-span-6">Product</div>
                  <div className="col-span-3 md:col-span-2 text-center pr-20">Quantity</div>
                  <div className="col-span-3 md:col-span-2 text-center">Subtotal</div>
                  <div className="col-span-3 md:col-span-2 text-center">Actions</div>
                </div>

                {/* List of cart items */}
                {cartItems.map((item) => (
                  <div key={item.id} className="grid grid-cols-12 gap-4 p-4 border-b items-center">
                    {/* Product info */}
                    <div className="col-span-6 flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div>
                        <Link
                          to={`/products/${item.id}`}
                          className="font-semibold text-gray-800 hover:text-indigo-600 transition-colors"
                        >
                          {item.name}
                        </Link>
                        <p className="text-sm text-gray-500">{formatPrice(item.price)}</p>
                        {item.categoryOne && (
                          <p className="text-xs text-gray-400">{item.categoryOne}</p>
                        )}
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="col-span-2 flex justify-center">
                      <div className="flex ml-3.5 md:ml-0 items-center border border-gray-200 rounded-md">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-100 transition-colors"
                        >
                          <FontAwesomeIcon icon={faMinus} className="text-xs" />
                        </button>
                        <span className="px-3 py-1 text-sm text-gray-500 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-100 transition-colors"
                        >
                          <FontAwesomeIcon icon={faPlus} className="text-xs" />
                        </button>
                      </div>
                    </div>

                    {/* Subtotal */}
                    <div className="col-span-3 ml-6 md:ml-0 text-center font-semibold text-gray-500">
                      {formatPrice(item.price * item.quantity)}
                    </div>

                    {/* Remove item button */}
                    <div className="col-span-1 text-center">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-red-50 rounded-full transition-colors"
                        title="Remove item"
                      >
                        <img src="/trash-bin.png" alt="Trash-icon" className="w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue shopping button */}
              <div className="flex justify-between items-center mt-6">
                <Link to="/products">
                  <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md cursor-pointer hover:bg-gray-300 transition-colors">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </div>

            {/* Right section: Cart totals */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border sticky top-4">
                <h2 className="text-xl font-bold mb-4 text-zinc-800">Cart totals</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold text-gray-600">{formatPrice(getTotalPrice())}</span>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-semibold text-gray-600">Total</span>
                    <span className="font-bold text-indigo-600">{formatPrice(getTotalPrice())}</span>
                  </div>
                </div>

                {/* Proceed to checkout button */}
                <button
                  onClick={handleCheckout}
                  className="w-full mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold cursor-pointer rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Proceed to checkout
                </button>

                {/* Coupon code input */}
                <div className="mt-6">
                  <h3 className="font-semibold mb-3 text-gray-600">Coupon code</h3>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Coupon code"
                      className="flex-1 px-3 py-2 border border-gray-300 text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 cursor-pointer transition-colors">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
      </main>

      {/* Footer for the cart page */}
      <div>
        <CartFooter />
      </div>
    </div>
  );
}
