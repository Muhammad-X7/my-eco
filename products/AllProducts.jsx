import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { allProducts } from './ProductsData';

import ProductCard from '../home/ProductCard';
import "../home/FeaturedProducts.css";


const AllProducts = () => {
    const { categoryName } = useParams();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedSortOption, setSelectedSortOption] = useState(() => {
        const savedSortOption = localStorage.getItem('productSortOption');
        return savedSortOption || 'popularity';
    });
    const dropdownRef = useRef(null);
    const [sortedProducts, setSortedProducts] = useState([]);

    const sortOptions = [
        { value: 'popularity', label: 'Sort by popularity' },
        { value: 'average_rating', label: 'Sort by average rating' },
        { value: 'latest', label: 'Sort by latest' },
        { value: 'price_low_to_high', label: 'Sort by price: low to high' },
        { value: 'price_high_to_low', label: 'Sort by price: high to low' },
        { value: 'default', label: 'Default sorting' },
    ];

    // منطق الفلترة والتصنيف الجديد
    useEffect(() => {
        let productsToFilter = allProducts;
        // منطق الفلترة بناءً على الفئة من الـ URL
        if (categoryName) {
            productsToFilter = allProducts.filter(p =>
                p.categoryOne?.toLowerCase() === categoryName?.toLowerCase().replace(/-/g, ' ') ||
                p.categoryTow?.toLowerCase() === categoryName?.toLowerCase().replace(/-/g, ' ')
            );
        }

        let tempProducts = [...productsToFilter];

        switch (selectedSortOption) {
            case 'popularity':
                tempProducts.sort((a, b) => b.popularity - a.popularity);
                break;
            case 'average_rating':
                tempProducts.sort((a, b) => b.rating - a.rating);
                break;
            case 'latest':
                tempProducts.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
                break;
            case 'price_low_to_high':
                tempProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price_high_to_low':
                tempProducts.sort((a, b) => b.price - a.price);
                break;
            case 'default':
            default:
                tempProducts.sort((a, b) => a.id - b.id);
                break;
        }

        setSortedProducts(tempProducts);
    }, [selectedSortOption, categoryName]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSortChange = (option) => {
        setSelectedSortOption(option);
        localStorage.setItem('productSortOption', option);
        setIsDropdownOpen(false);
    };

    const currentSortLabel = sortOptions.find(option => option.value === selectedSortOption)?.label;

    return (
        <div className="padding bg-gray-50 p-16 lg:pb-32 lg:top-3 relative">
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-8 flex-col sm:flex-row">
                    <div className="text-gray-700 text-lg mb-4 sm:mb-0">
                        {categoryName ? `SHOWING ALL ${sortedProducts.length} RESULTS FOR ${categoryName.toUpperCase().replace(/-/g, ' ')}` : `SHOWING ALL ${sortedProducts.length} RESULTS`}
                    </div>
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 truncate  hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 w-56 flex justify-between items-center"
                        >
                            <span>{currentSortLabel}</span>
                            <svg className={`w-4 h-4 ml-2 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-300 rounded-lg shadow-lg z-10 overflow-hidden">
                                {sortOptions.map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => handleSortChange(option.value)}
                                        className={`block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200 ${selectedSortOption === option.value ? 'bg-blue-50 text-blue-700 font-semibold' : ''}`}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={`$${product.price.toFixed(2)}`}
                            categoryOne={product.categoryOne}
                            categoryTow={product.categoryTow}
                            image={product.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProducts;