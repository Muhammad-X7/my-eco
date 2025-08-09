import "../home/SpecialCard.css"

const ServiceCard = ({ icon: IconComponent, title, description, iconBgColor }) => {
    return (
        <div className="card-ser bg-white rounded-lg shadow-md p-6 flex flex-col items-start text-left max-w-sm mx-auto">
            {/* Icon Container */}
            <div className={`icon p-4 mb-6 w-14 h-0 md:w-auto md:h-auto left-0 rounded-full text-white flex  items-center justify-center relative ${iconBgColor}`}>
                {IconComponent && typeof IconComponent === 'function' && (
                    <IconComponent className="w-20 md:w-6 h-6" />
                )}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {description}
            </p>

            {/* Learn More Button */}
            <button className="spe-card bg-zinc-100 text-gray-900 px-7 py-3 rounded-md font-semibold transition duration-300 shadow-sm text-sm">
                Learn More
            </button>
        </div>
    );
};

export default ServiceCard;