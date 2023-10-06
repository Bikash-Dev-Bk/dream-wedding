import PropTypes from "prop-types";

const Service = ({service}) => {

    const { name, image, price, short_description } = service;

    return (
        <div className="card card-compact bg-base-100 shadow-xl p-6 ">
            <div>
                <img src={image} alt="service img" className="rounded-lg" />
            </div>
            <div className="mt-6">
                <h3 className="text-2xl font-semibold">{name}</h3>
                <p className="text-lg my-3">{short_description}</p>
                <p className="text-xl font-semibold mb-3 text-[#ff8080]">{price}</p>
                <button className="bg-[#8ECDDD] text-white text-lg font-bold p-3 w-full rounded-lg hover:bg-[#41adc7]">Explore Details</button>
            </div>
            
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object.isRequired,
  };

export default Service;