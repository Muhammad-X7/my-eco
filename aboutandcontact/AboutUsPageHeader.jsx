import { Link } from 'react-router-dom';

export default function AboutUsPageHeader() {
    return (
        <>
            <section className="bg-[#111518] pt-16 pb-64 text-center">
                <div className="container mx-auto">
                    <p className="text-gray-600 text-xs mb-7">
                        <Link to="/home" className="text-zinc-500 font-semibold hover:text-zinc-50 duration-300">HOME</Link>
                        <span className="px-2 text-zinc-50">/</span>
                        <span className="text-zinc-50 font-semibold">About US</span>
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold text-zinc-50">
                        About Us
                    </h1>
                </div>
            </section>
        </>
    );
}