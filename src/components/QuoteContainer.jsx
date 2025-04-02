import React from "react";
import auther from"./../assets/images/auther1.png"

export default function QuoteContainer() {
  return (
    <>
      <div className="flex flex-col justify-center gap-7 p-20  items-center text-white  bg-black">
        <div className="w-full h-auto md:w-96 lg:w-[40rem] flex flex-col gap-10">
          <h3  className="sm:text-2xl md:text-4xl" >
            “Scale your content, grew lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.”
          </h3>
        <div className="flex gap-3">
            <img className='rounded-4xl h-10 w-10' src={auther} alt="auther" />
            <p className="text-[#5328f5] font-bold md:text-xl">Alice,Founder and CEO of Fonix</p>
        </div>
        </div>
        
      </div>
    </>     
  );
}
