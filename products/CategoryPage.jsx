import { useParams } from 'react-router-dom';
import { allProducts } from '../products/ProductDetails';
import { RelatedProductCard } from '../products/ProductDetails';

// Converts category name to a URL-friendly path
const getCategoryPath = (category) => {
    if (!category) return '#';
    // Lowercase, replace ", " with "-", and spaces with "-"
    return `/category/${encodeURIComponent(category.toLowerCase().replace(/, /g, '-').replace(/\s/g, '-'))}`;
};

export default function CategoryPage() {
    const { categoryName } = useParams(); // Get category name from the URL
    const formattedCategoryName = categoryName.toUpperCase().replace(/-/g, ' '); // Format name for display

    // Filter products based on either categoryOne or categoryTow matching the formatted category
    const filteredProducts = allProducts.filter(p =>
        p.categoryOne?.toUpperCase().includes(formattedCategoryName) ||
        p.categoryTow?.toUpperCase().includes(formattedCategoryName)
    );

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Category Title */}
            <h1 className="text-4xl font-bold mb-6">{formattedCategoryName}</h1>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <RelatedProductCard
                            key={product.id}
                            product={product}
                            getCategoryPath={getCategoryPath}
                        />
                    ))
                ) : (
                    // Display message if no products found
                    <p className="col-span-full text-center text-gray-500">
                        No products in this category.
                    </p>
                )}
            </div>
        </div>
    );
}
