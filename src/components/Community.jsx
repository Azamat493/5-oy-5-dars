import React from "react";
import Ava from "../assets/images/Ava.png";

const Community = () => {
  return (
    <div>
      <section className="bg-[#272727] py-6 px-4 sm:py-12 sm:px-6">
        <div className="max-w-[1200px] w-full mx-auto bg-[#1c1c1c] rounded-[20px] overflow-hidden items-stretch flex flex-col lg:flex-row h-auto lg:h-[479px] gap-6 lg:gap-8">
          <div className="flex-1 p-6 sm:p-8 sm:ml-5 flex flex-col items-center justify-center">
            <div className="max-w-[330px] w-full mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.8938 10.1136C14.8938 9.75909 14.8619 9.41819 14.8029 9.09091H10.0938V11.025H12.7847C12.6688 11.65 12.3165 12.1796 11.7869 12.5341V13.7886H13.4028C14.3483 12.9182 14.8938 11.6364 14.8938 10.1136Z"
                    fill="#4285F4"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.0934 15C11.4434 15 12.5753 14.5523 13.4025 13.7886L11.7866 12.5341C11.3389 12.8341 10.7662 13.0113 10.0934 13.0113C8.79116 13.0113 7.68888 12.1318 7.2957 10.95H5.62524V12.2454C6.44797 13.8795 8.13889 15 10.0934 15Z"
                    fill="#34A853"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.29603 10.95C7.19603 10.65 7.13921 10.3295 7.13921 9.99998C7.13921 9.67043 7.19603 9.34997 7.29603 9.04997V7.75452H5.62557C5.28693 8.42952 5.09375 9.19316 5.09375 9.99998C5.09375 10.8068 5.28693 11.5704 5.62557 12.2454L7.29603 10.95Z"
                    fill="#FBBC05"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.0934 6.98864C10.8275 6.98864 11.4866 7.24091 12.0048 7.73637L13.4389 6.30228C12.573 5.49546 11.4412 5 10.0934 5C8.13889 5 6.44797 6.12046 5.62524 7.75455L7.2957 9.05001C7.68888 7.86819 8.79116 6.98864 10.0934 6.98864Z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="font-medium text-base text-[#4285f4] font-family">
                  From Google
                </span>
              </div>
              <h2 className="font-medium text-[38px] leading-[132%] text-white font-family mb-4">
                Hear what the community is saying
              </h2>
              <div className="w-[330px] h-0.5 bg-[linear-gradient(90deg,#ea4335_19.83%,#fbbc05_65%,#34a853_82.29%,#4285f4_100%)] mb-6"></div>
              <p className="font-medium text-sm text-white font-family mb-4">
                More interesting reviews on Instagram
              </p>
              <button className="gradient-btn">
                <h1>Instagram</h1>
              </button>
            </div>
          </div>
          <div className=" bg-[#299764] p-[0px_20px_0px_20px]">
            <div className="flex gap-6">
              <div className="flex-[0_0_730px]  overflow-x-auto scrollbar-custom  flex justify-between">
                <div className="bg-[#299764] rounded-xl h-full sm:p-6 p-2 flex flex-col justify-between">
                  <div className="bg-[#1c1c1c] rounded-[16px] sm:p-6 p-3 max-w-[420px]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img src={Ava} alt="" />
                        <div>
                          <h3 className="font-semibold text-base text-white font-family">
                            Savannah Nguyen
                          </h3>
                          <a
                            href="#"
                            className="font-normal text-sm text-white font-family transition-all duration-300 hover:text-[#34a853] hover:underline hover:underline-offset-4"
                          >
                            savannahnguyen@gmail.com
                          </a>
                        </div>
                      </div>
                      <a
                        href="https://www.google.com/?hl=ru"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          width="42"
                          height="42"
                          viewBox="0 0 42 42"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="transition-transform duration-300 hover:scale-110 cursor-pointer"
                        >
                          <path
                            d="M42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42C32.598 42 42 32.598 42 21Z"
                            fill="white"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M31.2768 21.2387C31.2768 20.4941 31.21 19.7782 31.0859 19.0909H21.1968V23.1525H26.8477C26.6043 24.465 25.8645 25.5771 24.7525 26.3216V28.9562H28.1459C30.1313 27.1282 31.2768 24.4364 31.2768 21.2387Z"
                            fill="#4285F4"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M21.1963 31.5C24.0313 31.5 26.4081 30.5597 28.1454 28.9561L24.752 26.3215C23.8118 26.9515 22.609 27.3238 21.1963 27.3238C18.4615 27.3238 16.1468 25.4768 15.3211 22.9949H11.8131V25.7154C13.5408 29.147 17.0918 31.5 21.1963 31.5Z"
                            fill="#34A853"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.3216 22.995C15.1116 22.365 14.9922 21.692 14.9922 20.9999C14.9922 20.3079 15.1116 19.6349 15.3216 19.0049V16.2845H11.8136C11.1025 17.702 10.6968 19.3056 10.6968 20.9999C10.6968 22.6943 11.1025 24.2979 11.8136 25.7154L15.3216 22.995Z"
                            fill="#FBBC05"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M21.1963 14.6761C22.7379 14.6761 24.122 15.2059 25.2102 16.2464L28.2218 13.2348C26.4034 11.5405 24.0265 10.5 21.1963 10.5C17.0918 10.5 13.5408 12.853 11.8131 16.2846L15.3211 19.005C16.1468 16.5232 18.4615 14.6761 21.1963 14.6761Z"
                            fill="#EA4335"
                          />
                        </svg>
                      </a>
                    </div>
                    <p className="font-normal text-sm leading-[143%] text-white font-family mb-4">
                      Sagittis sed tortor, elementum vitae varius sodales
                      consectetur. Vitae arcu ut morbi bibendum ullamcorper
                      feugiat. Venenatis hendrerit cursus egestas sit ornare
                      nunc vulputate aliquam sapien. Pulvinar nunc consectetur
                      nibh consectetur mollis mauris est mauris amet. Sed hac
                      vehicula id et dui morbi quam pulvinar condimentum.
                      Senectus sed varius interdum nunc, arcu vulputate massa.
                    </p>
                    <div className="w-[372px] h-0 border-[1.50px] border-solid border-[#333]"></div>
                    <div className="mt-5 flex gap-3">
                      <h1 className="font-medium mt-1 text-sm text-white font-family">
                        Star rating:
                      </h1>
                      <div className="flex items-center gap-1">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.7208 2.49686C10.3997 1.9434 9.60042 1.9434 9.27927 2.49686L7.01756 6.39462C6.85892 6.66802 6.58471 6.8546 6.27216 6.90181L2.03356 7.54199C1.32166 7.64952 1.07194 8.54836 1.62636 9.00769L4.78394 11.6237C5.07622 11.8659 5.21366 12.2478 5.14266 12.6207L4.31668 16.9583C4.18611 17.644 4.90594 18.1768 5.52356 17.8516L9.51473 15.75C9.81851 15.5901 10.1816 15.5901 10.4854 15.75L14.4765 17.8516C15.0942 18.1768 15.814 17.644 15.6834 16.9583L14.8574 12.6207C14.7864 12.2478 14.9239 11.8659 15.2162 11.6237L18.3737 9.00769C18.9282 8.54836 18.6784 7.64952 17.9665 7.54199L13.7279 6.90181C13.4154 6.8546 13.1412 6.66802 12.9825 6.39462L10.7208 2.49686Z"
                            fill="#299764"
                          />
                        </svg>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.7208 2.49686C10.3997 1.9434 9.60042 1.9434 9.27927 2.49686L7.01756 6.39462C6.85892 6.66802 6.58471 6.8546 6.27216 6.90181L2.03356 7.54199C1.32166 7.64952 1.07194 8.54836 1.62636 9.00769L4.78394 11.6237C5.07622 11.8659 5.21366 12.2478 5.14266 12.6207L4.31668 16.9583C4.18611 17.644 4.90594 18.1768 5.52356 17.8516L9.51473 15.75C9.81851 15.5901 10.1816 15.5901 10.4854 15.75L14.4765 17.8516C15.0942 18.1768 15.814 17.644 15.6834 16.9583L14.8574 12.6207C14.7864 12.2478 14.9239 11.8659 15.2162 11.6237L18.3737 9.00769C18.9282 8.54836 18.6784 7.64952 17.9665 7.54199L13.7279 6.90181C13.4154 6.8546 13.1412 6.66802 12.9825 6.39462L10.7208 2.49686Z"
                            fill="#299764"
                          />
                        </svg>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.7208 2.49686C10.3997 1.9434 9.60042 1.9434 9.27927 2.49686L7.01756 6.39462C6.85892 6.66802 6.58471 6.8546 6.27216 6.90181L2.03356 7.54199C1.32166 7.64952 1.07194 8.54836 1.62636 9.00769L4.78394 11.6237C5.07622 11.8659 5.21366 12.2478 5.14266 12.6207L4.31668 16.9583C4.18611 17.644 4.90594 18.1768 5.52356 17.8516L9.51473 15.75C9.81851 15.5901 10.1816 15.5901 10.4854 15.75L14.4765 17.8516C15.0942 18.1768 15.814 17.644 15.6834 16.9583L14.8574 12.6207C14.7864 12.2478 14.9239 11.8659 15.2162 11.6237L18.3737 9.00769C18.9282 8.54836 18.6784 7.64952 17.9665 7.54199L13.7279 6.90181C13.4154 6.8546 13.1412 6.66802 12.9825 6.39462L10.7208 2.49686Z"
                            fill="#299764"
                          />
                        </svg>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.7208 2.49686C10.3997 1.9434 9.60042 1.9434 9.27927 2.49686L7.01756 6.39462C6.85892 6.66802 6.58471 6.8546 6.27216 6.90181L2.03356 7.54199C1.32166 7.64952 1.07194 8.54836 1.62636 9.00769L4.78394 11.6237C5.07622 11.8659 5.21366 12.2478 5.14266 12.6207L4.31668 16.9583C4.18611 17.644 4.90594 18.1768 5.52356 17.8516L9.51473 15.75C9.81851 15.5901 10.1816 15.5901 10.4854 15.75L14.4765 17.8516C15.0942 18.1768 15.814 17.644 15.6834 16.9583L14.8574 12.6207C14.7864 12.2478 14.9239 11.8659 15.2162 11.6237L18.3737 9.00769C18.9282 8.54836 18.6784 7.64952 17.9665 7.54199L13.7279 6.90181C13.4154 6.8546 13.1412 6.66802 12.9825 6.39462L10.7208 2.49686Z"
                            fill="#299764"
                          />
                        </svg>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.7208 2.49686C10.3997 1.9434 9.60042 1.9434 9.27927 2.49686L7.01756 6.39462C6.85892 6.66802 6.58471 6.8546 6.27216 6.90181L2.03356 7.54199C1.32166 7.64952 1.07194 8.54836 1.62636 9.00769L4.78394 11.6237C5.07622 11.8659 5.21366 12.2478 5.14266 12.6207L4.31668 16.9583C4.18611 17.644 4.90594 18.1768 5.52356 17.8516L9.51473 15.75C9.81851 15.5901 10.1816 15.5901 10.4854 15.75L14.4765 17.8516C15.0942 18.1768 15.814 17.644 15.6834 16.9583L14.8574 12.6207C14.7864 12.2478 14.9239 11.8659 15.2162 11.6237L18.3737 9.00769C18.9282 8.54836 18.6784 7.64952 17.9665 7.54199L13.7279 6.90181C13.4154 6.8546 13.1412 6.66802 12.9825 6.39462L10.7208 2.49686Z"
                            fill="#299764"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#299764] rounded-xl h-full sm:p-6 p-2 flex flex-col justify-between">
                  <div className="bg-[#1c1c1c] rounded-[16px] sm:p-6 p-3 max-w-[420px]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img src={Ava} alt="" />
                        <div>
                          <h3 className="font-semibold text-base text-white font-family">
                            Savannah Nguyen
                          </h3>
                          <a
                            href="#"
                            className="font-normal text-sm text-white font-family transition-all duration-300 hover:text-[#34a853] hover:underline hover:underline-offset-4"
                          >
                            savannahnguyen@gmail.com
                          </a>
                        </div>
                      </div>
                      <a
                        href="https://www.google.com/?hl=ru"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          width="42"
                          height="42"
                          viewBox="0 0 42 42"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="transition-transform duration-300 hover:scale-110 cursor-pointer"
                        >
                          <path
                            d="M42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42C32.598 42 42 32.598 42 21Z"
                            fill="white"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M31.2768 21.2387C31.2768 20.4941 31.21 19.7782 31.0859 19.0909H21.1968V23.1525H26.8477C26.6043 24.465 25.8645 25.5771 24.7525 26.3216V28.9562H28.1459C30.1313 27.1282 31.2768 24.4364 31.2768 21.2387Z"
                            fill="#4285F4"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M21.1963 31.5C24.0313 31.5 26.4081 30.5597 28.1454 28.9561L24.752 26.3215C23.8118 26.9515 22.609 27.3238 21.1963 27.3238C18.4615 27.3238 16.1468 25.4768 15.3211 22.9949H11.8131V25.7154C13.5408 29.147 17.0918 31.5 21.1963 31.5Z"
                            fill="#34A853"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.3216 22.995C15.1116 22.365 14.9922 21.692 14.9922 20.9999C14.9922 20.3079 15.1116 19.6349 15.3216 19.0049V16.2845H11.8136C11.1025 17.702 10.6968 19.3056 10.6968 20.9999C10.6968 22.6943 11.1025 24.2979 11.8136 25.7154L15.3216 22.995Z"
                            fill="#FBBC05"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M21.1963 14.6761C22.7379 14.6761 24.122 15.2059 25.2102 16.2464L28.2218 13.2348C26.4034 11.5405 24.0265 10.5 21.1963 10.5C17.0918 10.5 13.5408 12.853 11.8131 16.2846L15.3211 19.005C16.1468 16.5232 18.4615 14.6761 21.1963 14.6761Z"
                            fill="#EA4335"
                          />
                        </svg>
                      </a>
                    </div>
                    <p className="font-normal text-sm leading-[143%] text-white font-family mb-4">
                      Sagittis sed tortor, elementum vitae varius sodales
                      consectetur. Vitae arcu ut morbi bibendum ullamcorper
                      feugiat. Venenatis hendrerit cursus egestas sit ornare
                      nunc vulputate aliquam sapien. Pulvinar nunc consectetur
                      nibh consectetur mollis mauris est mauris amet. Sed hac
                      vehicula id et dui morbi quam pulvinar condimentum.
                      Senectus sed varius interdum nunc, arcu vulputate massa.
                    </p>
                    <div className="w-[372px] h-0 border-[1.50px] border-solid border-[#333]"></div>
                    <div className="mt-5 flex gap-3">
                      <h1 className="font-medium mt-1 text-sm text-white font-family">
                        Star rating:
                      </h1>
                      <div className="flex items-center gap-1">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.7208 2.49686C10.3997 1.9434 9.60042 1.9434 9.27927 2.49686L7.01756 6.39462C6.85892 6.66802 6.58471 6.8546 6.27216 6.90181L2.03356 7.54199C1.32166 7.64952 1.07194 8.54836 1.62636 9.00769L4.78394 11.6237C5.07622 11.8659 5.21366 12.2478 5.14266 12.6207L4.31668 16.9583C4.18611 17.644 4.90594 18.1768 5.52356 17.8516L9.51473 15.75C9.81851 15.5901 10.1816 15.5901 10.4854 15.75L14.4765 17.8516C15.0942 18.1768 15.814 17.644 15.6834 16.9583L14.8574 12.6207C14.7864 12.2478 14.9239 11.8659 15.2162 11.6237L18.3737 9.00769C18.9282 8.54836 18.6784 7.64952 17.9665 7.54199L13.7279 6.90181C13.4154 6.8546 13.1412 6.66802 12.9825 6.39462L10.7208 2.49686Z"
                            fill="#299764"
                          />
                        </svg>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.7208 2.49686C10.3997 1.9434 9.60042 1.9434 9.27927 2.49686L7.01756 6.39462C6.85892 6.66802 6.58471 6.8546 6.27216 6.90181L2.03356 7.54199C1.32166 7.64952 1.07194 8.54836 1.62636 9.00769L4.78394 11.6237C5.07622 11.8659 5.21366 12.2478 5.14266 12.6207L4.31668 16.9583C4.18611 17.644 4.90594 18.1768 5.52356 17.8516L9.51473 15.75C9.81851 15.5901 10.1816 15.5901 10.4854 15.75L14.4765 17.8516C15.0942 18.1768 15.814 17.644 15.6834 16.9583L14.8574 12.6207C14.7864 12.2478 14.9239 11.8659 15.2162 11.6237L18.3737 9.00769C18.9282 8.54836 18.6784 7.64952 17.9665 7.54199L13.7279 6.90181C13.4154 6.8546 13.1412 6.66802 12.9825 6.39462L10.7208 2.49686Z"
                            fill="#299764"
                          />
                        </svg>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.7208 2.49686C10.3997 1.9434 9.60042 1.9434 9.27927 2.49686L7.01756 6.39462C6.85892 6.66802 6.58471 6.8546 6.27216 6.90181L2.03356 7.54199C1.32166 7.64952 1.07194 8.54836 1.62636 9.00769L4.78394 11.6237C5.07622 11.8659 5.21366 12.2478 5.14266 12.6207L4.31668 16.9583C4.18611 17.644 4.90594 18.1768 5.52356 17.8516L9.51473 15.75C9.81851 15.5901 10.1816 15.5901 10.4854 15.75L14.4765 17.8516C15.0942 18.1768 15.814 17.644 15.6834 16.9583L14.8574 12.6207C14.7864 12.2478 14.9239 11.8659 15.2162 11.6237L18.3737 9.00769C18.9282 8.54836 18.6784 7.64952 17.9665 7.54199L13.7279 6.90181C13.4154 6.8546 13.1412 6.66802 12.9825 6.39462L10.7208 2.49686Z"
                            fill="#299764"
                          />
                        </svg>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.7208 2.49686C10.3997 1.9434 9.60042 1.9434 9.27927 2.49686L7.01756 6.39462C6.85892 6.66802 6.58471 6.8546 6.27216 6.90181L2.03356 7.54199C1.32166 7.64952 1.07194 8.54836 1.62636 9.00769L4.78394 11.6237C5.07622 11.8659 5.21366 12.2478 5.14266 12.6207L4.31668 16.9583C4.18611 17.644 4.90594 18.1768 5.52356 17.8516L9.51473 15.75C9.81851 15.5901 10.1816 15.5901 10.4854 15.75L14.4765 17.8516C15.0942 18.1768 15.814 17.644 15.6834 16.9583L14.8574 12.6207C14.7864 12.2478 14.9239 11.8659 15.2162 11.6237L18.3737 9.00769C18.9282 8.54836 18.6784 7.64952 17.9665 7.54199L13.7279 6.90181C13.4154 6.8546 13.1412 6.66802 12.9825 6.39462L10.7208 2.49686Z"
                            fill="#299764"
                          />
                        </svg>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.7208 2.49686C10.3997 1.9434 9.60042 1.9434 9.27927 2.49686L7.01756 6.39462C6.85892 6.66802 6.58471 6.8546 6.27216 6.90181L2.03356 7.54199C1.32166 7.64952 1.07194 8.54836 1.62636 9.00769L4.78394 11.6237C5.07622 11.8659 5.21366 12.2478 5.14266 12.6207L4.31668 16.9583C4.18611 17.644 4.90594 18.1768 5.52356 17.8516L9.51473 15.75C9.81851 15.5901 10.1816 15.5901 10.4854 15.75L14.4765 17.8516C15.0942 18.1768 15.814 17.644 15.6834 16.9583L14.8574 12.6207C14.7864 12.2478 14.9239 11.8659 15.2162 11.6237L18.3737 9.00769C18.9282 8.54836 18.6784 7.64952 17.9665 7.54199L13.7279 6.90181C13.4154 6.8546 13.1412 6.66802 12.9825 6.39462L10.7208 2.49686Z"
                            fill="#299764"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#299764] rounded-xl h-full sm:p-6 p-2 flex flex-col justify-between">
                  <div className="bg-[#1c1c1c] rounded-[16px] sm:p-6 p-3 max-w-[420px]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img src={Ava} alt="" />
                        <div>
                          <h3 className="font-semibold text-base text-white font-family">
                            Savannah Nguyen
                          </h3>
                          <a
                            href="#"
                            className="font-normal text-sm text-white font-family transition-all duration-300 hover:text-[#34a853] hover:underline hover:underline-offset-4"
                          >
                            savannahnguyen@gmail.com
                          </a>
                        </div>
                      </div>
                      <a
                        href="https://www.google.com/?hl=ru"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          width="42"
                          height="42"
                          viewBox="0 0 42 42"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="transition-transform duration-300 hover:scale-110 cursor-pointer"
                        >
                          <path
                            d="M42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42C32.598 42 42 32.598 42 21Z"
                            fill="white"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M31.2768 21.2387C31.2768 20.4941 31.21 19.7782 31.0859 19.0909H21.1968V23.1525H26.8477C26.6043 24.465 25.8645 25.5771 24.7525 26.3216V28.9562H28.1459C30.1313 27.1282 31.2768 24.4364 31.2768 21.2387Z"
                            fill="#4285F4"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M21.1963 31.5C24.0313 31.5 26.4081 30.5597 28.1454 28.9561L24.752 26.3215C23.8118 26.9515 22.609 27.3238 21.1963 27.3238C18.4615 27.3238 16.1468 25.4768 15.3211 22.9949H11.8131V25.7154C13.5408 29.147 17.0918 31.5 21.1963 31.5Z"
                            fill="#34A853"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.3216 22.995C15.1116 22.365 14.9922 21.692 14.9922 20.9999C14.9922 20.3079 15.1116 19.6349 15.3216 19.0049V16.2845H11.8136C11.1025 17.702 10.6968 19.3056 10.6968 20.9999C10.6968 22.6943 11.1025 24.2979 11.8136 25.7154L15.3216 22.995Z"
                            fill="#FBBC05"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M21.1963 14.6761C22.7379 14.6761 24.122 15.2059 25.2102 16.2464L28.2218 13.2348C26.4034 11.5405 24.0265 10.5 21.1963 10.5C17.0918 10.5 13.5408 12.853 11.8131 16.2846L15.3211 19.005C16.1468 16.5232 18.4615 14.6761 21.1963 14.6761Z"
                            fill="#EA4335"
                          />
                        </svg>
                      </a>
                    </div>
                    <p className="font-normal text-sm leading-[143%] text-white font-family mb-4">
                      Sagittis sed tortor, elementum vitae varius sodales
                      consectetur. Vitae arcu ut morbi bibendum ullamcorper
                      feugiat. Venenatis hendrerit cursus egestas sit ornare
                      nunc vulputate aliquam sapien. Pulvinar nunc consectetur
                      nibh consectetur mollis mauris est mauris amet. Sed hac
                      vehicula id et dui morbi quam pulvinar condimentum.
                      Senectus sed varius interdum nunc, arcu vulputate massa.
                    </p>
                    <div className="w-[372px] h-0 border-[1.50px] border-solid border-[#333]"></div>
                    <div className="mt-5 flex gap-3">
                      <h1 className="font-medium mt-1 text-sm text-white font-family">
                        Star rating:
                      </h1>
                      <div className="flex items-center gap-1">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.7208 2.49686C10.3997 1.9434 9.60042 1.9434 9.27927 2.49686L7.01756 6.39462C6.85892 6.66802 6.58471 6.8546 6.27216 6.90181L2.03356 7.54199C1.32166 7.64952 1.07194 8.54836 1.62636 9.00769L4.78394 11.6237C5.07622 11.8659 5.21366 12.2478 5.14266 12.6207L4.31668 16.9583C4.18611 17.644 4.90594 18.1768 5.52356 17.8516L9.51473 15.75C9.81851 15.5901 10.1816 15.5901 10.4854 15.75L14.4765 17.8516C15.0942 18.1768 15.814 17.644 15.6834 16.9583L14.8574 12.6207C14.7864 12.2478 14.9239 11.8659 15.2162 11.6237L18.3737 9.00769C18.9282 8.54836 18.6784 7.64952 17.9665 7.54199L13.7279 6.90181C13.4154 6.8546 13.1412 6.66802 12.9825 6.39462L10.7208 2.49686Z"
                            fill="#299764"
                          />
                        </svg>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.7208 2.49686C10.3997 1.9434 9.60042 1.9434 9.27927 2.49686L7.01756 6.39462C6.85892 6.66802 6.58471 6.8546 6.27216 6.90181L2.03356 7.54199C1.32166 7.64952 1.07194 8.54836 1.62636 9.00769L4.78394 11.6237C5.07622 11.8659 5.21366 12.2478 5.14266 12.6207L4.31668 16.9583C4.18611 17.644 4.90594 18.1768 5.52356 17.8516L9.51473 15.75C9.81851 15.5901 10.1816 15.5901 10.4854 15.75L14.4765 17.8516C15.0942 18.1768 15.814 17.644 15.6834 16.9583L14.8574 12.6207C14.7864 12.2478 14.9239 11.8659 15.2162 11.6237L18.3737 9.00769C18.9282 8.54836 18.6784 7.64952 17.9665 7.54199L13.7279 6.90181C13.4154 6.8546 13.1412 6.66802 12.9825 6.39462L10.7208 2.49686Z"
                            fill="#299764"
                          />
                        </svg>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.7208 2.49686C10.3997 1.9434 9.60042 1.9434 9.27927 2.49686L7.01756 6.39462C6.85892 6.66802 6.58471 6.8546 6.27216 6.90181L2.03356 7.54199C1.32166 7.64952 1.07194 8.54836 1.62636 9.00769L4.78394 11.6237C5.07622 11.8659 5.21366 12.2478 5.14266 12.6207L4.31668 16.9583C4.18611 17.644 4.90594 18.1768 5.52356 17.8516L9.51473 15.75C9.81851 15.5901 10.1816 15.5901 10.4854 15.75L14.4765 17.8516C15.0942 18.1768 15.814 17.644 15.6834 16.9583L14.8574 12.6207C14.7864 12.2478 14.9239 11.8659 15.2162 11.6237L18.3737 9.00769C18.9282 8.54836 18.6784 7.64952 17.9665 7.54199L13.7279 6.90181C13.4154 6.8546 13.1412 6.66802 12.9825 6.39462L10.7208 2.49686Z"
                            fill="#299764"
                          />
                        </svg>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.7208 2.49686C10.3997 1.9434 9.60042 1.9434 9.27927 2.49686L7.01756 6.39462C6.85892 6.66802 6.58471 6.8546 6.27216 6.90181L2.03356 7.54199C1.32166 7.64952 1.07194 8.54836 1.62636 9.00769L4.78394 11.6237C5.07622 11.8659 5.21366 12.2478 5.14266 12.6207L4.31668 16.9583C4.18611 17.644 4.90594 18.1768 5.52356 17.8516L9.51473 15.75C9.81851 15.5901 10.1816 15.5901 10.4854 15.75L14.4765 17.8516C15.0942 18.1768 15.814 17.644 15.6834 16.9583L14.8574 12.6207C14.7864 12.2478 14.9239 11.8659 15.2162 11.6237L18.3737 9.00769C18.9282 8.54836 18.6784 7.64952 17.9665 7.54199L13.7279 6.90181C13.4154 6.8546 13.1412 6.66802 12.9825 6.39462L10.7208 2.49686Z"
                            fill="#299764"
                          />
                        </svg>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.7208 2.49686C10.3997 1.9434 9.60042 1.9434 9.27927 2.49686L7.01756 6.39462C6.85892 6.66802 6.58471 6.8546 6.27216 6.90181L2.03356 7.54199C1.32166 7.64952 1.07194 8.54836 1.62636 9.00769L4.78394 11.6237C5.07622 11.8659 5.21366 12.2478 5.14266 12.6207L4.31668 16.9583C4.18611 17.644 4.90594 18.1768 5.52356 17.8516L9.51473 15.75C9.81851 15.5901 10.1816 15.5901 10.4854 15.75L14.4765 17.8516C15.0942 18.1768 15.814 17.644 15.6834 16.9583L14.8574 12.6207C14.7864 12.2478 14.9239 11.8659 15.2162 11.6237L18.3737 9.00769C18.9282 8.54836 18.6784 7.64952 17.9665 7.54199L13.7279 6.90181C13.4154 6.8546 13.1412 6.66802 12.9825 6.39462L10.7208 2.49686Z"
                            fill="#299764"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
