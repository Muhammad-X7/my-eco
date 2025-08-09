// src/blog/BlogHome.jsx
import BlogHeader from "./BlogHeader";
import AllArticles from "./AllArticles";
import Footer from "../home/Footer";
import { useParams } from 'react-router-dom';

export default function BlogHome() {
    const { categoryName } = useParams();

    return (
        <div className=''>
            {/* عرض عنوان المدونة أو اسم الفئة */}
            <BlogHeader pageTitle={categoryName || "Blog"} />
            <AllArticles category={categoryName} />
            <div className='top-88 relative h-0'>
                <Footer />
            </div>
        </div>
    );
}