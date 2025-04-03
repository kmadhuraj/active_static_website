import React from "react";
import fb from ".././assets/images/facebook.png"
import insta from ".././assets/images/instagram.png"
import ytube from ".././assets/images/yt.png"
import pintrest from ".././assets/images/pintrest.png"
import tiktok from ".././assets/images/tiktok.png"
import twitter from ".././assets/images/twitter.png"
import telegram from ".././assets/images/telegram.png"
import Pills from "./Pills";
// import linkedIn from ".././assets/images/linkedin.png"

export default function Intergration() {
    const pillsItem=[
    {
        img:fb
    },
    {
        img:insta
    },
    {
        img:ytube
    },
    // {
    //     img:linkedIn
    // },
    {
        img:telegram
    },
    {
        img:tiktok
    },
    {
        img:pintrest
    }
]
  return (
    <>
      <div className="flex flex-col gap-5 h-auto w-full bg-sky-100 p-18 text-center justify-center items-center  ">
        <h1 className="font-medium text-blue-400 md:text-3xl">Integration</h1>
        <h1 className="font-bold text-3xl  md:text-6xl">Integrated with the tools you know and love</h1>
        <p className="md:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          mollitia aut nobis, deleniti pariatur sint.
        </p>


        {/* pills container */}
        <div className=" gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          <Pills pills={pillsItem}/>
        </div>
      </div>
    </>
  );
}
