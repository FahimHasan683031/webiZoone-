"use client";

import BannerComponent from "./components/banner/banner";
import Services from "./components/services";

export default function Home() {
  return (
    <main className="">
      <BannerComponent />
      <Services />
    </main>
  );
}
