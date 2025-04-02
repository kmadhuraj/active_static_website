import React from "react";
import Button from "./button/Button";
import banner from "./../assets/images/banner.png";
import Category from "./Category";
export default function Banner() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-7 bg-white p-10 md:w-full">
        <div className="flex flex-col   gap-6 justify-center">
          <h2 className="font-medium text-blue-500 text-xl">
            Improve Scheduling{" "}
          </h2>
          <h2 className="font-bold text-black text-4xl">
            Powerfull scheduling thats saves your time{" "}
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
            aperiam Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ratione, vitae..
          </p>
          <Button>Get Started</Button>
        </div>
        <div>
          <div className="bg-white h-28 w-28 border-none absolute bottom-[inherit]  rounded-br-full"></div>

          <img
            className="h-96 w-auto border-none bg-white "
            src={banner}
            alt="banner img "
          />
        </div>
      </div>
    </>
  );
}
