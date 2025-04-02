import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "../components/button/Button";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>

<div className="flex justify-between items-center bg-white md:h-24  h-16 w-96 sm:w-[30rem] md:w-[60rem] lg:w-[70rem]  px-7  rounded-4xl text-xl shadow-md">
      {/* Logo */}
      <div className="text-3xl font-bold">Active</div>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={28} /> : < FaBars size={28} />}
      </div>


      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex gap-8">
        <a href="">Solutions</a>
        <a href="">How it works</a>
        <a href="">Prices</a>
      </div>

      <div className="hidden md:flex items-center gap-5">
        <a href="">Sign In</a>
        <Button>Get Started</Button>
        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Get started</button> */}
      </div>

      {/* Mobile Menu (Visible when menuOpen is true) */}
      {menuOpen && (
        <div className="absolute top-24 left-0 w-full bg-white shadow-md flex flex-col items-center gap-5 py-5 md:hidden">
          <a href="">Solutions</a>
          <a href="">How it works</a>
          <a href="">Prices</a>
          <a href="">Sign In</a>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Get started</button>
        </div>
      )}
    </div>
    </>
  );
}
