import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../products/CreateContext';
import "../home/ProductCard.css";

const ProductCard = ({ name, price, categoryOne, categoryTow, image, id }) => {
    const { addToCart, cartItems } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    // Check if the product exists in the cart
    const isInCart = cartItems.some(item => item.id === parseInt(id));

    // Generate category path for linking
    const getCategoryPath = (category) => {
        if (!category) return '#';
        return `/category/${encodeURIComponent(category.toLowerCase().replace(/, /g, '-').replace(/\s/g, '-'))}`;
    };

    // Add product to cart
    const handleAddToCart = (e) => {
        e.preventDefault();
        const product = {
            id: parseInt(id),
            name,
            price: typeof price === 'string' ? parseFloat(price.replace('$', '')) : price,
            image,
            categoryOne,
            categoryTow
        };
        addToCart(product);
        setIsAdded(true);
    };

    // Navigate to cart page
    const handleViewCart = (e) => {
        e.preventDefault();
        window.location.href = '/cart';
    };

    return (
        <div className="overflow-hidden p-4 flex flex-col">
            {/* Product Image */}
            <div className="flex-grow flex items-center justify-center bg-gray-100 rounded-2xl overflow-hidden mb-4">
                <Link to={`/products/${id}`}>
                    <img src={image} alt={name} className="img-card h-full object-cover transition duration-400 cursor-pointer" />
                </Link>
            </div>

            {/* Product Info */}
            <div className="text-left flex flex-col">
                <Link to={`/products/${id}`}>
                    <h3 className="h3-card text-lg font-bold text-gray-950 cursor-pointer">{name}</h3>
                </Link>
                <p className="text-gray-600 font-bold my-2">{price}</p>

                {/* Categories */}
                <div className="flex flex-wrap gap-x-2 text-sm font-medium text-gray-500 mb-4">
                    {categoryOne && (
                        <Link to={getCategoryPath(categoryOne)} className="uppercase tracking-wide hover:underline">
                            {categoryOne}
                        </Link>
                    )}

                    {categoryTow && (
                        <Link to={getCategoryPath(categoryTow)} className="uppercase tracking-wide hover:underline">
                            <span className='-left-1.5 relative'>,</span>{categoryTow}
                        </Link>
                    )}
                    {!categoryOne && !categoryTow && (
                        <span className="text-gray-500">No category</span>
                    )}
                </div>

                {/* Add to Cart / View Cart Button */}
                {(isAdded || isInCart) ? (
                    <button
                        onClick={handleViewCart}
                        className="btn-card w-32 cursor-pointer text-white font-bold py-2 rounded-md bg-green-500 hover:bg-green-600 transition-colors duration-300"
                    >
                        View cart
                    </button>
                ) : (
                    <button
                        onClick={handleAddToCart}
                        className="btn-card w-32 cursor-pointer text-gray-700 hover:text-gray-50 font-bold py-2 rounded-md bg-gray-100 hover:bg-indigo-600 transition-colors duration-300"
                    >
                        Add to cart
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
