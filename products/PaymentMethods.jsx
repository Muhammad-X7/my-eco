import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { toast } from 'react-toastify';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCreditCard,
    faMoneyBill,
    faUniversity,
    faWallet,
    faShieldAlt
} from '@fortawesome/free-solid-svg-icons';

import CartFooter from "../products/CartFooter"
import { useCart } from '../products/CreateContext';

const PaymentMethods = () => {
    const { clearCart } = useCart();
    const [selectedMethod, setSelectedMethod] = useState('');
    const [checkoutData, setCheckoutData] = useState(null);
    const [paymentData, setPaymentData] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardholderName: ''
    });

    // Load request data from localStorage
    useEffect(() => {
        const savedCheckoutData = localStorage.getItem('checkoutData');
        if (savedCheckoutData) {
            setCheckoutData(JSON.parse(savedCheckoutData));
        }
    }, []);

    const paymentMethods = [
        {
            id: 'credit-card',
            name: 'Credit/Debit Card',
            description: 'Pay securely with Visa, Mastercard, or American Express',
            icon: faCreditCard,
            available: true
        },
        {
            id: 'paypal',
            name: 'PayPal',
            description: 'Pay with your PayPal account',
            icon: faMoneyBill,
            available: true
        },
        {
            id: 'bank-transfer',
            name: 'Bank Transfer',
            description: 'Direct bank transfer',
            icon: faUniversity,
            available: false
        },
        {
            id: 'digital-wallet',
            name: 'Digital Wallet',
            description: 'Apple Pay, Google Pay, Samsung Pay',
            icon: faWallet,
            available: false
        }
    ];
    //a
    const handlePaymentInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleCompletePayment = () => {
        if (!selectedMethod) {
            toast.error('Please select a payment method');
            return;
        }

        if (selectedMethod === 'credit-card') {
            const requiredFields = ['cardNumber', 'expiryDate', 'cvv', 'cardholderName'];
            const missingFields = requiredFields.filter(field => !paymentData[field].trim());

            if (missingFields.length > 0) {
                toast.error('Please fill in all payment details');
                return;
            }
        }

        // Handle payment
        const orderData = {
            ...checkoutData,
            paymentMethod: selectedMethod,
            paymentDetails: selectedMethod === 'credit-card' ? paymentData : {},
            paymentDate: new Date().toISOString(),
            orderStatus: 'completed'
        };


        // Save order
        const existingOrders = JSON.parse(localStorage.getItem('userOrders') || '[]');
        existingOrders.push(orderData);
        localStorage.setItem('userOrders', JSON.stringify(existingOrders));

        // Clear temporary order data
        localStorage.removeItem('checkoutData');

        // Clear the cart
        clearCart();

        toast.success('Payment completed successfully! Your order has been placed.');

        // Go back to the Home Page
        window.location.href = '/';
    };

    const goBackToCheckout = () => {
        window.history.back();
    };

    if (!checkoutData) {
        return (
            <div className="bg-gray-50 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">No Checkout Data Found</h2>
                    <p className="text-gray-600 mb-6">Please complete the checkout process first.</p>
                    <button
                        onClick={() => window.location.href = '/checkout'}
                        className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                    >
                        Go to Checkout
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <main className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
                {/* Header */}
                <div className="mb-10">
                    <div className="flex items-center mb-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                            Payment Methods
                        </h1>
                    </div>
                    <p className="text-gray-600 text-lg">
                        Choose your preferred payment method
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Payment Methods List */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-sm border p-6">
                            <h2 className="text-2xl font-bold mb-6 text-gray-800">
                                Available Payment Options
                            </h2>

                            <div className="space-y-4">
                                {paymentMethods.map((method) => (
                                    <div
                                        key={method.id}
                                        className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${method.available
                                            ? selectedMethod === method.id
                                                ? 'border-indigo-500 bg-indigo-50'
                                                : 'border-gray-200 hover:border-indigo-300'
                                            : 'border-gray-200 bg-gray-50 cursor-not-allowed opacity-60'
                                            }`}
                                        onClick={() => method.available && setSelectedMethod(method.id)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${method.available
                                                    ? 'bg-indigo-100 text-indigo-600'
                                                    : 'bg-gray-100 text-gray-400'
                                                    }`}>
                                                    <FontAwesomeIcon icon={method.icon} className="text-xl" />
                                                </div>
                                                <div>
                                                    <h3 className={`font-semibold text-lg ${method.available ? 'text-gray-800' : 'text-gray-500'
                                                        }`}>
                                                        {method.name}
                                                        {!method.available && (
                                                            <span className="ml-2 text-sm text-red-500 font-normal">
                                                                (Coming Soon)
                                                            </span>
                                                        )}
                                                    </h3>
                                                    <p className={`text-sm ${method.available ? 'text-gray-600' : 'text-gray-400'
                                                        }`}>
                                                        {method.description}
                                                    </p>
                                                </div>
                                            </div>

                                            {method.available && selectedMethod === method.id && (
                                                <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                                                    <img src="/check.png" alt="Check-icon" className="w-4 mr-2 top-0.5 relative" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Payment Form */}
                            {selectedMethod && (
                                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                                        Payment Details
                                    </h3>

                                    {selectedMethod === 'credit-card' && (
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Card Number *
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="1234 5678 9012 3456"
                                                    onChange={handlePaymentInputChange}
                                                    className="w-full p-3 border border-gray-300 text-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Expiry Date *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="MM/YY"
                                                        onChange={handlePaymentInputChange}

                                                        className="w-full p-3 border border-gray-300 text-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        CVV *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="123"
                                                        onChange={handlePaymentInputChange}
                                                        className="w-full p-3 border border-gray-300 text-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Cardholder Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="John Doe"
                                                    onChange={handlePaymentInputChange}
                                                    className="w-full p-3 border border-gray-300 text-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {selectedMethod === 'paypal' && (
                                        <div className="text-center py-8">
                                            <div className="mb-4">
                                                <FontAwesomeIcon icon={faMoneyBill} className="text-6xl text-blue-600" />
                                            </div>
                                            <p className="text-gray-600 mb-4">
                                                You will be redirected to PayPal to complete your payment
                                            </p>
                                            <button className="w-50 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer">
                                                Continue with PayPal
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Security Info */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-4">
                            <div className="flex items-center mb-4">
                                <img src="/secured-lock.png" alt="Secured-Lock-icon" className="w-4 mr-2" />
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Secure Payment
                                </h3>
                            </div>

                            <div className="space-y-4 text-sm text-gray-600">
                                <div className="flex items-start">
                                    <img src="/check.png" alt="Check-icon" className="w-4 mr-2 top-0.5 relative" />
                                    <p>SSL encrypted secure connection</p>
                                </div>
                                <div className="flex items-start">
                                    <img src="/check.png" alt="Check-icon" className="w-4 mr-2 top-0.5 relative" />
                                    <p>PCI DSS compliant payment processing</p>
                                </div>
                                <div className="flex items-start">
                                    <img src="/check.png" alt="Check-icon" className="w-4 mr-2 top-0.5 relative" />
                                    <p>Your payment information is never stored</p>
                                </div>
                                <div className="flex items-start">
                                    <img src="/check.png" alt="Check-icon" className="w-4 mr-2 top-0.5 relative" />
                                    <p>24/7 fraud monitoring and protection</p>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                <div className="flex items-center mb-2">
                                    <FontAwesomeIcon icon={faShieldAlt} className="text-blue-600 mr-2" />
                                    <h4 className="font-semibold text-blue-800">Need Help?</h4>
                                </div>
                                <p className="text-sm text-blue-700 mb-2">
                                    Contact our support team if you experience any issues with payment.
                                </p>
                                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                                    Contact Support →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex justify-between items-center">
                    <Link
                        to="/checkout"
                        onClick={goBackToCheckout}
                        className="w-36 py-3 text-center bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                    >
                        Back to Checkout
                    </Link>

                    <button
                        disabled={!selectedMethod}
                        onClick={handleCompletePayment} // ← هنا
                        className={`w-48 md:w-56 py-3 text-center rounded-md font-semibold transition-colors ${selectedMethod
                            ? 'bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                    >
                        <span className="inline-block min-w-[140px]">
                            {selectedMethod ? 'Complete Payment' : 'Select Payment Method'}
                        </span>
                    </button>

                </div>
            </main>
            <div>
                <CartFooter />
            </div>

        </div>
    );
};

export default PaymentMethods;