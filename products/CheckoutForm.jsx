const CheckoutForm = () => {
    return (
        <div className="lg:col-span-2 space-y-8">
            {/* Billing details */}
            <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Billing details</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="First name *"
                        className="p-3 border border-gray-300 rounded-md text-gray-700"
                    />
                    <input
                        type="text"
                        placeholder="Last name *"
                        className="p-3 border border-gray-300 rounded-md text-gray-700"
                    />
                    <div className="md:col-span-2">
                        <input
                            type="text"
                            placeholder="Company name (optional)"
                            className="p-3 border border-gray-300 rounded-md w-full text-gray-700"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <select className="p-3 border border-gray-300 rounded-md w-full text-gray-700">
                            <option>United States (US)</option>
                            <option>Iraq</option>
                            <option>Saudi Arabia</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <input
                            type="text"
                            placeholder="Street address *"
                            className="p-3 border border-gray-300 rounded-md w-full text-gray-700"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <input
                            type="text"
                            placeholder="Apartment, suite, unit, etc. (optional)"
                            className="p-3 border border-gray-300 rounded-md w-full text-gray-700"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <input
                            type="text"
                            placeholder="Town / City *"
                            className="p-3 border border-gray-300 rounded-md w-full text-gray-700"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <input
                            type="text"
                            placeholder="ZIP Code *"
                            className="p-3 border border-gray-300 rounded-md w-full text-gray-700"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <input
                            type="tel"
                            placeholder="Phone *"
                            className="p-3 border border-gray-300 rounded-md w-full text-gray-700"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <input
                            type="email"
                            placeholder="Email address *"
                            className="p-3 border border-gray-300 rounded-md w-full text-gray-700"
                        />
                    </div>
                </form>
            </div>

            {/* Additional information */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Additional information</h2>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Order notes (optional)
                    </label>
                    <textarea
                        rows="4"
                        className="p-3 border border-gray-300 text-gray-700 rounded-md w-full"
                        placeholder="Notes about your order, e.g. special notes for delivery."
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;