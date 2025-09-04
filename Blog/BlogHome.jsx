import BlogHeader from "./BlogHeader";
import AllArticles from "./AllArticles";
import Footer from "../home/Footer";
import { useParams } from 'react-router-dom';

export default function BlogHome() {
    const { categoryName } = useParams();

    return (
        <div className=''>
            {/* Display the blog title or the category name */}
            <BlogHeader pageTitle={categoryName || "Blog"} />
            <AllArticles category={categoryName} />
            <div className='top-36 md:-top-24 lg:top-88 relative h-0'>
                <Footer />
            </div>
        </div>
    );
}