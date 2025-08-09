import OurTeamSection from "../aboutandcontact/OurTeamSection"
import AboutUsPageHeader from "../aboutandcontact/AboutUsPageHeader"
import StatsAndCTASection from "../aboutandcontact/StatsAndCTASection"
import TestimonialsSection from "../aboutandcontact/TestimonialsSection"
import NewsletterSection from "../home/NewsletterSection"
import Footer from "../home/Footer"

export default function AboutUs() {
    return (
        <div className="" >
            <AboutUsPageHeader />
            <OurTeamSection />
            <StatsAndCTASection />
            < TestimonialsSection />
            <div className="-top-16 md:-top-88 lg:top-24 relative h-0">
                < NewsletterSection />
                <Footer />
            </div>
        </div>
    )
}