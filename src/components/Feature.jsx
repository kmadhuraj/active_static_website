import React from "react";
import dashBoard from "../assets/images/dashBoard.avif";
import Card from "./cards/Card";
import { FaClock, FaPhotoVideo, FaChartArea } from "react-icons/fa";
export default function Feature() {
  const cardsList = [
    {
      symbol: <FaClock />,
      title: "Schedule",
      description: "whbfwhfhbwfhwvfrfvffwfi ejhvdj djh ejh ugwvdyufwhfrwuf",
    },
    {
      symbol: <FaPhotoVideo />,
      title: "Publish",
      description:
        "dwgvhcgwvwvwg echwhverwjhfdjavdjwvdqgfutdewdhwjevdeverjfvfh",
    },
    {
      symbol: <FaChartArea />,
      title: "Analyze",
      description:
        "whwsvsmelkjqjdqw dmqdkuqegdiu sdhqihd  uhwefiu adgywegw kwekfbhw",
    },
  ];
  return (
    <>
      <div className="bg-[#eff0f2] flex flex-col items-center">
        <div className="bg-[#633df6] rounded-[50px] p-10 relative sm:top-[-100px]  md:top-[-100px]  top-[-50px]">
          <div className="bg-[#7350f7] p-10 rounded-[50px]">
            <img
              className="h-96 w-auto md:h-[100%] relative  rounded-[50px]"
              src={dashBoard}
              alt="dash board"
            />
          </div>
        </div>

        <div className="flex flex-col items-center text-center bg-yellow-500 w-full max-w-7xl p-10 gap-6">
        <h1 className="font-bold text-3xl md:text-5xl xl:text-6xl">
          Let's grow your social media presence
        </h1>
        <p className="text-lg md:text-2xl xl:text-3xl">
          Manage, schedule, and track your social media activity easily.
        </p>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl">
          {cardsList.map((card, index) => (
            <Card
              key={index}
              symbol={card.symbol}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
