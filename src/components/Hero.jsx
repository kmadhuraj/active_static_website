import React from "react";
import Navbar from "../header/Navbar";
import Button from "./button/Button";
import Feature from "./Feature";
import QuoteContainer from "./QuoteContainer";
import Statistics from "./Statistics";
import Banner from "./Banner";
import Intergration from "./Intergration";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import Testemonial from "./Testemonial";
import ActionBar from "./ActionBar";
import Faq from "./Faq";
import Footer from "./Footer";
export default function Hero() {
  return (
    <>
      <div className="bg-[#5228f5] flex flex-col ">
        {/* relative top-16 flex justify-center */}
        <div className="flex flex-col  md:h-[800px] h-[400px]   items-center gap-5 md:gap-40 mt-10">
          <div className="">
            <Navbar></Navbar>
          </div>
          <div className=" flex flex-col items-center gap-10 text-center text-white">
            <h1 className="text-3xl md:text-7xl font-bold">
              Take Control of Your Social Media
            </h1>
            <div className="text-lg md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, nulla.
            </div>
            <div>
              <Button className="w-72 md:w-44">Get Started</Button>
            </div>
          </div>
        </div>

        {/* feature  */}
        <div>
          <Feature></Feature>
        </div>

        <>
          <QuoteContainer />
        </>

        <div className="p-5">
          <Statistics />
        </div>

        <>
          <Banner />
        </>

        <>
          <Intergration />
        </>

        <>
          <HowItWorks></HowItWorks>
        </>
        <div className="w-full">
          <Pricing />
        </div>

        <div>
          <Testemonial></Testemonial>
        </div>
      </div>
      <div className="p-10">
        <Faq></Faq>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </>
  );
}
