import { useState } from 'react';

export default function NewsletterSection() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // هنا يمكنك إضافة منطق لإرسال البريد الإلكتروني إلى الخادم
        console.log('Email submitted:', email);
        alert(`Thank you for subscribing, ${email}!`);
        setEmail(''); // مسح حقل البريد الإلكتروني بعد الإرسال
    };

    return (
        <section className="bg-gray-900 py-28 md:py-32 text-white text-center -top-44 md:top-24 lg:-top-88 relative">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-5xl font-bold mb-8">Don't Miss Our News</h2>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
                    <input
                        type="email"
                        id="subscriber-email"
                        name="email"
                        placeholder="Your Email Address *"
                        className="w-full sm:w-2/3 p-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full sm:w-1/3 bg-purple-700 hover:bg-purple-800 text-white font-semibold py-4 px-6 rounded-lg transition duration-300 shadow-md"
                    >
                        SUBSCRIBE
                    </button>
                </form>
            </div>
        </section>
    );
}