import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useCart } from '../products/CreateContext';
import Footer from '../home/Footer';
import CartFooter from "../products/CartFooter"

const CheckoutPage = () => {
    const { cartItems, getTotalPrice } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        country: 'United States (US)',
        streetAddress: '',
        apartment: '',
        city: '',
        zipCode: '',
        phone: '',
        email: '',
        orderNotes: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const formatPrice = (price) => {
        return `$${price.toFixed(2)}`;
    };

    const handleProceedToPayment = (e) => {
        e.preventDefault();

        // Validate required fields
        const requiredFields = ['firstName', 'lastName', 'streetAddress', 'city', 'zipCode', 'phone', 'email'];
        const missingFields = requiredFields.filter(field => !formData[field].trim());

        if (missingFields.length > 0) {
            toast.error('Please fill in all required fields');
            return;
        }

        // Save the invoice data in localStorage for use on the payment page
        localStorage.setItem('checkoutData', JSON.stringify({
            billingDetails: formData,
            cartItems: cartItems,
            totalAmount: getTotalPrice(),
            orderDate: new Date().toISOString()
        }));

        // Navigate to the payment methods page
        navigate('/payment-methods');
    };

    // If the cart is empty, redirect to the cart page
    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-white">
                <main className="container mx-auto px-4 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-800 mb-8">Checkout</h1>
                        <div className="bg-gray-100 p-6 rounded-lg inline-block">
                            <p className="text-gray-700 text-lg mb-4">Your cart is empty.</p>
                            <Link to="/products">
                                <button className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                                    Continue Shopping
                                </button>
                            </Link>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <main className="container mx-auto px-4 py-16">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800">Checkout</h1>
                    <Link to="/cart" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                        <img src="/left-arrow.png" alt="Left-arrow-icon" className="w-4 right-6 top-[21px] relative" />
                        Back to Cart
                    </Link>
                </div>

                <form onSubmit={handleProceedToPayment} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Billing Details */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 text-gray-800">Billing details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First name *"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                    className="p-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last name *"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                    className="p-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                                <div className="md:col-span-2">
                                    <input
                                        type="text"
                                        name="companyName"
                                        placeholder="Company name (optional)"
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                        className="p-3 border border-gray-300 rounded-md w-full text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        className="p-3 border border-gray-300 rounded-md w-full text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    >
                                        <option>United States (US)</option>
                                        <option>Iraq</option>
                                        <option>Saudi Arabia</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2">
                                    <input
                                        type="text"
                                        name="streetAddress"
                                        placeholder="Street address *"
                                        value={formData.streetAddress}
                                        onChange={handleInputChange}
                                        required
                                        className="p-3 border border-gray-300 rounded-md w-full text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <input
                                        type="text"
                                        name="apartment"
                                        placeholder="Apartment, suite, unit, etc. (optional)"
                                        value={formData.apartment}
                                        onChange={handleInputChange}
                                        className="p-3 border border-gray-300 rounded-md w-full text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                </div>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Town / City *"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    required
                                    className="p-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                                <input
                                    type="text"
                                    name="zipCode"
                                    placeholder="ZIP Code *"
                                    value={formData.zipCode}
                                    onChange={handleInputChange}
                                    required
                                    className="p-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone *"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="p-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email address *"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="p-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Additional Information */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6 text-gray-800">Additional information</h2>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Order notes (optional)
                                </label>
                                <textarea
                                    name="orderNotes"
                                    rows="4"
                                    value={formData.orderNotes}
                                    onChange={handleInputChange}
                                    className="p-3 border border-gray-300 text-gray-700 rounded-md w-full focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    placeholder="Notes about your order, e.g. special notes for delivery."
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm border sticky top-4">
                            <h2 className="text-xl font-bold mb-6 text-gray-800">Your order</h2>

                            <div className="space-y-4 mb-6">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex justify-between items-center">
                                        <div className="flex items-center space-x-3">
                                            <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                                            <div>
                                                <p className="font-medium text-sm text-gray-800">{item.name}</p>
                                                <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                            </div>
                                        </div>
                                        <span className="font-semibold text-gray-700">{formatPrice(item.price * item.quantity)}</span>
                                    </div>
                                ))}
                            </div>

                            <hr className="border-gray-200 mb-4" />

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-semibold text-gray-600">{formatPrice(getTotalPrice())}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="text-gray-600">Free</span>
                                </div>
                                <hr className="border-gray-200" />
                                <div className="flex justify-between text-lg">
                                    <span className="font-bold text-gray-700">Total</span>
                                    <span className="font-bold text-indigo-600 ">{formatPrice(getTotalPrice())}</span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md cursor-pointer  hover:bg-indigo-700 transition-colors"
                            >
                                Proceed to Payment
                            </button>
                        </div>
                    </div>
                </form>
            </main>

            <div>
                <CartFooter />
            </div>
        </div>
    );
};

export default CheckoutPage;