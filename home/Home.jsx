import HeroSection from "../home/HeroSection"
import Features from "../home/Features"
import Category from "../home/Category"
import ServiceCards from "../home/ServiceCards"
import HeroCard from "../home/HeroCard"
import FeaturedProduct from "../home/FeaturedProducts"
import IpadProSection from "../home/IpadProSection"
import ServicesSection from "../home/ServicesSection"
import LatestNewsSection from "../home/LatestNewsSection"
import NewsletterSection from "../home/NewsletterSection"
import Footer from "../home/Footer"

export default function Home() {
    return (
        <div className="h-0">
            <HeroSection />
            <Features />
            <Category />
            <ServiceCards />
            <HeroCard />
            <FeaturedProduct />
            <IpadProSection />
            <ServicesSection />
            <LatestNewsSection />
            <NewsletterSection />
            <Footer />
        </div>
    );
}