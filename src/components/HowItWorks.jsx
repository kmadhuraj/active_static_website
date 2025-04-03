import React from "react";
import Button from "./button/Button";
import bnr from "./../assets/images/photpbanner.png";
import Category from "./Category";
import pastedImg from ".././assets/images/pastedImg.png";
import Pricing from "./Pricing";
export default function HowItWorks() {
  const CategoryList = [
    {
      title: "1-Act",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, enim.",
      img: pastedImg,
      className: "bg-white ",
    },
    {
      title: "2-Act",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, enim.",
      img: pastedImg,
      className: "bg-black text-white",
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center  bg-[#211062]">
        <div className="flex flex-col justify-center items-center ">
          <div className="flex flex-col w-80 sm:w-96 md:w-xl  lg:w-full justify-center text-center items-center h-40  text-white">
            <p className=" text-sm md:text-xl">How It Works</p>
            <h1 className="font-bold text-3xl  md:text-4xl">
              Being social and getting leads has never been easier
            </h1>
          </div>

          <div className="bg-[#5228f5] text-white w-80 sm:w-96 md:w-3xl rounded-2xl">
            <div className="p-10 flex flex-col gap-6">
              <h1 className="font-bold text-2xl">1-Signup</h1>
              <p className="">vwqdvvqdhgvdgqvdbcqdyhhguyf</p>
              <Button>Get Started</Button>
              <img className="rounded-b-none" src={bnr} alt="pasted imgage" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row  gap-3 p-10">
            <Category catgry={CategoryList} />
          </div>

          
        </div>
      </div>
    </>
  );
}
