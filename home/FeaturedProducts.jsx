// FeaturedProducts.jsx
import { allProducts } from "../products/ProductsData"
import ProductCard from '../home/ProductCard';
import "../home/FeaturedProducts.css"

import { Link } from "react-router-dom"

const FeaturedProducts = () => {
    return (
        <div className="padding bg-gray-50 p-16 lg:pb-32 -top-28 md:top-48 lg:-top-64 relative">
            <div className="container mx-auto">
                <div className="flex justify-between flex-col md:flex-row items-center text-center md:text-left pt-24 mb-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Products</h2>
                        <p className="text-gray-500 mt-2 mb-10 mx-auto ">Feugiat pretium nibh ipsum consequat commodo.</p>
                    </div>
                    <Link to={"/products"}>
                        <button className="btn-v text-gray-950 text-lg font-medium px-6 py-3 rounded-lg bg-gray-200 cursor-pointer transition-colors duration-300">
                            View All
                        </button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allProducts.map((product, index) => {
                        if (index > 5) return null;
                        return (
                            <ProductCard
                                key={index}
                                id={product.id}
                                name={product.name}
                                price={`$${product.price}`}
                                categoryOne={product.categoryOne}
                                categoryTow={product.categoryTow}
                                image={product.image}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;