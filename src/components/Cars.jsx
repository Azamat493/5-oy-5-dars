import React from "react";
import { carsData } from "../Api";

const Cars = () => {
  return (
    <section className="py-12 mt-10  px-6 bg-[#1c1c1c]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-semibold text-4xl text-center text-white font-family mb-4">
          Choose the car of your dreams
        </h2>
        <p className="font-normal text-base leading-[150%] text-center text-white font-family mb-12">
          We provide our customers with the most incredible driving emotions.{" "}
          <br /> That is why there are only world-class cars in our fleet
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          <button className="bg-[#1c1c1c] cursor-pointer hover:bg-[#299764] px-6 sm:px-10 py-[19px] rounded-[100px] border-[1.50px] border-solid border-[#333] transition-colors whitespace-nowrap">
            <span className="font-medium text-base text-center text-white font-family">
              Compact
            </span>
          </button>
          <button className="bg-[#1c1c1c] cursor-pointer hover:bg-[#299764] px-6 sm:px-10 py-[19px] rounded-[100px] border-[1.50px] border-solid border-[#333] transition-colors whitespace-nowrap">
            <span className="font-medium text-base text-center text-white font-family">
              Sports cars
            </span>
          </button>
          <button className="bg-[#1c1c1c] cursor-pointer hover:bg-[#299764] px-6 sm:px-10 py-[19px] rounded-[100px] border-[1.50px] border-solid border-[#333] transition-colors whitespace-nowrap">
            <span className="font-medium text-base text-center text-white font-family">
              Vans
            </span>
          </button>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {carsData.map((car) => (
            <div
              key={car.id}
              className="bg-[#272727] rounded-[16px] p-4 overflow-hidden flex flex-col transition-all duration-500 ease-out hover:-translate-y-[10px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-[#299764]"
            >
              <div className="pl-8 pt-3">
                <h3 className="text-white text-xl font-semibold font-family mb-0 sm:mb-1">
                  {car.name}
                </h3>
                <p className="text-white text-sm font-normal font-family mb-0 sm:mb-4">
                  {car.type}
                </p>
              </div>
              <div className="sm:h-[200px] h-[300px] w-full flex items-center justify-center">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full sm:object-cover object-contain"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <div className="flex items-center gap-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.99996 3.125C8.27407 3.125 6.87496 4.52411 6.87496 6.25C6.87496 7.97589 8.27407 9.375 9.99996 9.375C11.7258 9.375 13.125 7.97589 13.125 6.25C13.125 4.52411 11.7258 3.125 9.99996 3.125Z"
                        fill="white"
                      />
                      <path
                        d="M6.66663 11.0417C4.94074 11.0417 3.54163 12.4408 3.54163 14.1667V15.1569C3.54163 15.7846 3.99653 16.3198 4.61602 16.4209C8.18171 17.0031 11.8182 17.0031 15.3839 16.4209C16.0034 16.3198 16.4583 15.7846 16.4583 15.1569V14.1667C16.4583 12.4408 15.0592 11.0417 13.3333 11.0417H13.0492C12.8955 11.0417 12.7427 11.066 12.5966 11.1137L11.8753 11.3492C10.6567 11.7471 9.34319 11.7471 8.12462 11.3492L7.40335 11.1137C7.2572 11.066 7.10443 11.0417 6.95068 11.0417H6.66663Z"
                        fill="white"
                      />
                    </svg>
                    <p className="font-medium text-base text-white font-family">
                      {car.seats} Seats
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 2C5.582 2 2 5.582 2 10C2 14.418 5.582 18 10 18C14.418 18 18 14.418 18 10C18 5.582 14.418 2 10 2ZM14 9.6666C14 10.2189 13.5523 10.6666 13 10.6666H11.6666C11.1143 10.6666 10.6666 11.1143 10.6666 11.6666V13.3334C10.6666 13.7016 10.3682 14 10 14C9.63185 14 9.3334 13.7016 9.3334 13.3334V11.6666C9.3334 11.1143 8.88568 10.6666 8.3334 10.6666C7.78112 10.6666 7.3334 11.1143 7.3334 11.6666V13.3333C7.3334 13.7015 7.03491 14 6.6667 14C6.29849 14 6 13.7015 6 13.3333V6.6667C6 6.29849 6.29849 6 6.6667 6C7.03491 6 7.3334 6.29849 7.3334 6.6667V8.3334C7.3334 8.88568 7.78112 9.3334 8.3334 9.3334C8.88568 9.3334 9.3334 8.88568 9.3334 8.3334V6.6666C9.3334 6.29845 9.63185 6 10 6C10.3682 6 10.6666 6.29845 10.6666 6.6666V8.3334C10.6666 8.88568 11.1143 9.3334 11.6666 9.3334C12.2189 9.3334 12.6666 8.88568 12.6666 8.3334V6.6667C12.6666 6.29849 12.9651 6 13.3333 6C13.7015 6 14 6.29849 14 6.6667V9.6666Z"
                        fill="white"
                      />
                    </svg>
                    <p className="text-white text-sm font-medium font-family">
                      {car.transmission}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.875 2.08333C11.875 1.96827 11.7817 1.875 11.6666 1.875H5.83329C4.56764 1.875 3.54163 2.90102 3.54163 4.16667V15.8333C3.54163 17.099 4.56764 18.125 5.83329 18.125H14.1666C15.4323 18.125 16.4583 17.099 16.4583 15.8333V7.62255C16.4583 7.50749 16.365 7.41422 16.25 7.41422H12.5C12.1548 7.41422 11.875 7.13439 11.875 6.78922V2.08333ZM9.99996 8.33333C9.07948 8.33333 8.33329 9.07953 8.33329 10C8.33329 10.9205 9.07948 11.6667 9.99996 11.6667C10.9204 11.6667 11.6666 10.9205 11.6666 10C11.6666 9.07953 10.9204 8.33333 9.99996 8.33333ZM6.66663 15.4167C6.66663 14.036 7.78591 12.9167 9.16663 12.9167H10.8333C12.214 12.9167 13.3333 14.036 13.3333 15.4167C13.3333 15.8769 12.9602 16.25 12.5 16.25H7.49996C7.03972 16.25 6.66663 15.8769 6.66663 15.4167Z"
                        fill="white"
                      />
                      <path
                        d="M13.125 2.35345C13.125 2.1997 13.2855 2.10208 13.4051 2.19866C13.5059 2.28 13.5965 2.3753 13.6737 2.48296L16.1847 5.98121C16.2419 6.06085 16.1799 6.16422 16.0819 6.16422H13.3333C13.2182 6.16422 13.125 6.07094 13.125 5.95588V2.35345Z"
                        fill="white"
                      />
                    </svg>
                    <p className="text-white text-sm font-medium font-family">
                      {car.age}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 11.5499C15 14.4909 12.6215 16.875 9.6875 16.875C6.75349 16.875 4.375 14.4909 4.375 11.5499C4.375 8.60897 9.6875 3.125 9.6875 3.125C9.6875 3.125 15 8.60897 15 11.5499Z"
                        fill="white"
                      />
                    </svg>
                    <p className="text-white text-sm font-medium font-family">
                      {car.fuel}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cars;