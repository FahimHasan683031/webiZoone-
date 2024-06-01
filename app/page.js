"use client";

import BannerComponent from "./components/banner/banner";
import ClientReview from "./components/clientReview/ClientReview";
import Newsletter from "./components/newsletter/Newsletter";
import Services from "./components/services";
import WorkingProcess from "./components/workingProcess/WorkingProcess";

export default function Home() {
  return (
    <main className="">
      <BannerComponent />
      {/* <Services /> */}
      <Newsletter />
      <ClientReview />
      <WorkingProcess />
    </main>
  );
}
