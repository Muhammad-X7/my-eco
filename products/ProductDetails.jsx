// Import React hooks and necessary utilities
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { allProducts, getFullDescription } from '../products/ProductsData';
import { toast } from "react-toastify";
import { useCart } from '../products/CreateContext';

import Footer from "../home/Footer";
import "../products/ProductDetails.css";

// Helper function to generate URL-friendly path for categories
const getCategoryPath = (category) => {
    if (!category) return '#'; // Return default if category is missing
    // Convert category name to lowercase, replace spaces and commas with dashes
    return `/category/${encodeURIComponent(category.toLowerCase().replace(/, /g, '-').replace(/\s/g, '-'))}`;
};

// Component for a single related product card
export const RelatedProductCard = ({ product, onAddToCart }) => {
    const { categoryOne, categoryTow } = product;
    const [cardQuantity] = useState(1); // Default quantity is 1
    const [isAdded, setIsAdded] = useState(false); // Track if product is added to cart
    const navigate = useNavigate();

    // Function to handle Add to Cart button
    const handleAddClick = () => {
        if (isAdded) {
            // Navigate to cart if already added
            navigate('/cart');
            return;
        }

        // Add product to cart according to cardQuantity
        for (let i = 0; i < cardQuantity; i++) {
            const productToAdd = {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                categoryOne: product.categoryOne,
                categoryTow: product.categoryTow,
                quantity: 1
            };
            onAddToCart(productToAdd);
        }
        setIsAdded(true); // Update state
    };

    return (
        <div className="flex flex-col items-center text-center pb-6">
            {/* Product Image */}
            <div className="flex items-center justify-center h-full w-64 mx-auto ">
                <Link to={`/products/${product.id}`} className="block mb-4 ">
                    <img src={product.image} alt={product.name} className="rounded-lg max-h-full max-w-full object-cover" />
                </Link>
            </div>

            {/* Product Info */}
            <div className="text-left w-full mt-2">
                <Link to={`/products/${product.id}`} className="pro-h3 text-zinc-900 transition-colors duration-300">
                    <h3 className="text-lg font-medium">{product.name}</h3>
                </Link>
                <p className="text-gray-700 my-1">${product.price.toFixed(2)}</p>

                {/* Display categories */}
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
                </div>

                {/* Add to Cart Button */}
                <button
                    onClick={handleAddClick}
                    className={`py-2 px-4 md:w-full min-w-[120px] rounded-md font-semibold cursor-pointer transition-colors duration-300 ${isAdded
                        ? 'bg-green-500 text-white hover:bg-green-600'
                        : 'bg-gray-100 text-gray-700 hover:text-zinc-100 hover:bg-indigo-600'
                        }`}
                >
                    {isAdded ? 'View Cart' : 'Add to cart'}
                </button>
            </div>
        </div>
    );
};

// Main ProductDetails component
export default function ProductDetails() {
    const { productId } = useParams(); // Get product ID from URL
    const navigate = useNavigate();
    const product = allProducts.find(p => p.id === parseInt(productId)); // Find product by ID
    const [quantity, setQuantity] = useState(1); // Product quantity selector
    const [activeTab, setActiveTab] = useState('description'); // Tab state: description or reviews
    const [rating, setRating] = useState(0); // User rating input
    const [isAddedToCart, setIsAddedToCart] = useState(false); // Track if product is added to cart

    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        review: '',
    });

    const [reviews, setReviews] = useState([]); // Array to store reviews
    const [hasReviewed, setHasReviewed] = useState(false); // Track if user has already reviewed
    const { addToCart } = useCart(); // Cart context function

    const reviewsStorageKey = `reviews-product-${productId}`; // Local storage key for reviews
    const userReviewKey = `user-reviewed-product-${productId}`; // Local storage key for user review tracking
    const relatedProducts = allProducts.filter(p => p.id !== product.id).slice(0, 4); // Show 4 related products

    // Function to get or generate unique user ID for review tracking
    const getUserId = () => {
        let userId = localStorage.getItem('unique-user-id');
        if (!userId) {
            userId = 'user-' + Math.random().toString(36).substr(2, 9) + '-' + Date.now();
            localStorage.setItem('unique-user-id', userId);
        }
        return userId;
    };

    // Load reviews and check if user has already reviewed
    useEffect(() => {
        if (!productId) return;

        try {
            const storedReviews = localStorage.getItem(reviewsStorageKey);
            if (storedReviews) {
                const parsedReviews = JSON.parse(storedReviews);
                setReviews(parsedReviews);
            } else {
                setReviews([]);
            }

            const userId = getUserId();
            const userReviewedProducts = JSON.parse(localStorage.getItem(userReviewKey) || '[]');
            setHasReviewed(userReviewedProducts.includes(userId));

        } catch (error) {
            console.error("Failed to parse reviews from localStorage", error);
            setReviews([]);
            setHasReviewed(false);
        }
    }, [productId, reviewsStorageKey, userReviewKey]);

    // Handle input change in review form
    const handleChange = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value,
        });
    };

    // Handle submitting a review
    const handleSubmit = (e) => {
        e.preventDefault();

        if (hasReviewed) {
            toast.error("You have already submitted a review for this product.");
            return;
        }

        if (formInput.name && formInput.email && formInput.review && rating > 0) {
            const userId = getUserId();

            const newReview = {
                id: reviews.length + 1,
                userId: userId,
                name: formInput.name,
                email: formInput.email,
                rating: rating,
                reviewText: formInput.review,
                date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
                timestamp: Date.now()
            };

            const updatedReviews = [...reviews, newReview];
            setReviews(updatedReviews);

            localStorage.setItem(reviewsStorageKey, JSON.stringify(updatedReviews));

            const userReviewedProducts = JSON.parse(localStorage.getItem(userReviewKey) || '[]');
            if (!userReviewedProducts.includes(userId)) {
                userReviewedProducts.push(userId);
                localStorage.setItem(userReviewKey, JSON.stringify(userReviewedProducts));
            }

            setHasReviewed(true);

            // Reset form inputs and rating
            setFormInput({ name: '', email: '', review: '' });
            setRating(0);

            toast.success("Your review has been submitted successfully!");
        } else {
            toast.error("Please fill in all the required fields and submit a review.");
        }
    };

    // Handle adding main product to cart
    const handleAddToCart = () => {
        if (product) {
            if (isAddedToCart) {
                navigate('/cart'); // Navigate if already in cart
                return;
            }

            // Add product to cart according to selected quantity
            for (let i = 0; i < quantity; i++) {
                const productToAdd = {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    categoryOne: product.categoryOne,
                    categoryTow: product.categoryTow,
                    quantity: 1
                };
                addToCart(productToAdd);
            }

            setIsAddedToCart(true);
            toast.success(`${quantity} ${quantity === 1 ? 'item' : 'items'} added to cart successfully!`);
        }
    };

    // Show error if product not found
    if (!product) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <p className="text-xl text-gray-700">Product not found.</p>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen font-sans text-gray-800">

            {/* Breadcrumb navigation */}
            <div className="container mx-auto px-4 pt-10">
                <div className="text-sm text-gray-500">
                    <Link to="/" className="hover:underline hover:text-indigo-700 transition duration-300">HOME</Link>
                    <span className="mx-2">/</span>
                    <Link to="/products" className="hover:underline hover:text-indigo-700 transition duration-300">PRODUCTS</Link>
                    <span className="mx-2">/</span>
                    <Link to={getCategoryPath(product.categoryOne)} className="hover:underline hover:text-indigo-700 transition duration-300">
                        <span>{product.categoryOne.toUpperCase()}</span>
                    </Link>
                    {product.categoryTow && (
                        <Link to={getCategoryPath(product.categoryTow)} className="hover:underline hover:text-indigo-700 transition duration-300">
                            <span className="mx-2">/</span>
                            <span>{product.categoryTow.toUpperCase()}</span>
                        </Link>
                    )}
                </div>
            </div>

            {/* Main Product Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Product Image */}
                    <div className="flex justify-center items-center">
                        <img src={product.image} alt={product.name} className="max-w-full h-auto object-contain" />
                    </div>

                    {/* Product Info */}
                    <div>
                        <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
                        <p className="text-2xl text-gray-800 font-normal mb-4">${product.price.toFixed(2)}</p>
                        <div className="prose text-gray-700 leading-relaxed mb-6">
                            <p>Et ligula ullamcorper malesuada proin libero nunc consequat interdum...</p>
                        </div>

                        <hr className='border-zinc-200 mb-8' />

                        {/* Quantity selector and Add to Cart button */}
                        <div className="flex items-center space-x-2 ">
                            <div className='flex items-center border border-gray-200 rounded-md py-1.5'>
                                {/* Decrease quantity button */}
                                <button
                                    className="ntv w-7 h-7 flex items-center justify-center mx-2 text-gray-500 rounded-sm text-2xl pb-1 relative  hover:text-white duration-300 cursor-pointer"
                                    aria-label="Decrease quantity"
                                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                    disabled={isAddedToCart}
                                >
                                    -
                                </button>

                                {/* Quantity display */}
                                <span className="px-4 py-2 text-gray-500 font-medium text-sm">{quantity}</span>

                                {/* Increase quantity button */}
                                <button
                                    className="ntv w-7 h-7 flex items-center justify-center mx-2 text-gray-500 rounded-sm text-2xl pb-1 relative hover:text-white duration-300 cursor-pointer"
                                    aria-label="Increase quantity"
                                    onClick={() => setQuantity(prev => prev + 1)}
                                    disabled={isAddedToCart}
                                >
                                    +
                                </button>
                            </div>

                            {/* Add to Cart Button */}
                            <button
                                onClick={handleAddToCart}
                                className={`py-3 px-13 md:px-15 lg:px-36 rounded-md font-semibold cursor-pointer transition-colors duration-300 ${isAddedToCart
                                    ? 'bg-green-500 text-white hover:bg-green-600'
                                    : 'bg-gray-100 text-gray-700 hover:bg-indigo-600 hover:text-gray-50'
                                    }`}
                            >
                                {isAddedToCart ? 'View Cart' : 'Add to cart'}
                            </button>
                        </div>

                        <hr className='border-zinc-200 mt-8' />

                        {/* Product Categories */}
                        <p className="text-sm text-gray-500 mt-4">
                            CATEGORY:
                            <Link to={getCategoryPath(product.categoryOne)} className="uppercase hover:underline ml-1">
                                {product.categoryOne}
                            </Link>
                            {product.categoryTow && (
                                <Link to={getCategoryPath(product.categoryTow)} className="uppercase hover:underline ml-1">
                                    {product.categoryTow}
                                </Link>
                            )}
                        </p>
                    </div>
                </div>
            </div>

            {/* Description & Reviews Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="border-b border-gray-300 mb-6">
                    {/* Tabs for Description and Reviews */}
                    <button
                        className={`py-3 px-6 text-lg font-medium focus:outline-none ${activeTab === 'description' ? 'border-b-2 border-gray-900 text-gray-900' : 'text-gray-500 hover:text-gray-800'}`}
                        onClick={() => setActiveTab('description')}
                    >
                        DESCRIPTION
                    </button>
                    <button
                        className={`py-3 px-6 text-lg font-medium focus:outline-none ${activeTab === 'reviews' ? 'border-b-2 border-gray-900 text-gray-900' : 'text-gray-500 hover:text-gray-800'}`}
                        onClick={() => setActiveTab('reviews')}
                    >
                        REVIEWS ({reviews.length})
                    </button>
                </div>

                {/* Show Description */}
                {activeTab === 'description' && (
                    <div className="prose max-w-none text-gray-700">
                        <p>{getFullDescription(product.id)}</p>
                    </div>
                )}

                {/* Show Reviews */}
                {activeTab === 'reviews' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-12">
                        {/* Existing Reviews */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Reviews</h2>
                            {reviews.length > 0 ? (
                                reviews.map((review) => (
                                    <div key={review.id} className="border-b border-gray-200 pb-4 mb-4">
                                        <div className="flex items-center mb-2">
                                            {/* User Initial */}
                                            <div className="w-[66px] md:w-10 h-[66px] lg:h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold mr-4">
                                                {review.name.charAt(0).toUpperCase()}
                                            </div>

                                            {/* User name and date */}
                                            <div>
                                                <div className="font-semibold">{review.name}</div>
                                                <div className="text-sm text-gray-500">{review.date}</div>
                                            </div>
                                        </div>

                                        {/* Star rating */}
                                        <div className="flex space-x-1 text-orange-400 mb-2">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 1l2.939 5.955 6.572.955-4.756 3.545 1.123 6.545z" />
                                                </svg>
                                            ))}
                                        </div>

                                        {/* Review Text */}
                                        <p className="text-gray-700">{review.reviewText}</p>
                                    </div>
                                ))
                            ) : (
                                <div className="text-gray-500 mb-6">There are no reviews yet.</div>
                            )}
                        </div>

                        {/* Review Form */}
                        <div>
                            {hasReviewed ? (
                                <p className="text-xl font-bold text-green-600">
                                    Thank you! You have already submitted a review for this product.
                                </p>
                            ) : (
                                <div>
                                    <h3 className="text-xl font-bold mb-4">
                                        Be the first to review "{product.name}"
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Your email address will not be published. Required fields are marked *
                                    </p>

                                    <form className="space-y-4" onSubmit={handleSubmit}>
                                        {/* Rating Selector */}
                                        <div className="flex items-center mb-4">
                                            <label className="mr-4 text-gray-700">YOUR RATING *</label>
                                            <div className="flex space-x-1 text-orange-500">
                                                {[1, 2, 3, 4, 5].map((i) => (
                                                    <button
                                                        key={i}
                                                        type="button"
                                                        onClick={() => setRating(i)}
                                                        className={i <= rating ? 'text-orange-400' : 'text-gray-300'}
                                                    >
                                                        <svg
                                                            className="w-4 h-5 fill-current hover:text-orange-500 transition-colors duration-200"
                                                            viewBox="0 0 20 24"
                                                        >
                                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 1l2.939 5.955 6.572.955-4.756 3.545 1.123 6.545z" />
                                                        </svg>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Name Input */}
                                        <input
                                            type="text"
                                            name="name"
                                            value={formInput.name}
                                            onChange={handleChange}
                                            placeholder="Name *"
                                            required
                                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-indigo-500"
                                        />

                                        {/* Email Input */}
                                        <input
                                            type="email"
                                            name="email"
                                            value={formInput.email}
                                            onChange={handleChange}
                                            placeholder="Email *"
                                            required
                                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-indigo-500"
                                        />

                                        {/* Review Textarea */}
                                        <textarea
                                            name="review"
                                            value={formInput.review}
                                            onChange={handleChange}
                                            placeholder="Your review *"
                                            required
                                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-indigo-500"
                                        />

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300"
                                        >
                                            SUBMIT REVIEW
                                        </button>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Related Products Section */}
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold mb-6">Related Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {relatedProducts.map((related) => (
                        <RelatedProductCard key={related.id} product={related} onAddToCart={addToCart} />
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className='footer-product bg-black relative top-[170px] md:top-[-80px] lg:top-[315px]'>
                <Footer />
            </div>
        </div>
    );
}
