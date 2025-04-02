import React from "react";

export default function Pills({ pills }) {
  return (
    <>
      {pills.map((pill, index) => (
        <div key={index} className="h-[81px] w-[200px] bg-white rounded-[50px] p-[20px]">
          <img src={pill.img} alt=" pills img" />
        </div>
      ))}
    </>
  );
}
