import HeroPages from "../../components/HeroPages/HeroPages";
import image from "../../assets/Contact-Image.jpg";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <HeroPages name="Contact Us"></HeroPages>
      <div className="max-w-7xl mx-auto flex gap-5 lg:gap-24 flex-col-reverse md:flex-row items-center p-5 md:p-4 lg:p-2 my-32">
        <div className=" flex-1">
          <div className="relative z-10 bg-[#8ECDDD] rounded-tr-[90px] rounded-bl-[90px] shadow-lg px-8 py-12 text-gray-600 md:w-full">
            <form className="flex flex-col space-y-4">
              <div>
                <img src={image} alt="" className="border-8 border-white rounded-tr-[70px]" />
              </div>

              <div>
                <input
                  type="name"
                  placeholder="Name"
                  className="ring-1  w-full rounded-full px-4 py-2 mt-2 outline-none     "
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="ring-1  w-full rounded-full px-4 py-2 mt-2 outline-none     "
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone"
                  className="ring-1  w-full rounded-full px-4 py-2 mt-2 outline-none     "
                />
              </div>
              <div>
                <textarea
                  type="text"
                  placeholder="Message"
                  rows="4"
                  className="ring-1  w-full rounded-2xl px-4 py-2 mt-2 outline-none     "
                ></textarea>
              </div>

              <div className="w-full text-center text-white bg-[#8ECDDD] rounded-full border border-white  py-2 text-lg hover:bg-[#ff8080] hover:border-none">
                <button>Send Message</button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8">
            Interested in discussing? Get In touch with us.
          </h3>
          <p className="text-lg text-justify my-5">
            We are here to help! If you have any questions or concerns about our
            products or services, please do not hesitate to contact us. You can
            reach us by phone, email, or by filling out the contact form below.
            Our friendly customer support team is available 24/7 to assist you.
          </p>
          <p className="text-xl font-bold">Follow us:</p>
          <div className="flex space-x-4 text-2xl mt-5 mb-8">
              <a href="https://www.facebook.com/">
                <FaFacebook />
              </a>
              <a href="https://www.twitter.com/">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com">
                <FaLinkedinIn />
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
