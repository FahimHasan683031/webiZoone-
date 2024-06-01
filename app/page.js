"use client";

import BannerComponent from "./components/banner/banner";
import Services from "./components/services";

export default function Home() {
  return (
    <main className="">
      <BannerComponent />
      <Services />
      <div className="bg-gray-500 h-96">
        <p>lorem</p>
      </div>
    </main>
  );
}
