import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Autoplay, Pagination } from "swiper/modules";
import React from "react";

const ClientReview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  my-20 max-w-screen-md mx-auto px-5">
      <div className="text-2xl md:text-3xl lg:text-4xl my-5 text-center md:text-left font-bold text-slate-700 leading-7 md:leading-10">
        Lets see what <br></br> our clients say
      </div>
      <div>
        <Swiper
          // slidesPerView={3}
          spaceBetween={10}
          freeMode={true}
          pagination={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Autoplay, Pagination]}
          className="mySwiper  "
          breakpoints={{
            // For small device
            640: {
              slidesPerView: 1,
            },
            // For medium device
            768: {
              slidesPerView: 1,
            },
            // For larger screens
            1024: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide className="mb-8">
            <h3 className="text-lg font-medium text-slate-900 mb-[2px]">
              Conor
            </h3>
            <h3 className=" mb-3 text-gray-500 text-base font-medium">
              CEO at{" "}
              <span className="text-lg font-medium text-slate-900">podium</span>
            </h3>
            <p class="mb-6 text-gray-500 text-sm leading-7 ">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
            </p>
          </SwiperSlide>
          <SwiperSlide className="mb-8">
            <h3 className="text-lg font-medium text-slate-900 mb-[2px]">
              Conor
            </h3>
            <h3 className=" mb-3 text-gray-500 text-base font-medium">
              CEO at{" "}
              <span className="text-lg font-medium text-slate-900">podium</span>
            </h3>
            <p class="mb-6 text-gray-500 text-sm leading-7 ">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
            </p>
          </SwiperSlide>
          <SwiperSlide className="mb-8">
            <h3 className="text-lg font-medium text-slate-900 mb-[2px]">
              Conor
            </h3>
            <h3 className=" mb-3 text-gray-500 text-base font-medium">
              CEO at{" "}
              <span className="text-lg font-medium text-slate-900">podium</span>
            </h3>
            <p class="mb-6 text-gray-500 text-sm leading-7 ">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ClientReview;
