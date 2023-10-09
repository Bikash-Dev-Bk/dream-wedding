import { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto" >
      <h2 className="text-4xl font-bold text-center" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-sine">Our Services</h2>
      <p className="max-w-4xl mx-auto text-center text-lg my-5 p-5 md:p-4 lg:p-2" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-sine" >From full wedding planning to individual services like venue selection, decor, catering, entertainment, and more, we tailor each detail to your vision. Trust us to make your dream wedding a reality, ensuring every moment is unforgettable. Your wedding journey starts here.</p>
      <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 p-5 md:p-4 lg:p-2" >
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
