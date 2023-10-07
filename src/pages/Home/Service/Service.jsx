import PropTypes from "prop-types";

const Service = ({service}) => {

    const { name, image, price, short_description } = service;

    return (
        <div className="bg-base-100  rounded-tl-[60px] rounded-br-[60px] md:rounded-tl-[100px] md:rounded-br-[100px] border-2 border-[#8ECDDD] p-6 hover:shadow-2xl hover:shadow-[#8ECDDD]">
            <div>
                <img src={image} alt="service img" className="rounded-tl-[60px] rounded-br-[60px] md:rounded-tl-[100px] md:rounded-br-[100px]" />
            </div>
            <div className="mt-6">
                <h3 className="text-2xl font-semibold">{name}</h3>
                <p className="text-lg my-3">{short_description}</p>
                <p className="text-xl font-semibold mb-3 text-[#ff8080]">{price}</p>
                <button className="bg-[#8ECDDD] text-white text-lg font-bold p-3 w-full rounded-tl-[60px] rounded-br-[60px] md:rounded-tl-[100px] md:rounded-br-[100px] hover:bg-[#41adc7]">Explore Details</button>
            </div>
            
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object.isRequired,
  };

export default Service;