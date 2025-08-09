// src/products/ProductDetails.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// استيراد البيانات من ملف ProductsData.jsx
import { allProducts, getFullDescription } from '../products/ProductsData';

// دالة لمسار الفئة (تم نقلها للخارج لتكون قابلة للتصدير)
const getCategoryPath = (category) => {
    if (!category) return '#';
    // تعديل المسار ليتوافق مع المسار الجديد
    return `/category/${encodeURIComponent(category.toLowerCase().replace(/, /g, '-').replace(/\s/g, '-'))}`;
};

// تصدير RelatedProductCard ليتم استخدامه في مكونات أخرى
export const RelatedProductCard = ({ product }) => {
    const { categoryOne, categoryTow } = product;
    return (
        <div className="flex flex-col items-center text-center p-4">

            <div className="flex items-center justify-center h-full w-64 mx-auto ">
                <Link to={`/products/${product.id}`} className="block mb-4 ">
                    <img src={product.image} alt={product.name} className="rounded-lg max-h-full max-w-full object-cover" />
                </Link>
            </div>

            <div className="text-left w-full mt-2">
                <Link to={`/products/${product.id}`} className="pro-h3 text-zinc-900 transition-colors duration-300">
                    <h3 className="text-lg font-medium">{product.name}</h3>
                </Link>
                <p className="text-gray-700 my-1">${product.price.toFixed(2)}</p>
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
                <button className="add bg-gray-100 text-zinc-950 py-2 px-4 w-full rounded-md font-semibold transition-colors duration-300">
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default function ProductDetails() {
    const { productId } = useParams();
    const product = allProducts.find(p => p.id === parseInt(productId));
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
    const [rating, setRating] = useState(0);

    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        review: '',
    });

    const [reviews, setReviews] = useState([]);

    const [hasReviewed, setHasReviewed] = useState(false);

    const localStorageKey = `product-reviews-${productId}`;

    // جلب المنتجات ذات الصلة، باستثناء المنتج الحالي
    const relatedProducts = allProducts.filter(p => p.id !== product.id).slice(0, 4);

    useEffect(() => {
        try {
            const storedReviews = localStorage.getItem(localStorageKey);
            if (storedReviews) {
                const parsedReviews = JSON.parse(storedReviews);
                setReviews(parsedReviews);

                // التحقق مما إذا كان المستخدم قد أرسل مراجعة بالفعل
                const userHasReviewed = parsedReviews.some(
                    (review) => review.email === localStorage.getItem(`user-email-${productId}`)
                );
                setHasReviewed(userHasReviewed);
            }
        } catch (error) {
            console.error("Failed to parse reviews from localStorage", error);
        }
    }, [localStorageKey, productId]);
    // دالة لتحديث حالة النموذج
    const handleChange = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value,
        });
    };

    // دالة لمعالجة إرسال النموذج
    const handleSubmit = (e) => {
        e.preventDefault();

        // منع الإرسال إذا كان المستخدم قد أرسل مراجعة بالفعل
        if (hasReviewed) {
            alert("لقد قمت بالفعل بتقديم مراجعة لهذا المنتج.");
            return;
        }

        if (formInput.name && formInput.email && formInput.review && rating > 0) {
            const newReview = {
                id: reviews.length + 1,
                name: formInput.name,
                email: formInput.email,
                rating: rating,
                reviewText: formInput.review,
                date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            };

            const updatedReviews = [...reviews, newReview];
            setReviews(updatedReviews);

            // حفظ المراجعات المحدثة في الذاكرة المحلية
            localStorage.setItem(localStorageKey, JSON.stringify(updatedReviews));

            // وضع علامة على أن المستخدم قد أرسل مراجعة
            setHasReviewed(true);
            localStorage.setItem(`user-email-${productId}`, formInput.email);

            // إعادة تعيين النموذج
            setFormInput({
                name: '',
                email: '',
                review: '',
            });
            setRating(0);
        } else {
            alert("يرجى ملء جميع الحقول المطلوبة وتقديم تقييم.");
        }
    };

    if (!product) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <p className="text-xl text-gray-700">المنتج غير موجود.</p>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen font-sans text-gray-800">

            {/* Breadcrumb Section */}
            <div className="container mx-auto px-4 pt-10">
                <div className="text-sm text-gray-500">
                    <Link to="/" className="hover:underline">HOME</Link>
                    <span className="mx-2">/</span>
                    <Link to="/products" className="hover:underline">PRODUCTS</Link>
                    <span className="mx-2">/</span>
                    <Link to={getCategoryPath(product.categoryOne)} className="hover:underline">
                        <span>{product.categoryOne.toUpperCase()}</span>
                    </Link>
                    {product.categoryTow && (
                        <Link to={getCategoryPath(product.categoryTow)} className="hover:underline">
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
                            <p>Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Nisl nunc mi ipsum faucibus vitae. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget.</p>
                            <br />
                            <p>Lacinia at quis risus sed vulputate. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Ac orci phasellus egestas tellus. At urna condimentum mattis pellentesque id nibh tortor id aliquet.</p>
                            <br />
                            <p>Turpis egestas sed tempus urna et pharetra. Proin sed libero enim sed faucibus turpis in eu mi. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Placerat et netus et malesuada fames ac turpis egestas sed.</p>
                        </div>
                        <hr className='border-zinc-200 mb-8' />
                        <div className="flex items-center space-x-2 ">
                            <div className='flex items-center border border-gray-200 rounded-md py-1.5'>
                                <button
                                    className="ntv w-7 h-7 flex items-center justify-center mx-2 text-gray-500 rounded-sm  text-2xl pb-1 relative  hover:bg-amber-300 duration-300"
                                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                >
                                    -
                                </button>
                                <span className="px-4 py-2 text-gray-500 font-medium text-sm">{quantity}</span>
                                <button
                                    className=" w-7 h-7 flex items-center justify-center mx-2  text-gray-500 rounded-sm  hover:bg-amber-300 duration-300 "
                                    onClick={() => setQuantity(prev => prev + 1)}
                                >
                                    +
                                </button>
                            </div>
                            <button className="btn-add bg-gray-100 text-gray-700 py-3 px-40 rounded-md font-semibold transition-colors duration-300">
                                Add to cart
                            </button>
                        </div>
                        <hr className='border-zinc-200 mt-8' />

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

                {activeTab === 'description' && (
                    <div className="prose max-w-none text-gray-700">
                        {/* استخدام الوصف الكامل من الدالة الجديدة */}
                        <p>{getFullDescription(product.id)}</p>
                    </div>
                )}

                {activeTab === 'reviews' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Reviews</h2>
                            {reviews.length > 0 ? (
                                reviews.map((review) => (
                                    <div key={review.id} className="border-b border-gray-200 pb-4 mb-4">
                                        <div className="flex items-center mb-2">
                                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold mr-4">
                                                {review.name.charAt(0).toUpperCase()}
                                            </div>
                                            <div>
                                                <div className="font-semibold">{review.name}</div>
                                                <div className="text-sm text-gray-500">{review.date}</div>
                                            </div>
                                        </div>
                                        <div className="flex space-x-1 text-orange-400 mb-2">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 1l2.939 5.955 6.572.955-4.756 3.545 1.123 6.545z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-gray-700">{review.reviewText}</p>
                                    </div>
                                ))
                            ) : (
                                <div className="text-gray-500 mb-6">There are no reviews yet.</div>
                            )}
                        </div>

                        <div>
                            {hasReviewed ? (
                                <p className="text-xl font-bold text-green-600">
                                    شكراً لك! لقد قمت بالفعل بتقديم مراجعة لهذا المنتج.
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

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <input
                                                type="text"
                                                placeholder="Name *"
                                                name="name"
                                                value={formInput.name}
                                                onChange={handleChange}
                                                className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors duration-200"
                                            />
                                            <input
                                                type="email"
                                                placeholder="Email *"
                                                name="email"
                                                value={formInput.email}
                                                onChange={handleChange}
                                                className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors duration-200"
                                            />
                                        </div>

                                        <div>
                                            <textarea
                                                placeholder="Your review *"
                                                rows="6"
                                                name="review"
                                                value={formInput.review}
                                                onChange={handleChange}
                                                className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors duration-200"
                                            ></textarea>
                                        </div>

                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id="save-info"
                                                className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500"
                                            />
                                            <label htmlFor="save-info" className="ml-2 text-gray-700">
                                                Save my name, email, and website in this browser for the next time I comment.
                                            </label>
                                        </div>

                                        <button
                                            type="submit"
                                            className="bg-gray-800 text-white py-3 px-6 rounded-md font-semibold hover:bg-gray-700 transition-colors duration-200"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Related Products Section */}
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-2xl font-bold mb-6">Related products</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {relatedProducts.map(relatedProduct => (
                        <RelatedProductCard key={relatedProduct.id} product={relatedProduct} />
                    ))}
                </div>
            </div>
        </div>
    );
}