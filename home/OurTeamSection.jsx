// src/components/OurTeamSection.jsx
import TeamMemberCard from './TeamMemberCard';

// استيراد صورة الفريق الكبيرة
import teamHeroImage from './assets/home-page-cta-ipad.webp'; // افترض أن هذا الملف موجود

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
        // أضف المزيد من أعضاء الفريق هنا إذا لزم الأمر
    ];

    return (
        <section className="bg-gray-100 py-16 md:py-20">
            <div className="container mx-auto px-4">
                {/* Hero Image Section */}
                <div
                    className="relative bg-cover bg-center rounded-lg shadow-xl overflow-hidden mb-12 md:mb-16"
                    style={{ backgroundImage: `url(${teamHeroImage})`, height: '400px' }} // يمكنك تعديل الارتفاع
                >
                    {/* Optional: Overlay for better text readability if needed */}
                    <div className="absolute inset-0 bg-black opacity-10 rounded-lg"></div>

                    {/* يمكنك إضافة أي محتوى على الصورة هنا إذا لزم الأمر، مثل عنوان أو شعار */}
                    {/*
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-4xl md:text-5xl font-bold">Meet Our Team</h2>
          </div>
          */}
                </div>

                {/* Team Members Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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