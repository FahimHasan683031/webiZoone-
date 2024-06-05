import { FiArrowRight } from "react-icons/fi";
const Newsletter = () => {
  return (
    <div className="flex justify-around items-center py-16 px-5 md:px-1 md:py-32 lg:py-40  bg-gradient-to-r from-[#261c16] to-[#0b2728]  mb-20">
      <div className="text-white font-medium text-[14px] md:text-2xl w-1/2">
        Sign up for our newsletter.
      </div>
    
        <div className="relative w-1/2 md:w-[300px] lg:w-[400px] ">
        <input
          type="email"
          placeholder="Email Address"
          className="bg-transparent placeholder:text-white placeholder:text-xs md:placeholder:text-base py-2 w-[90%]  ml-3 lg:pr-20 border-b focus:outline-none  caret-white text-white placeholder:font-light "
        ></input>
        <div className="flex text-white  md:gap-1 items-center absolute top-3 right-4 md:right-8 cursor-pointer">
          <p className="text-[12px] md:text-sm font-thin">Subscribe</p>
          <FiArrowRight className="text-xs md:text-base" />
        </div>
      </div>
    
    </div>
  );
};

export default Newsletter;
