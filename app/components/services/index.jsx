/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SystemDesign from "../../../public/feature_1.webp";
import DesignDev from "../../../public/feature_2.webp";
import Backend from "../../../public/feature_3.webp";
import Image from "next/image";
import ScrollAnimation from "../common/scrollAnimation/ScrollAnimation";

export default function Services() {
  return (
    <div className="">
      <div className="mb-16 overflow-hidden mt-56 max-w-screen-xl lg:px-5 xl:px-0 mx-auto">
        <ScrollAnimation
          initialPosition="100%"
          finalPosition="0%"
          duration={1}
          delay={0.7}
          position="y"
        >
          <div className="flex flex-col justify-center items-center lg:justify-normal lg:items-start">
            <h1 className="md:text-6xl text-4xl font-bold">
              Services we offer
            </h1>
            <h1 className="md:text-2xl text-xl font-semibold mt-2">
              Website Design & Development
            </h1>
            <p className="mt-8 text-gray-600 text-lg text-center">
              We build all types of websites. Some websites are listed below
            </p>
          </div>
        </ScrollAnimation>
      </div>
      <div className="flex flex-col gap-10 l">
        {/* step 1 */}
        <div
          className="steps max-md:p-3 border border-[#252525] p-10 
         shadow-lg flex justify-between gap-10 items-start max-md:flex-wrap max-md:flex-col-reverse"
        >
          {/* left side  */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-10 items-center max-md:flex-wrap max-md:gap-2">
              <h1 className="uppercase text-[#7f8bf1]  text-lg tracking-wider codefont">
                001 ///
              </h1>
              <h2 className="text-white font-extrabold text-xl">
                System design & mindmapping
              </h2>
            </div>
            <article className="text-[#f5f1f1] font-light w-full ">
              Designing for future scalability ensures that your product can
              smoothly accommodate updates and new features while managing
              database server costs efficiently. To achieve this, focus on
              creating a modular architecture. By using a microservices
              approach, you can update or add features independently, minimizing
              disruptions. Containerization with tools like Docker ensures
              consistent environments and makes it easy to scale services
              horizontally.
              <br />
              <br />
              Opt for cloud-based databases from providers like AWS, Google
              Cloud, or Azure. These services offer automatic scaling, backups,
              and maintenance, reducing the operational workload. Implement a
              multi-tiered storage strategy: use high-performance storage for
              frequently accessed data and cost-effective options for archival.
              <br />
              <br />
              Serverless computing, such as AWS Lambda or Google Cloud
              Functions, can significantly reduce costs by charging only for
              actual compute time used, ideal for variable workloads. For
              database costs, utilize the pay-as-you-go model to scale resources
              according to demand, avoiding over-provisioning.
              <br />
              <br />
              By designing a modular, containerized system with scalable
              cloud-based solutions and a focus on cost-effective storage and
              serverless computing, you ensure that your product can grow and
              adapt efficiently, keeping costs under control.
            </article>
          </div>
          {/* right side  */}
          <div>
            <Image
              src={SystemDesign}
              alt="SystemDesign"
              className="h-[60%] w-[60%] m-auto  block max-md:w-full"
            />
          </div>
        </div>
        {/* step 2 */}
        <div
          className="steps max-md:p-3 border border-[#252525] p-10 
         shadow-lg flex justify-between gap-10 items-start max-md:flex-wrap max-md:flex-col-reverse"
        >
          {/* left side  */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-10 items-center max-md:flex-wrap max-md:gap-2">
              <h1 className="uppercase text-[#7f8bf1]  text-lg tracking-wider codefont">
                002 ///
              </h1>
              <h2 className="text-white font-extrabold text-xl">
                Design and develop
              </h2>
            </div>
            <article className="text-[#f5f1f1] font-light w-full ">
              Design and development begin with creating a clear visual
              blueprint of the project. Initially, I design the project in
              Figma, but if the client does not have a User Interface (UI)
              ready, I sometimes start with hand-drawn diagrams. Once the design
              is approved or provided by the client, I translate it into a
              Next.js application.
              <br />
              <br />
              For state management, I use React Redux to ensure that the
              application's state is efficiently managed and updated. This
              approach helps maintain a consistent state across the application,
              making it easier to handle complex state interactions.
              <br />
              <br />
              API requests are handled server-side, where I set up endpoints to
              interact with the backend. Data fetching and caching mechanisms
              are implemented to ensure that data is retrieved efficiently and
              stored temporarily for quick access. This reduces server load and
              improves the user experience by delivering faster response times.
              Based on user requests, the cached data is displayed, ensuring
              that the application remains responsive and performant.
            </article>
          </div>
          {/* right side  */}
          <div>
            <Image
              src={DesignDev}
              alt="DesignDev"
              className="h-[90%] w-[90%] m-auto  max-md:w-full max-md:h-[40%]"
            />
          </div>
        </div>
        {/* step 3 */}
        <div
          className="steps max-md:p-3 border border-[#252525] p-10 
         shadow-lg flex justify-between gap-10 items-start max-md:flex-wrap max-md:flex-col-reverse"
        >
          {/* left side  */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-10 items-center max-md:flex-wrap max-md:gap-2">
              <h1 className="uppercase text-[#7f8bf1]  text-lg tracking-wider codefont">
                003 ///
              </h1>
              <h2 className="text-white font-extrabold text-xl">
                scalable backend and API
              </h2>
            </div>
            <article className="text-[#f5f1f1] font-light w-full ">
              To create a scalable backend and API, I use Node.js and
              Express.js. For database management, I rely on MongoDB with
              Mongoose as the ORM. For authentication, I implement JWT (JSON Web
              Tokens), Passport.js, sessions, and cookies to ensure secure and
              efficient user authentication Pes. Passwords are hashed before
              being saved into the database to enhance security.
              <br />
              <br />
              For smaller projects, I sometimes use Next.js for the backend,
              leveraging its server-side rendering and API route capabilities.
              Depending on the client's requirements, I also integrate cloud
              storage solutions like Cloudinary for media assets and AWS S3 for
              scalable object storage. This approach ensures that the backend is
              robust, secure, and adaptable to various project needs.
              <br />
              <br />I use Stripe for handling payments and integrate external
              APIs to meet various client-specific needs, ensuring a
              comprehensive and versatile backend solution.
            </article>
          </div>
          {/* right side  */}
          <div>
            <Image
              src={Backend}
              alt="Backend"
              className="h-[60%] w-[60%] m-auto  block max-md:w-full max-md:h-[40%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
