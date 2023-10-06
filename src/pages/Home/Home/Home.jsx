import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Services from "../Services/Services";
import WhyChoose from "../WhyChoose/WhyChoose";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Gallery></Gallery>
            <WhyChoose></WhyChoose>
        </div>
    );
};

export default Home;