import React from "react";
import person from "../../assets/images/auther1.png";
export default function TestemonialCard({ testimonial }) {
  return (
    <>
      {testimonial.map((testi, index) => (
        <div key={index} className="flex flex-col  p-10 w-80 sm:w-96 md:w-2xl  lg:w-6xl rounded-4xl items-start gap-4  bg-[#eff0f2]">
          <p className=" h-auto font-thin">
            "{testi.text}"
          </p>

          <div className="flex gap-3 justify-center items-center">
            <img className="h-9 w-9 rounded-2xl" src={person} alt="" />
            <div className="flex justify-center w-full items-center *: gap-5">
              <h1 className="font-bold">{testi.tName}</h1>
              <hr className="w-9 border-[1px] border-solid" />
              <h1>{testi.from}</h1>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
