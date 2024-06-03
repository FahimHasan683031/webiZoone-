"use client";
import { FaGgCircle, FaRegCircle } from "react-icons/fa6";
const WorkingProcess = () => {
  return (
    <div className=" h-[700px] md:h-[750px] lg:h-[850px]  max-w-screen-md mx-auto mb-20 mt-32 px-5 lg:px-0">
      <div className="relative">
        <div className="w-[3.5px] bg-[#bc4a32] h-[22px] absolute -top-6 left-[50%]"></div>
        <div className="grid grid-cols-3">
          <FaGgCircle className="text-xl md:text-3xl " />
          <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-800 text-center">
            Our Process
          </h3>
          <div className="text-right">
            <button className="px-2 md:px-4 py-2 rounded-full bg-[#bc4a32] text-white text-xs md:text-sm">
              GET A QUOTE
            </button>
          </div>
        </div>
        <p className="text-center w-full md:w-4/5 mx-auto mt-7 mb-9 text-[15px] lg:text-base ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis
        </p>
      </div>

      <div className="relative">
        <div className="w-[3.5px] bg-[#bc4a32] h-[420px] md:h-[570px] lg:h-[620px] absolute top-0 left-[50%]"></div>

        <div className="relative">
          <FaRegCircle className="absolute left-[48.5%] md:left-[49.2%] top-10 md:top-[70px] bg-white text-[#bc4a32]" />
          <div className="grid grid-cols-2 gap-16 md:gap-32 lg:gap-40 pt-8 md:pt-16">
            <div>
              <p className="text-right text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
                Immerse
              </p>
            </div>
            <div>
              <p className="text-xs md:text-sm lg:text-base text-gray-700">
                This is where the exertion and proper planning happens and our
                team will gather inspiration.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <FaRegCircle className="absolute left-[48.5%] md:left-[49.2%] top-10 md:top-[70px] bg-white text-[#bc4a32]" />
          <div className="grid grid-cols-2 gap-16 md:gap-32 lg:gap-40  pt-8 md:pt-16">
            <div>
              <p className="text-right  text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
                Plan
              </p>
            </div>
            <div>
              <p className="text-xs md:text-sm lg:text-base text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <FaRegCircle className="absolute left-[48.5%] md:left-[49.2%] top-10 md:top-[70px] bg-white text-[#bc4a32]" />
          <div className="grid grid-cols-2 gap-16 md:gap-32 lg:gap-40  pt-8 md:pt-16">
            <div>
              <p className="text-right text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
                Create
              </p>
            </div>
            <div>
              <p className="text-xs md:text-sm lg:text-base text-gray-700">
                This is where the exertion and proper planning happens and our
                team will gather inspiration.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <FaRegCircle className="absolute left-[48.5%] md:left-[49.2%] top-10 md:top-[70px] bg-white text-[#bc4a32]" />
          <div className="grid grid-cols-2 gap-16 md:gap-32 lg:gap-40  pt-8 md:pt-16">
            <div>
              <p className="text-right text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
                Launch
              </p>
            </div>
            <div>
              <p className="text-xs md:text-sm lg:text-base text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <FaRegCircle className="absolute left-[48.5%] md:left-[49.2%] top-10 md:top-[70px] bg-white text-[#bc4a32]" />
          <div className="grid grid-cols-2 gap-16 md:gap-32 lg:gap-40 pt-8 md:pt-16">
            <div>
              <p className="text-right text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
                Iterate
              </p>
            </div>
            <div>
              <p className="text-xs md:text-sm lg:text-base text-gray-700">
                This is where the exertion and proper planning happens and our
                team will gather inspiration.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section></section>
    </div>
  );
};

export default WorkingProcess;
