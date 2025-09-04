import { Link } from 'react-router-dom';

// Helper function to capitalize the first letter of each word in a string
const capitalizeWords = (str) => {
    if (!str) return ''; // Return empty string if input is falsy
    return str
        .split(' ') // Split string into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
        .join(' '); // Join words back into a single string
};

// Functional component to display the header of the Products Page
// Receives 'categoryName' as a prop
export default function ProductsPageHeader({ categoryName }) {

    // Decode URL-encoded category name, replace hyphens with spaces, and capitalize each word
    const pageTitle = categoryName
        ? capitalizeWords(decodeURIComponent(categoryName).replace(/-/g, ' '))
        : 'Products'; // Default title if categoryName is not provided

    return (
        <>
            {/* Header section with background color and padding */}
            <section className="bg-[#111518] py-16 text-center">
                <div className="container mx-auto">

                    {/* Breadcrumb navigation */}
                    <p className="text-gray-600 text-xs mb-7">
                        {/* Link to Home page */}
                        <Link
                            to="/home"
                            className="text-zinc-500 font-semibold hover:text-zinc-50 duration-300"
                        >
                            HOME
                        </Link>
                        <span className="px-2 text-zinc-500">/</span>
                        {/* Current page title */}
                        <span className="text-gray-300 font-semibold uppercase">
                            {pageTitle}
                        </span>
                    </p>

                    {/* Page main title */}
                    <h1 className="text-6xl text-zinc-50 font-bold mb-4">
                        {pageTitle}
                    </h1>
                </div>
            </section>
        </>
    );
}
