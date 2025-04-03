import React from "react";

export default function Card({ symbol,title,description }) {
  return (
    <div className="flex flex-col p-6 lg:p-8 gap-4 h-auto w-full md:w-80 lg:w-96 items-start rounded-3xl overflow-hidden bg-white shadow-lg">
      <span className="text-2xl md:text-3xl lg:text-4xl">{symbol}</span>
      <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">{title}</h1>
      <p className="text-sm md:text-base break-words w-full p-3 lg:text-lg  text-gray-600">
        {description}
      </p>
    </div>
  );
}
