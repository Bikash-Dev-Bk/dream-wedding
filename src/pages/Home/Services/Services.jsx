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
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center">Our Services</h2>
      <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 p-5 md:p-4 lg:p-2">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
