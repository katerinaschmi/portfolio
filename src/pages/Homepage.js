import HomeLanding from "../components/HomeLanding";
import AboutSection from "../components/AboutSection";
import PortfolioSection from "../components/PortfolioSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Homepage() {
    return (
        <section className="page">
            <HomeLanding/>
            <AboutSection/>
            <PortfolioSection/>
            <TestimonialsSection
                options={{
                className: "slider variable-width",
                dots: true,
                infinite: true,
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                adaptiveHeight: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 8500
            }}/>
            <ContactSection/>
            <Footer/>
        </section>
    );
};