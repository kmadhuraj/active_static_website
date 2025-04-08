import React from "react";
export default function Category({ catgry }) {
  return (
    <>
      {catgry.map((cat, index) => (
        <div key={ index} className={`flex flex-col  h-96 w-72 sm:w-96 sm:h-96 md:h-72 p-5 md:p-10  rounded-2xl items-center justify-center gap-10 text-center overflow-hidden  ${cat.className }`}>
          <div className="h-20 p-5 text-center text-sm flex flex-col justify-center">
            <h1 className="font-bold text-lg">{cat.title}</h1>
            <p>{cat.desc}</p>
          </div>

          <div>
            <img className="h-24 md:h-40 w-auto rounded-2xl  shadow-black shadow-2xl" src={cat.img} alt="banner " />
          </div>

        </div>
      ))}
    </>
  );
}


