import NewsCard from "../home/NewsCard";
import { allArticles } from "../Blog/NewsData";

export default function AllArticles({ category }) {
    // Filter articles based on the category prop, if provided
    const filteredArticles = category
        ? allArticles.filter(article => article.category.toLowerCase() === category.toLowerCase())
        : allArticles;

    return (
        <div className="bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-gray-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
                    {filteredArticles && filteredArticles.length > 0 ? (
                        filteredArticles.map(article =>
                            article ? <NewsCard key={article.id} article={article} /> : null
                        )
                    ) : (
                        <p className="text-gray-500 text-center col-span-full">No articles found for this category.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
