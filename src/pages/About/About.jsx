import HeroPages from "../../components/HeroPages/HeroPages";

const About = () => {
    return (
        <div >
            <HeroPages name="About Us"></HeroPages>
            <div className="max-w-7xl mx-auto flex gap-5 flex-col md:flex-row items-center my-32 p-5 md:p-4 lg:p-2">
                <div className="flex-1">
                    <h3 className="text-2xl text-[#ff8080]">Who We Are</h3>
                    <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold my-8">Planner for Your <br /> Perfect Wedding</h2>
                    <p className="text-lg text-justify">Welcome to Dream Weddings & Events, where your wedding dreams come true. We specialize in crafting unforgettable wedding experiences that reflect your love story and unique style. Our dedicated team is here to make your special day truly magical.</p>
                </div>
                <div className="flex md:justify-end flex-1">
                    <img src="http://elementorpress.com/templatekit-pro/layout49/wp-content/uploads/2022/07/about_image1.jpg" alt="" className="rounded-tr-[60px] rounded-bl-[60px] md:rounded-tr-[100px] md:rounded-bl-[100px] border-4 border-[#8ECDDD] hover:shadow-2xl hover:shadow-[#8ECDDD]" />
                </div>
            </div>
        </div>
    );
};

export default About;