import React from "react";
import PricingCard from "./cards/PricingCard";
export default function Pricing() {
  const PricingCardList = [
    {
      title: "wcdch",
      desc: "fbwagbwsdvgjv wvjv whbwf  dhbwf iuhuewe dhbf ",
      listItem: ["hjvdjhvw", "wehd", "edjvdgv"],
      className: " bg-white",
    },
    {
      title: "dhgygud",
      desc: "whBFHBIWWF EWFHW QSIHUWE VIHFBW W DHODWEK ",
      listItem: ["qvggggggg", "wehd", "edjvdgv"],
      className: "bg-white",
    },
    {
      title: "kfbbehbhebh",
      desc: "hbfhbk bfikwf wijfiwj  wquygdu ygyu o3 f igwugy qweydgyfdwf qgfu dqige ",
      listItem: ["xxxxxxxx", "wehd", "edjvdgv"],
      className: "bg-black text-white",
    },
  ];
  return (
    <>
      <div className="flex flex-col p-10  gap-5 items-center text-center bg-[#5228f5]">
        <div className="flex flex-col w-80 sm:w-96 md:w-xl  lg:w-full items-center gap-5 text-white">
          <h1 className="font-bold text-2xl">
            Pricing for all kind of businesses
          </h1>
          <p className="font-thin">
            ewygdvdwuvdwevduvdqduygqdyudhbqhduydgwhd Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Vero, explicabo!
          </p>
          <div className="flex gap-4 ">
            <p>montly</p>
            <p>yearly</p>
          </div>

          <div className="flex flex-col lg:flex-row  gap-5">
          <PricingCard pricing={PricingCardList} />
        </div>
        </div>
        {/* here */}
      </div>
    </>
  );
}
