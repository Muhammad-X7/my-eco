import { Link } from 'react-router-dom';

// OrderSummary component displays the order summary on checkout page
// It receives `cartItems` and `getTotalPrice` from the parent component
const OrderSummary = ({ cartItems, getTotalPrice }) => {
    // Helper function to format price as USD
    const formatPrice = (price) => {
        return `$${price.toFixed(2)}`;
    };

    return (
        <div className="lg:col-span-1">
            {/* Container for order summary */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border sticky top-4">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Your order</h2>

                {/* List of products in cart */}
                <div className="border-b border-gray-200 mb-4 pb-4">
                    {cartItems.map(item => (
                        <div key={item.id} className="flex justify-between items-center mb-2">
                            {/* Product name and quantity */}
                            <span className="text-gray-700 font-medium">
                                {item.name} x {item.quantity}
                            </span>
                            {/* Product subtotal */}
                            <span className="font-semibold text-gray-800">
                                {formatPrice(item.price * item.quantity)}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Total and subtotal */}
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

                {/* Coupon input */}
                <div className="mt-6">
                    <h3 className="font-semibold mb-3 text-gray-700">Coupon code</h3>
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            placeholder="Coupon code"
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
                            Apply
                        </button>
                    </div>
                </div>

                {/* Payment methods section */}
                <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-gray-700">Payment methods</h3>
                    </div>
                </div>

                {/* Button to go to payment methods page */}
                <Link
                    to="/payment-methods"
                    className="w-full mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors block text-center"
                >
                    Select Payment Method
                </Link>

                {/* Privacy notice */}
                <div className="mt-4 text-sm text-gray-600">
                    <p>Your personal data will be used to process your order...</p>
                    <a href="#" className="text-indigo-600 hover:underline">privacy policy.</a>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
