import React from "react";
import PricingCard from "./cards/PricingCard";
export default function Pricing() {
  const PricingCardList = [
    {
      title: "Free",
      desc: "Unlimited lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doliqua. ",
      listItem: ["Sed ut pespiciatis unde omnis", "Sed ut pespiciatis unde omnis"],
      button:"Start for free",
      btnClassName:"bg-black text-white",
      className: " bg-white text-black",


    },
    {
      title: "Pay as you go",
      desc: "Launch your lorem for $49/molorem ipsum dolor sit amet, consectetur adipiscing. ",
      listItem: ["Sed ut pespiciatis unde omnis", "Sed ut pespiciatis unde omnis"],
      button:"Upgrade now",
      btnClassName:"bg-black text-white",
      className: "bg-white text-black",
    },
    {
      title: "Enteprice",
      desc: "Custom-built  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doliqua.",
      listItem: ["Sed ut pespiciatis unde omnis", "Sed ut pespiciatis unde omnis", "Sed ut pespiciatis unde omnis","davjhwvemhfwhjvwhfvwfjhvj","dhshvhjvfjhjvjgv"],
      button:"Contact us",
      btnClassName:"bg-white text-black",
      className: "bg-black text-white",
    },
  ];

  return (
    <>
      <div className="flex flex-col p-10  gap-5 items-center text-center bg-[#5228f5]">
        <div className="flex flex-col w-80 sm:w-96 md:w-xl  lg:w-full items-center gap-5 text-white">
          <h1 className="font-bold text-3xl  md:text-4xl">
            Pricing for all kind of businesses
          </h1>
          <p className="font-thin text-xl">
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
