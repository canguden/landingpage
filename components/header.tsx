import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full ">
      <div className="max-w-5xl mx-auto">
        <div className="relative flex place-items-center ">
          <div className="justify-between flex items-center w-full">
            <div>
              <Image
                className="relative "
                src="/logo.svg"
                alt="Yellowspots AI Logo"
                width={300}
                height={37}
                priority
              />
            </div>
          </div>
          <div className=" whitespace-nowrap text-xl">
            <button className="flex items-center gap-2 p-2 border border-transparent hover:border-gray-200 hover:bg-gray-50 rounded-md">
              Jenny AI <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
