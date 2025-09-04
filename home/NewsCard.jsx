import '../home/NewsCard.css';
import { Link } from 'react-router-dom';

export default function NewsCard({ article }) {
    const { image, category, title } = article;

    return (
        <div className="card-news bg-white rounded-lg shadow-m transition-shadow duration-300 flex flex-col">

            {/* News Image as a clickable link */}
            <Link to={`/articles/${article.id}`} className="w-full h-80 md:h-64 overflow-hidden rounded-t-lg">
                <img
                    src={image}
                    alt={title}
                    className="img-news w-full h-full object-cover transition-transform duration-400"
                />
            </Link>

            {/* News Content */}
            <div className="p-6 flex flex-col flex-grow">

                {/* Category as a link */}
                <Link
                    to={`/blog/category/${category}`}
                    className="text-indigo-600 hover:underline">
                    <p className="text-sm text-gray-500 uppercase font-medium mb-2 new">{category}</p>
                </Link>

                {/* News Title as a link */}
                <Link to={`/articles/${article.id}`}>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight new">{title}</h3>
                </Link>

                <Link to={`/articles/${article.id}`} className="read text-indigo-600 font-medium transition duration-300 self-start">
                    Read More
                </Link>
            </div>
        </div>
    );
}
