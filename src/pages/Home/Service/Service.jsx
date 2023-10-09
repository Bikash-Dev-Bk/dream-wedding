import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Service = ({service}) => {

    const { name, image, price, short_description, id } = service;

    return (
        <div className="bg-base-100  rounded-tl-[40px] rounded-br-[40px] md:rounded-tl-[60px] md:rounded-br-[60px] border-2 border-[#8ECDDD] p-6 hover:shadow-2xl hover:shadow-[#8ECDDD]"  data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-sine">
            <div>
                <img src={image} alt="service img" className="rounded-tl-[40px] md:rounded-tl-[60px] " />
            </div>
            <div className="mt-6">
                <h3 className="text-2xl font-semibold">{name}</h3>
                <p className="text-lg my-3">{short_description}</p>
                <p className="text-xl font-semibold mb-3 text-[#ff8080]">{price}</p>
                <Link to={`/servicedetails/${id}`}>
                <button className="text-white text-lg font-bold p-3 w-full rounded-[40px] md:rounded-[60px] bg-[#8ECDDD] hover:bg-white hover:border-2 hover:border-[#8ECDDD] hover:text-[#8ECDDD]">Explore Details</button>
                </Link>
            </div>
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object.isRequired,
  };

export default Service;