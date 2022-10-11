import PortfolioLanding from "../components/PortfolioLanding";
import PortfolioBubbles from "../components/PortfolioBubbles";
import Footer from "../components/Footer";

export default function Portfoliopage() {
    return (
        <section className="page">
            <PortfolioLanding/>
            <PortfolioBubbles/>
            <Footer/>
        </section>
    );
};