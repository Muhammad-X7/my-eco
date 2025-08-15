export default function ContactInfoCard() {
    return (
        <div className="bg-white flex items-center justify-center p-4">
            <div className="rounded-2xl shadow-2xl max-w-6xl w-full overflow-hidden  -top-20 relative">

                {/* Contact Information Section */}
                <div className="px-8 py-12 bg-gray-50">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

                        {/* Physical Address */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-purple-700 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                                <img src="/map.png" alt="Map-icon" className="w-9 h-9" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Physical Address</h3>
                            <div className="text-gray-600 space-y-1">
                                <p className="text-lg">304 North Cardinal St.</p>
                                <p className="text-lg">Dorchester Center, MA</p>
                                <p className="text-lg">02124</p>
                            </div>
                        </div>

                        {/* Phone Numbers */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                                <img src="/telephone.png" alt="Telephone-icon" className="w-9 h-9" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Phone Numbers</h3>
                            <div className="text-gray-600 space-y-2">
                                <p className="text-lg hover:text-blue-600 cursor-pointer transition-colors">
                                    1-555-123-4567
                                </p>
                                <p className="text-lg hover:text-blue-600 cursor-pointer transition-colors">
                                    1-800-123-4567
                                </p>
                            </div>
                        </div>

                        {/* Email Address */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-purple-700 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                                <img src="/email.png" alt="Email-icon" className="w-9 h-9" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Address</h3>
                            <div className="text-gray-600 space-y-2">
                                <p className="text-lg hover:text-blue-600 cursor-pointer transition-colors">
                                    info@company.com
                                </p>
                                <p className="text-lg hover:text-blue-600 cursor-pointer transition-colors">
                                    contact@company.com
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}