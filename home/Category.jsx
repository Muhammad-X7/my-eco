import "../home/Category.css"

const CategoryGrid = () => {
    return (
        <div className="category bg-gray-50 px-8 py-20 flex items-center justify-center font-sans  lg:-top-48 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
                {/* Laptops Card */}
                <div className="bh labtop bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between md:row-span-2 transition-transform">
                    <div className="flex-grow">
                        <h3 className="tex text-2xl font-semibold text-gray-800">Laptops</h3>
                        <p className="tex text-gray-500 text-base mt-1">245</p>
                    </div>
                    <div className="flex items-end justify-center">
                        <img
                            src="/category-laptops.webp"
                            alt="MacBook Pro laptop"
                            className="img-category max-w-full max-h-full object-cover top-0 md:-top-40 relative"
                        />
                    </div>
                </div>

                {/* Drones Card */}
                <div className="bh drone bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between transition-transform transform">
                    <div className="flex-grow">
                        <h3 className="tex text-xl md:text-2xl font-semibold text-gray-800">Drones</h3>
                        <p className="tex text-gray-500 text-sm md:text-base mt-1">28</p>
                    </div>
                    <div className="mt-8 flex items-end justify-center">
                        <img
                            src="/category-drones-2.webp"
                            alt="DJI Mavic 2 drone"
                            className="img-category max-h-32 w-auto object-contain"
                        />
                    </div>
                </div>

                {/* Container for Smartphones and Gaming cards */}
                <div className="md:col-start-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bh phone bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between transition-transform transform">
                        <div className="flex-grow">
                            <h3 className="tex text-xl font-semibold text-gray-800">Smartphones</h3>
                            <p className="tex text-gray-500 text-sm mt-1">273</p>
                        </div>
                        <div className="flex items-end justify-center">
                            <img
                                src="/category-phones.webp"
                                alt="iPhone 12 Pro Max camera section"
                                className="img-category max-h-96 w-auto object-cover relative top-6"
                            />
                        </div>
                    </div>

                    <div className="bh console bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between transition-transform transform">
                        <div className="flex-grow">
                            <h3 className="tex text-xl font-semibold text-gray-800">Gaming</h3>
                            <p className="tex text-gray-500 text-sm mt-1">75</p>
                        </div>
                        <div className="flex items-end  justify-center">
                            <img
                                src="/category-gaming.webp"
                                alt="PlayStation 5 controller"
                                className="img-category max-h-96 w-auto object-cover relative left sm:left-6"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryGrid;