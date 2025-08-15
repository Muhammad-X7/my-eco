import { Link } from 'react-router-dom';

export default function ContactHeader() {
    return (
        <>
            <section className="bg-[#111518] pt-20 pb-30 text-center">
                <div className="container mx-auto">
                    <p className="text-gray-600 text-xs mb-7">
                        <Link to="/home" className="text-zinc-500 font-semibold hover:text-zinc-50 duration-300">HOME</Link>
                        <span className="px-2 text-zinc-500">/</span>
                        <span className="text-gray-300 font-semibold uppercase">Contact Us</span>
                    </p>
                    <h1 className="text-6xl text-zinc-50 font-bold mb-4">Contact Us</h1>
                </div>
            </section>
        </>
    );
}