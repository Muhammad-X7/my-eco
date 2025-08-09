
import NewsCard from '../home/NewsCard';
import '../home/LatestNewsSection.css';
import { allArticles } from "../Blog/NewsData";

export default function LatestNewsSection() {

    return (
        <section className="py-28 bg-gray-50 -top-40 md:top-28 lg:-top-88 relative">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className='text-center md:text-left'>
                        <h2 className="text-4xl font-bold text-gray-800 mb-2">Latest News</h2>
                        <p className="text-gray-600 text-lg mb-10">Feugiat pretium nibh ipsum consequat commodo.</p>
                    </div>
                    <button className="view-news text-gray-950 text-lg font-medium px-6 py-3 rounded-lg bg-gray-200 cursor-pointer transition-colors duration-300">
                        View All
                    </button>
                </div>

                {/* News */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allArticles.map((news) => {
                        if (news.id > 3) return null;
                        return (
                            <NewsCard key={news.id} article={news} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}