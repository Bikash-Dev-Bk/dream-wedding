import banner from "../../../assets/banner.jpg";
import "./Banner.css";
import { RiTodoLine } from 'react-icons/ri';

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center p-5 md:p-4 lg:p-2 mt-24 mb-40">
      <div className="flex-1">
        <img
          src={banner}
          alt=""
          className="rounded-tl-[60px] rounded-br-[60px] md:rounded-tl-[100px] md:rounded-br-[100px] border-4 border-[#8ECDDD] hover:shadow-2xl hover:shadow-[#8ECDDD]"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-3xl md:text-6xl font-bold">Creating Your Perfect Wedding Day!</h2>
        <p className="text-lg text-justify my-8">
          Crafting Unforgettable Moments: Creating Your Perfect Wedding Day!
        </p>
        <div>
          <button className="flex items-center gap-2 text-white text-lg bg-[#ff8080] font-semibold px-10 py-4 rounded-[30px]  reservation_btn"> <RiTodoLine/> Make Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
