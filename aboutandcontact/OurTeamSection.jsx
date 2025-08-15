import TeamMemberCard from '../aboutandcontact/TeamMemberCard';
import "../aboutandcontact/OurTeamSection.css"
export default function OurTeamSection() {
    const teamMembers = [
        {
            id: 1,
            name: "Amber Murphy",
            title: "Founder & Director",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        },
        {
            id: 2,
            name: "Aaron Foster",
            title: "Marketing & Partnerships",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        },
        {
            id: 3,
            name: "Beatrice Carpenter",
            title: "Finance & Legal",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        },
        {
            id: 4,
            name: "Terry Banks",
            title: "Support & Care",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        },
    ];

    return (
        <section className="bg-gray-50 py-16 md:py-20">
            <div className="container mx-auto px-4">
                {/* Hero Image Section */}
                <div
                    className="img-our relative bg-cover bg-center rounded-lg shadow-xl overflow-hidden mb-12 md:mb-16 -top-70"

                >
                </div>
                {/* Team Members Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -top-70 relative">
                    {teamMembers.map((member) => (
                        <TeamMemberCard
                            key={member.id}
                            name={member.name}
                            title={member.title}
                            description={member.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}