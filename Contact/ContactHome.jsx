import ContactHeader from "./ContactHeader";
import Footer from "../home/Footer";
import QuezonContactForm from "../Contact/QuezonContactForm";
import ContactInfoCard from "../Contact/ContactInfoCard";
import NewsletterSection from "../home/NewsletterSection";
import "../Contact/ContactHome.css"
export default function ContactHome() {

    return (
        <div>
            <ContactHeader />
            <div className='h-0'>
                <ContactInfoCard />
            </div>
            <div className='top-[780px] md:top-[335px] lg:top-[340px] relative h-0'>
                <QuezonContactForm />
            </div>
            <div className='top-[2000px] md:top-[1390px] lg:top-[1480px] relative h-0'>
                <NewsletterSection />
            </div>
            <div className='footer-contact top-[2285px] md:top-[1780px] lg:top-[2000px]  relative h-0'>
                <Footer />
            </div>
        </div>
    );
}
