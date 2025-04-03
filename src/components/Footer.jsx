import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white p-20">
        <div className="container mx-auto gap-3 flex flex-col lg:flex-row justify-between">
          
          <div className="mb-8 lg:mb-0 lg:w-1/3 flex flex-col gap-4">
            <h2 className="text-xl  font-semibold mb-2">
              Subscribe to our newsletter
            </h2>
            <div className="flex w-80 ms:w-[100px]  md:w-96  lg:w-72 p-4 bg-white rounded-[50px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-2 lg:w-40 outline-none  text-black "
                
              />
              <button className="bg-purple-600 rounded-[50px] text-white px-4 ">
                Subscribe
              </button>
              
            </div>
            <p className="text-sm mt-2">
              By subscribing to our newsletter you agree with our{" "}
              <a href="#" className="underline">
                Terms and Conditions
              </a>
              .
            </p>
          </div>

          {/* Contact Section */}
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <h3 className="font-semibold text-xl mb-2">Contact</h3>
            <p>us@active-app.com</p>
          </div>

          {/* Solutions Section */}
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <h3 className="font-semibold mb-2 text-xl">Solutions</h3>
            <ul className="space-y-1">
              <li>Responsive Web Design</li>
              <li>Responsive Prototyping</li>
              <li>Design to Code</li>
              <li>Static Website Builder</li>
              <li>Static Website Generator</li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <h3 className="font-semibold mb-2 text-xl">Company</h3>
            <ul className="space-y-1">
              <li>About</li>
              <li>Team</li>
              <li>News</li>
              <li>Partners</li>
              <li>Careers</li>
              <li>Press & Media</li>
            </ul>
          </div>

          {/* Solutions list */}
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <h3 className="font-semibold mb-2 text-xl">Solutions</h3>
            <ul className="space-y-1">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Crunchbase</li>
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>

        <div className="h-[0.5px] mt-8 w-full  bg-white"></div>
        {/* Bottom Copyright Section */}
        <div className="mt-8 flex flex-col gap-3">
            <h1 className="text-4xl font-bold">Active</h1>
          <p>Copyright © Active - 2022</p>
        </div>
      </footer>
    </>
  );
}
