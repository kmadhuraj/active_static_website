import React from "react";
import dashBoard from "../assets/images/dashboard.avif";
import Button from "./button/Button";
export default function ActionBar() {
  return (
    <>
      <div>
        <div className="flex flex-col  gap-2 items-start flex-wrap  bg-blue-500 w-96 p-6 rounded-2xl">
          <div className="flex flex-col  gap-5">
            <h1 className="text-2xl font-bold text-white">Awesome Heading</h1>
            <p className="text-white">
              This is a short description of the content. It provides insight
              and information.
            </p>
            <Button>Start Free</Button>
          </div>

          




          <div className="flex  gap-4">
            <img src={dashBoard} className="w-60 h-auto rounded-lg " />
            <img src={dashBoard} className="w-[80px] h-auto rounded-lg " />
          </div>

        </div>
      </div>
    </>
  );
}
