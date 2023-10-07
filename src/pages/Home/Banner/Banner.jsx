import banner from "../../../assets/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center p-5 md:p-4 lg:p-2 mt-24 mb-40">
      <div className="flex-1">
        <img
          src={banner}
          alt=""
          className="rounded-tl-[100px] rounded-br-[100px] border-4 border-[#8ECDDD]"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-3xl md:text-6xl ">Creating Your Perfect Wedding Day!</h2>
        <p className="text-lg text-justify my-8">
          Crafting Unforgettable Moments: Creating Your Perfect Wedding Day!
        </p>
        <div>
          <button className="text-white text-lg bg-[#ff8080] font-semibold px-10 py-4 rounded-[30px]  reservation_btn">
            Make Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
