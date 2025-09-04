export default function TeamMemberCard({ name, title, description }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
            <p className="text-indigo-600 font-medium mb-3">{title}</p>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );
}