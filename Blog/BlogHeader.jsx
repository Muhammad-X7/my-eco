import { Link } from 'react-router-dom';

// Utility function to capitalize the first letter of each word in a string
const capitalizeWords = (str) => {
    if (!str) return ''; // Return empty string if input is falsy
    return str
        .split(' ') // Split string into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
        .join(' '); // Join words back into a single string
};

// BlogHeader component accepts a 'pageTitle' prop
export default function BlogHeader({ pageTitle }) {
    // Format the page title with capitalized words
    const formattedTitle = capitalizeWords(pageTitle);

    return (
        <>
            {/* Header section for the blog page */}
            <section className="bg-[#111518] py-16 text-center">
                <div className="container mx-auto">

                    {/* Breadcrumb navigation */}
                    <p className="text-gray-600 text-xs mb-7">
                        <Link to="/home" className="text-zinc-500 font-semibold hover:text-zinc-50 duration-300">
                            HOME
                        </Link>
                        <span className="px-2 text-zinc-500">/</span>
                        <span className="text-gray-300 font-semibold uppercase">{formattedTitle}</span>
                    </p>

                    {/* Main page title */}
                    <h1 className="text-6xl text-zinc-50 font-bold mb-4">{formattedTitle}</h1>
                </div>
            </section>
        </>
    );
}
