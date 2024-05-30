"use client";
import Link from "next/link";
import BackgroundAnimationComponent from "./components/common";
import MagneticEffect from "./components/common/magneticEffect/magneticEffect";
import BannerComponent from "./components/banner/banner";

export default function Home() {
  return (
    <main className="">
      <BannerComponent />

      {/* <Link
          className="my-10 text-center p-2 bg-blue-600"
          href={"/helloworld"}
        >
          Hello World
        </Link>
      
      <MagneticEffect>
        <p> Rakib</p>
      </MagneticEffect> */}

      {/* <BackgroundAnimationComponent /> */}

      <div className="absolute top-0 left-0 ">
        <BackgroundAnimationComponent />
      </div>

      <div className="bg-gray-500 h-96">
        <p>lorem</p>
      </div>
    </main>
  );
}
