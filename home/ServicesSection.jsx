import ServiceCard from '../home/SpecialCard';
import { StarIcon, BoltIcon, ChatIcon } from '../home/PlaceHolderIcons';

export default function ServicesSection() {
    const services = [
        {
            id: 1,
            icon: StarIcon,
            title: "Special Offers",
            description: "Lorem ipsum consectetur adipiscing eiusmod tempor incididunt labore dolore magna aliqua.",
            iconBgColor: "bg-gray-900",
        },
        {
            id: 2,
            icon: BoltIcon,
            title: "Amazing Events",
            description: "Massa tincidunt nunc pulvinar sapien et ligula ullamcorper blandit turpis cursus commodo sed egestas egestas.",
            iconBgColor: "bg-gray-900",
        },
        {
            id: 3,
            icon: ChatIcon,
            title: "Human Reviews",
            description: "Ullamcorper malesuada proin libero nunc consequat interdum varius consequat mauris nunc congue nisi vitae.",
            iconBgColor: "bg-gray-900",
        },
    ];

    return (
        <section className="py-16 bg-gray-50 -top-32 md:top-36 lg:-top-80 relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            iconBgColor={service.iconBgColor}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}