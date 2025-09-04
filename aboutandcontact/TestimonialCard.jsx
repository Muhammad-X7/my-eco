export default function TestimonialCard({ avatar, quote, name, title }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start text-left">
            {/* Avatar and Quote */}
            <div className="flex items-start mb-4">
                <img
                    src={avatar}
                    alt={name}
                    className="w-16 h-16 rounded-full object-cover mr-4 flex-shrink-0"
                />
                <p className="text-gray-600 text-base italic leading-relaxed flex-grow">
                    "{quote}"
                </p>
            </div>

            {/* Name and Title */}
            <h3 className="text-xl font-semibold text-gray-800 mt-2">{name}</h3>
            <p className="text-gray-500 text-sm">{title}</p>
        </div>
    );
}