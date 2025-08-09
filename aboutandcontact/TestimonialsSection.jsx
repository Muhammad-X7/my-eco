
import TestimonialCard from '../aboutandcontact/TestimonialCard';

export default function TestimonialsSection() {
    const testimonials = [
        {
            id: 1,
            avatar: '/testimonial-user-1.webp',
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut tristique egestas.",
            name: "Frank McDonald",
            title: "IT Specialist",
        },
        {
            id: 2,
            avatar: '/testimonial-user-4.webp',
            quote: "Feugiat pretium nibh ipsum consequat nisl vel pretium. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend massa tincidunt nunc pulvinar sapien et ligula.",
            name: "Kelly Miller",
            title: "Manager",
        },
        {
            id: 3,
            avatar: '/testimonial-user-1.webp',
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut tristique egestas.",
            name: "Melissa Paterson",
            title: "Designer",
        },
        {
            id: 4,
            avatar: '/testimonial-user-4.webp',
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut tristique egestas.",
            name: "Gregory Toulson",
            title: "Film Maker",
        },
    ];

    return (
        <section className="bg-gray-100 py-16 md:py-24 text-center -top-60 relative">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Testimonials</h2>
                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            avatar={testimonial.avatar}
                            quote={testimonial.quote}
                            name={testimonial.name}
                            title={testimonial.title}
                        />
                    ))}
                </div>
                {/* See All Reviews Button */}
                <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-sm inline-flex items-center">
                    See All Reviews
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
            </div>
        </section>
    );
}