import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { allArticles } from "../Blog/NewsData";
import Footer from "../home/Footer"

export default function ArticleDetails() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const foundArticle = allArticles.find(a => a.id === parseInt(id));
        if (foundArticle) {
            setArticle(foundArticle);
        }
    }, [id]);

    if (!article) {
        return <div>Article not found!</div>;
    }

    return (
        <div className="bg-white text-gray-900 pb-28">

            <section

                className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center text-white text-center"
                style={{
                    backgroundImage: `url(${article.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content */}
                <div className="relative z-10 px-4">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">{article.title}</h1>
                    <div className="text-sm text-gray-200 flex justify-center gap-4 flex-wrap">
                        <Link to="/blog">
                            <span className="bg-indigo-600 px-4 py-1 rounded-sm text-xs font-semibold hover:bg-black  transition duration-300">Blog</span>
                        </Link>
                        <span>/</span>
                        <span>{article.date}</span>
                        <span>/</span>
                        <Link to={`/blog/category/${article.category}`}>
                            <span className='cursor-pointer hover:text-indigo-600 transition duration-300'>{article.category}</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ✅ محتوى المقال */}
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis donec et odio pellentesque diam volutpat. Ullamcorper malesuada proin libero nunc consequat interdum varius. Consequat mauris nunc congue nisi vitae suscipit tellus. Feugiat pretium nibh ipsum consequat nisl vel pretium. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Magna sit amet purus gravida quis blandit turpis cursus in. Sagittis eu volutpat odio facilisis. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Sapien faucibus et molestie ac feugiat. Quis risus sed vulputate odio ut. Scelerisque fermentum dui faucibus in ornare quam viverra. Aliquet sagittis id consectetur purus ut faucibus. Vitae tempus quam pellentesque nec nam aliquam sem.</p>

                <br />
                <p>
                    Laoreet id donec ultrices tincidunt. Ac tortor vitae purus faucibus. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat. Massa ultricies mi quis hendrerit dolor magna eget est. Et magnis dis parturient montes. Sollicitudin ac orci phasellus egestas tellus rutrum. Molestie nunc non blandit massa enim nec. Quam lacus suspendisse faucibus interdum. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Fames ac turpis egestas integer eget. Tristique magna sit amet purus gravida quis blandit turpis cursus. Ultricies mi quis hendrerit dolor magna eget est lorem. Ut etiam sit amet nisl purus. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. At consectetur lorem donec massa sapien faucibus et. Nullam ac tortor vitae purus faucibus ornare suspendisse sed.
                </p>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis donec et odio pellentesque diam volutpat. Ullamcorper malesuada proin libero nunc consequat interdum varius. Consequat mauris nunc congue nisi vitae suscipit tellus. Feugiat pretium nibh ipsum consequat nisl vel pretium. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Magna sit amet purus gravida quis blandit turpis cursus in. Sagittis eu volutpat odio facilisis. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Sapien faucibus et molestie ac feugiat. Quis risus sed vulputate odio ut. Scelerisque fermentum dui faucibus in ornare quam viverr nec nam aliquam sem.</p>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis donec et odio pellentesque diam volutpat. Ullamcorper malesuada proin libero nunc consequat interdum varius. Consequat mauris nunc congue nisi vitae suscipit tellus. Feugiat pretium nibh ipsum consequat nisl vel pretium. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Magna sit amet purus gravida quis blandit turpis cursus in. Sagittis eu volutpat  Sapien faucibus et molestie ac feugiat. Quis risus sed vulputate odio ut. Scelerisque fermentum dui faucibus in ornare quam viverra. Aliquet sagittis id consectetur purus ut faucibus. Vitae tempus quam pellentesque nec nam aliquam sem.</p>

                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis donec et odio pellentesque diam volutpat. Ullamcorper malesuada proin libero nunc consequat interdum varius. Consequat mauris nunc congue nisi vitae suscipit tellus. Feugiat pretium nibh ipsum consequat nisl vel pretium. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Magna sit amet purus gravida quis blandit turpis cursus in. Sagittis . Sapien faucibus et molestie ac feugiat. Quis risus sed vulputate odio ut. Scelerisque fermentum dui faucibus in ornare quam viverra. Aliquet sagittis id consectetur purus ut faucibus. Vitae tempus quam pellentesque nec nam aliquam sem.</p>


            </div>

            {/* ✅ نموذج التعليق */}
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <h3 className="text-2xl font-bold mb-6">Leave a Reply</h3>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input
                            type="text"
                            placeholder="Name *"
                            className="p-3 border rounded focus:placeholder-transparent focus:border-hidden  focus:outline-none focus:ring-1 focus:ring-indigo-500 "
                        />
                        <input
                            type="email"
                            placeholder="Email *"
                            className="p-3 border rounded focus:placeholder-transparent focus:border-hidden  focus:outline-none focus:ring-1 focus:ring-indigo-500 "
                        />
                        <input
                            type="text"
                            placeholder="Website"
                            className="p-3 border rounded focus:placeholder-transparent focus:border-hidden  focus:outline-none focus:ring-1 focus:ring-indigo-500 "
                        />
                    </div>

                    <textarea
                        placeholder="Add Comment *"
                        rows="6"
                        className="w-full p-3 border rounded focus:placeholder-transparent focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-hidden"
                    ></textarea>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="save-info"
                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                        <label htmlFor="save-info" className="ml-2 text-gray-700">
                            Save my name, email, and website in this browser for the next time I comment.
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="bg-gray-800 text-white py-3 w-40  rounded-md font-semibold hover:bg-gray-700 transition-colors duration-200"
                    >
                        Post Comment
                    </button>
                </form>
            </div>
            <div className='bg h-0 top-[430px] relative'>
                <Footer />
            </div>
        </div>
    );
}

