import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const service = services.find((service) => service.id === idInt);

  const { name, image, price, long_description } = service;

  return (
    <div className="max-w-7xl mx-auto py-12">
      <div className=" w-1/2 mx-auto bg-base-100  rounded-tl-[60px] rounded-br-[60px] md:rounded-tl-[100px] md:rounded-br-[100px] border-2 border-[#8ECDDD] p-6 hover:shadow-2xl hover:shadow-[#8ECDDD] ">
        <div>
          <img
            src={image}
            alt="service img"
            className="rounded-tl-[60px] rounded-br-[60px] md:rounded-tl-[100px] md:rounded-br-[100px]"
          />
        </div>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p className="text-lg my-3">{long_description}</p>
          <p className="text-xl font-semibold mb-3 text-[#ff8080]">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
