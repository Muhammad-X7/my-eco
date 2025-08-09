export default function StatsAndCTASection() {
    return (
        <section className="bg-gray-50 py-16 md:py-24 text-center -top-60 md:-top-56 relative">
            <div className="container mx-auto px-4">
                {/* Main Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-20 leading-tight max-w-3xl mx-auto">
                    Quisque Scelerisque Nisi Sodales Duis Nonrisus Vel Imperdiet
                </h2>
                {/* Statistics */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 mb-16">
                    <div className="flex flex-col items-center">
                        <p className="text-purple-700 text-5xl md:text-6xl font-bold mb-6">3,000</p>
                        <p className="text-gray-900 uppercase tracking-wide text-sm font-bold">GADGETS SOLD</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-purple-700 text-5xl md:text-6xl font-bold mb-6">2,500</p>
                        <p className="text-gray-900 uppercase tracking-wide text-sm font-bold">HAPPY CLIENTS</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-purple-700 text-5xl md:text-6xl font-bold mb-6">100%</p>
                        <p className="text-gray-900  uppercase tracking-wide text-sm font-bold">SATISFACTION RATE</p>
                    </div>
                </div>
                {/* Description Paragraph */}
                <p className="text-gray-600 text-lg mb-12  max-w-3xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Felis donec et odio pellentesque diam volutpat. Ullamcorper malesuada proin libero nunc consequat interdum varius.
                </p>
                {/* Call-to-Action Buttons */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                    <button className="w-36 h-20 md:h-full md:w-40 bg-gray-800 hover:bg-gray-950 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-md">
                        Apply Now
                    </button>
                    <button className="bg-transparent border border-gray-300 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-sm">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
}