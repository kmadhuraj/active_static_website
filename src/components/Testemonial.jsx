import React from "react";
import TestemonialCard from "./cards/TestemonialCard";
import ActionBar from "./ActionBar";
export default function Testemonial() {
  const testimonialList = [
    {
      text: "dwdjwjd  w jh Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, risus eget feugiat fermentum, erat lectus gravida odio, sit amet fermentum nisi libero et justo. Donec ut mauris non mauris fermentum interdum ",
      tName: "Andy Smith",
      from: "Vista Social",
    },
    {
      text: "wdxxxxxxxxxxx Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, risus eget feugiat fermentum, erat lectus gravida odio, sit amet fermentum nisi libero et justo. Donec ut mauris non mauris fermentum interdum",
      tName: "Jessica Smith",
      from: "Social Cbhhvhv",
    },
    {
      text: "dllllllll Lorem ipsujvvhjvm dolor sit amet, consectetur adipiscing elit. Nullam vehicula, risus eget feugiat fermentum, erat lectus gravida odio, sit amet fermentum nisi libero et justo. Donec ut mauris non mauris fermentum interduml ",
      tName: "Logan Boy",
      from: "BeMe",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-5 items-center">
        <div className="text-center flex items-center justify-center flex-col  w-80 sm:w-96 md:w-xl  lg:w-full ">
          <h1 className="text-lg font-bold text-blue-400">Testemonial</h1>
          <h1 className="text-2xl font-bold">What people say about Active</h1>
        </div>

        <div className="flex flex-col gap-5">
          <TestemonialCard testimonial={testimonialList} />
        </div>

        <div>
          <ActionBar></ActionBar>
        </div>
      </div>
    </>
  );
}
