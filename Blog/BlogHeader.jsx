// src/blog/BlogHeader.jsx
import { Link } from 'react-router-dom';

const capitalizeWords = (str) => {
    if (!str) return '';
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

export default function BlogHeader({ pageTitle }) {
    const formattedTitle = capitalizeWords(pageTitle);

    return (
        <>
            <section className="bg-[#111518] py-16 text-center">
                <div className="container mx-auto">
                    <p className="text-gray-600 text-xs mb-7">
                        <Link to="/home" className="text-zinc-500 font-semibold hover:text-zinc-50 duration-300">HOME</Link>
                        <span className="px-2 text-zinc-500">/</span>
                        <span className="text-gray-300 font-semibold uppercase">{formattedTitle}</span>
                    </p>

                    <h1 className="text-6xl text-zinc-50 font-bold mb-4">{formattedTitle}</h1>
                </div>
            </section>
        </>
    );
}