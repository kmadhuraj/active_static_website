import React from "react";
import Button from "../button/Button";

export default function PricingCard({pricing}) {
  return (
    <>
    {pricing.map((price,index)=>(
         <div key={index} className={`flex flex-col w-80  sm:w-auto h-[425px]  md:w-2xl lg:w-72 gap-5 items-start p-10 overflow-hidden rounded-3xl ${price.className}`}>
         <h1 className="font-bold text-lg ">{price.title}</h1>
         <p className="text-start">
           {price.desc}
         </p>
         <Button className={price.btnClassName}>{price.button}</Button>
         <p className="font-medium mb-1 w-full h-full">whats included</p>
         
            <ul className="list-disc pl-5">
            {price.listItem.map((list,idx)=>(
                <li className="text-gray-600" key={idx}>{list}</li>
            ))}
            </ul>


          
       </div>
    ))}
     
    </>
  );
}
