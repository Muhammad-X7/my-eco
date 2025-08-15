// CartPage.jsx - صفحة السلة المنفصلة
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faTrash, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import { useCart } from '../products/CreateContext';

export default function CartPage() {
    const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

    const formatPrice = (price) => {
        return `$${price.toFixed(2)}`;
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Main Content */}
            <main className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Cart
                    </h1>
                    {cartItems.length > 0 && (
                        <button
                            onClick={clearCart}
                            className="px-4 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition-colors duration-200 flex items-center space-x-2"
                        >
                            <FontAwesomeIcon icon={faTrash} className="text-sm" />
                            <span>Clear Cart</span>
                        </button>
                    )}
                </div>

                {cartItems.length === 0 ? (
                    // عربة فارغة
                    <>
                        <div className="bg-gray-100 p-6 rounded-lg flex items-center text-gray-700 text-lg mb-8">
                            <FontAwesomeIcon
                                icon={faBell}
                                className="mr-4 text-2xl text-gray-600"
                            />
                            <p>Your cart is currently empty.</p>
                        </div>

                        <Link to="/products">
                            <button className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75">
                                Return to shop
                            </button>
                        </Link>
                    </>
                ) : (
                    // عربة تحتوي على منتجات
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* قائمة المنتجات */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-lg shadow-sm border">
                                {/* Header */}
                                <div className="grid grid-cols-12 gap-4 p-4 border-b bg-gray-50 font-semibold text-gray-700">
                                    <div className="col-span-6">Product</div>
                                    <div className="col-span-2 text-center">Quantity</div>
                                    <div className="col-span-2 text-center">Subtotal</div>
                                    <div className="col-span-2 text-center">Actions</div>
                                </div>

                                {/* منتجات السلة */}
                                {cartItems.map((item) => (
                                    <div key={item.id} className="grid grid-cols-12 gap-4 p-4 border-b items-center">
                                        {/* معلومات المنتج */}
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

                                        {/* الكمية */}
                                        <div className="col-span-2 flex justify-center">
                                            <div className="flex items-center border border-gray-200 rounded-md">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
                                                >
                                                    <FontAwesomeIcon icon={faMinus} className="text-xs" />
                                                </button>
                                                <span className="px-3 py-1 text-sm font-medium">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
                                                >
                                                    <FontAwesomeIcon icon={faPlus} className="text-xs" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* المجموع الفرعي */}
                                        <div className="col-span-2 text-center font-semibold">
                                            {formatPrice(item.price * item.quantity)}
                                        </div>

                                        {/* إجراءات */}
                                        <div className="col-span-2 text-center">
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="w-8 h-8 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                                title="Remove item"
                                            >
                                                <FontAwesomeIcon icon={faTrash} className="text-sm" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* أزرار الإجراءات */}
                            <div className="flex justify-between items-center mt-6">
                                <Link to="/products">
                                    <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
                                        Continue Shopping
                                    </button>
                                </Link>

                                {/* Update Cart Button */}
                                <div className="flex items-center space-x-4">
                                    <input
                                        type="text"
                                        placeholder="Coupon code"
                                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                    <button className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
                                        Apply coupon
                                    </button>
                                    <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
                                        Update cart
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* ملخص السلة */}
                        <div className="lg:col-span-1">
                            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border sticky top-4">
                                <h2 className="text-xl font-bold mb-4 ">Cart totals</h2>

                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Subtotal</span>
                                        <span className="font-semibold">{formatPrice(getTotalPrice())}</span>
                                    </div>

                                    <hr className="border-gray-200" />

                                    <div className="flex justify-between items-center text-lg">
                                        <span className="font-semibold">Total</span>
                                        <span className="font-bold text-indigo-600">{formatPrice(getTotalPrice())}</span>
                                    </div>
                                </div>

                                <button className="w-full mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors">
                                    Proceed to checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}