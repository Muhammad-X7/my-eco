// ProductCard.jsx
import { Link } from 'react-router-dom';
import "../home/ProductCard.css";


const ProductCard = ({ name, price, categoryOne, categoryTow, image, id }) => {
    const getCategoryPath = (category) => {
        if (!category) return '#';
        return `/category/${encodeURIComponent(category.toLowerCase().replace(/, /g, '-').replace(/\s/g, '-'))}`;
    };

    return (
        <div className="overflow-hidden p-4 flex flex-col">
            <div className="flex-grow flex items-center justify-center bg-gray-100 rounded-2xl overflow-hidden mb-4">
                <Link to={`/products/${id}`}>
                    <img src={image} alt={name} className="img-card h-full object-cover transition duration-400 cursor-pointer" />
                </Link>
            </div>

            <div className="text-left flex flex-col">
                <Link to={`/products/${id}`}>
                    <h3 className="h3-card text-lg font-bold text-gray-950 cursor-pointer">{name}</h3>
                </Link>
                <p className="text-gray-600 font-bold my-2">{price}</p>

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

                <button className="btn-card w-32 cursor-pointer text-gray-700 font-bold py-2 rounded-md bg-gray-100 transition-colors duration-200">
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;