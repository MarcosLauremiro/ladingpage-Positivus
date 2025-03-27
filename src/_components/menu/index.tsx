"use client";

import { useState } from "react";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="hidden lg:flex lg:gap-6 lg:items-center">
        <a href="#about" className="text-black">
          About us
        </a>
        <a href="#services" className="text-black">
          Services
        </a>
        <a href="#cases" className="text-black">
          Use Cases
        </a>
        <a href="#pricing" className="text-black">
          Pricing
        </a>
        <a href="#blog" className="text-black">
          Blog
        </a>
        <button className="border border-black text-black py-4.5 px-7 rounded-2xl">
          Request a quote
        </button>
      </nav>
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-center lg:hidden"
      >
        <span
          className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <nav
        className={`${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
        } 
        absolute top-full left-0 right-0 bg-white p-4 flex-col gap-4 lg:hidden
        transform transition-all duration-300 ease-out
        ${isOpen ? "flex items-center" : "hidden"}`}
      >
        <a href="#about" className="text-black">
          About us
        </a>
        <a href="#services" className="text-black">
          Services
        </a>
        <a href="#cases" className="text-black">
          Use Cases
        </a>
        <a href="#pricing" className="text-black">
          Pricing
        </a>
        <a href="#blog" className="text-black">
          Blog
        </a>
        <button className="border border-black text-black py-4.5 px-7 rounded-2xl">
          Request a quote
        </button>
      </nav>
    </>
  );
}
