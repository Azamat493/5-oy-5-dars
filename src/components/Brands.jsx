import React from "react";
import image9 from "../assets/images/image9.png";
import image10 from "../assets/images/image10.png";
import image11 from "../assets/images/image11.png";
import image12 from "../assets/images/image12.png";
import Group21 from "../assets/images/Group21.png";
import volkswagen from "../assets/images/volkswagen.png";

const Brands = () => {
  return (
    <div>
      <section className="bg-[#1c1c1c] py-8 px-4 sm:py-12 sm:px-6">
        <div className="max-w-[1170px] mt-[60px] mx-auto w-full">
          <h3 className="font-medium text-xl sm:text-2xl text-start text-white font-family mb-6 sm:mb-8">
            More than 50 brands of cars
          </h3>
          <div className="flex flex-wrap sm:items-center justify-center lggg:justify-between gap-6 sm:gap-6">
            <img src={image9} alt="Ford" className="h-10 w-[140px]" />
            <img src={image10} alt="Nissan" className="h-10 w-[140px]" />
            <img src={image11} alt="Toyota" className="h-10 w-[140px]" />
            <img src={image12} alt="Dodge" className="h-10 w-[140px]" />
            <img src={Group21} alt="Hyundai" className="h-10 w-[140px]" />
            <img src={volkswagen} alt="Jeep" className="h-10 w-[140px]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;