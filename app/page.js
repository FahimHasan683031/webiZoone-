"use client";

import BannerComponent from "./components/banner/banner";
import Services from "./components/services";
import FeaturedWorks from "./components/featuredWorks/FeaturedWorks";
import About from "./components/about/About";


export default function Home() {
  return (
    <main className="">
      <BannerComponent />
      <Services />
      <FeaturedWorks/>
      <About/>
    </main>
  );
}
