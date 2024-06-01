"use client";

import BannerComponent from "./components/banner/banner";
import FeaturedWorks from "./components/featuredWorks/FeaturedWorks";

export default function Home() {


  return (
    <main className="">
      <BannerComponent />

      
      <div className="bg-gray-500 h-96">
        <p>lorem</p>
      </div>
      <FeaturedWorks></FeaturedWorks>
    </main>
  );
}
