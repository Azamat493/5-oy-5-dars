import React, { useState } from "react";
import Frame1 from "../assets/images/Frame34662.png";
import Frame2 from "../assets/images/347054091401339.jpeg";
import Frame3 from "../assets/images/green.jpg";

const Showcase = () => {
  const images = [Frame1, Frame2, Frame3];
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#1c1c1c] px-0 py-6 sm:px-6">
      <div className="max-w-[1200px] mx-auto w-[90%] relative">
        <div
          className="relative h-[200px] smm:h-[300px] lg:h-[500px] rounded-[20px] bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${images[current]})` }}
        >
          <div className="flex flex-col justify-center items-center p-6 sm:p-12 text-center">
            <h2 className="font-semibold text-2xl sm:text-4xl text-white mb-0 sm:mb-4">
              Compact cars
            </h2>
            <p className="font-normal text-sm sm:text-base text-white max-w-[350px] sm:max-w-[416px]">
              Rent cars as you are comfortable and where you are comfortable.
            </p>
          </div>
        </div>
        <div className="mt-4 sm:absolute sm:bottom-[-30px] sm:left-1/2 sm:transform sm:-translate-x-1/2 w-full max-w-[600px] px-0 sm:px-4">
          <div className="flex items-center p-1 bg-white rounded-full shadow-[0_4px_10px_0_rgba(0,0,0,0.15)]">
            <input
              type="text"
              placeholder="Find the car of your dreams"
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 font-medium text-sm sm:text-lg text-[#555] outline-none rounded-l-full"
            />
            <button className="bg-[#299764] cursor-pointer hover:bg-green-600 w-[50px] sm:w-[58px] h-[50px] sm:h-[58px] text-white p-3 sm:p-4 rounded-full transition-colors flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-6 sm:h-6"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.385 15.4458C11.7348 17.5685 7.85532 17.4014 5.39854 14.9446C2.7625 12.3086 2.7625 8.0347 5.39854 5.39866C8.03458 2.76262 12.3084 2.76262 14.9445 5.39866C17.4013 7.85544 17.5683 11.7349 15.4457 14.3851L20.6013 19.5408C20.8942 19.8337 20.8942 20.3085 20.6013 20.6014C20.3084 20.8943 19.8335 20.8943 19.5407 20.6014L14.385 15.4458ZM6.4592 13.8839C4.40895 11.8337 4.40895 8.50957 6.4592 6.45932C8.50945 4.40907 11.8336 4.40907 13.8838 6.45932C15.9326 8.50807 15.9341 11.8288 13.8883 13.8794C13.8868 13.8809 13.8853 13.8824 13.8838 13.8839C13.8823 13.8854 13.8808 13.8869 13.8793 13.8884C11.8287 15.9342 8.50795 15.9327 6.4592 13.8839Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="absolute bottom-25 sm:bottom-12 left-15 transform -translate-x-1/2 flex gap-2 lg:bottom-10">
          {images.map((_, index) => (
            <div
              key={index}
              className={`${
                index === current ? "w-6 sm:w-8" : "w-1.5 sm:w-2"
              } h-1.5 sm:h-2 bg-white rounded-full ${
                index === current ? "opacity-100" : "opacity-50"
              }`}
            ></div>
          ))}
        </div>
        <div className="absolute bottom-22 sm:bottom-12 right-4 lg:bottom-4 lg:right-12 flex gap-2">
          <button
            onClick={prevSlide}
            className="bg-white hover:bg-[#238054] flex items-center justify-center cursor-pointer bg-opacity-70 hover:bg-opacity-100 w-8 h-8 sm:w-9 sm:h-9 rounded-full transition-all group"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#555555] group-hover:text-white w-3.5 h-3.5 sm:w-5 sm:h-5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.6919 6.22481C11.4479 5.98073 11.0521 5.98073 10.8081 6.22481L7.47473 9.55814C7.23065 9.80222 7.23065 10.1979 7.47473 10.442L10.8081 13.7754C11.0521 14.0194 11.4479 14.0194 11.6919 13.7754C11.936 13.5313 11.936 13.1356 11.6919 12.8915L8.80055 10.0001L11.6919 7.10869C11.936 6.86461 11.936 6.46888 11.6919 6.22481Z"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="bg-white hover:bg-[#238054] flex items-center justify-center cursor-pointer bg-opacity-70 hover:bg-opacity-100 w-8 h-8 sm:w-9 sm:h-9 rounded-full transition-all group"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#555555] group-hover:text-white w-3.5 h-3.5 sm:w-5 sm:h-5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.30806 6.22481C8.55214 5.98073 8.94786 5.98073 9.19194 6.22481L12.5253 9.55814C12.7694 9.80222 12.7694 10.1979 12.5253 10.442L9.19194 13.7754C8.94786 14.0194 8.55214 14.0194 8.30806 13.7754C8.06398 13.5313 8.06398 13.1356 8.30806 12.8915L11.1994 10.0001L8.30806 7.10869C8.06398 6.86461 8.06398 6.46888 8.30806 6.22481Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;