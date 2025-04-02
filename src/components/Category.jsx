import React from "react";
export default function Category({ catgry }) {
  return (
    <>
      {catgry.map((cat, index) => (
        <div key={ index} className={`flex flex-col  h-96 w-72 sm:w-96 sm:h-96 md:h-72   rounded-2xl items-center justify-center gap-20  text-center overflow-hidden  ${cat.className }`}>
          <div className="h-20 w-40 text-center text-sm flex flex-col justify-centerter gap-2">
            <h1 className="font-bold text-lg">{cat.title}</h1>
            <p>{cat.desc}</p>
          </div>

          <div>
            <img className="h-24 w-auto" src={cat.img} alt="banner " />
          </div>

        </div>
      ))}
    </>
  );
}


