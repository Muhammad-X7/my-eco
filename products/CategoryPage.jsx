import { useParams } from 'react-router-dom';

// استيراد نفس بيانات المنتجات والمكونات الأخرى
import { allProducts } from '../products/ProductDetails';
import { RelatedProductCard } from '../products/ProductDetails'; // يمكنك نقلها إلى ملف منفصل أو إعادة استخدامها

const getCategoryPath = (category) => {
    if (!category) return '#';
    return `/category/${encodeURIComponent(category.toLowerCase().replace(/, /g, '-').replace(/\s/g, '-'))}`;
};

export default function CategoryPage() {
    const { categoryName } = useParams();
    const formattedCategoryName = categoryName.toUpperCase().replace(/-/g, ' ');

    const filteredProducts = allProducts.filter(p =>
        p.categoryOne?.toUpperCase().includes(formattedCategoryName) ||
        p.categoryTow?.toUpperCase().includes(formattedCategoryName)
    );

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">{formattedCategoryName}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <RelatedProductCard key={product.id} product={product} getCategoryPath={getCategoryPath} />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">لا توجد منتجات في هذه الفئة.</p>
                )}
            </div>
        </div>
    );
}