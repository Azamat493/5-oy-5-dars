import Logo from "../assets/images/Logo.png";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      document.querySelectorAll("details").forEach((details) => {
        if (!details.contains(e.target)) {
          details.removeAttribute("open");
        }
      });
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
    <div id="top"></div>
    <div className="bg-[#1c1c1c] sticky top-0 w-full z-[999] border-b-[1.5px] border-b-[#333] border-solid">
      <header className="max-w-[1440px] w-[80%] mx-auto py-4 px-6 flex xl:flex-nowrap flex-wrap gap-5 items-center justify-between md:justify-center xll:justify-between">
        <div className="flex items-center gap-8">
          <a href="/">
            <img src={Logo} alt="Car rental logo" className="h-8 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="font-medium text-lg text-white font-family hover:text-green-400 transition-colors"
            >
              Categories
            </a>
            <details className="relative">
              <summary className="flex items-center gap-2 cursor-pointer font-medium text-lg text-white transition-colors hover:text-green-400 select-none">
                About Us
                <svg
                  className="w-5 h-5 transition-transform duration-300"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.1528 8.22212C15.4213 8.4906 15.4213 8.9259 15.1528 9.19439L11.4862 12.8611C11.2177 13.1295 10.7824 13.1295 10.5139 12.8611L6.84724 9.19439C6.57875 8.9259 6.57875 8.4906 6.84724 8.22212C7.11572 7.95363 7.55102 7.95363 7.81951 8.22212L11 11.4026L14.1806 8.22212C14.4491 7.95363 14.8844 7.95363 15.1528 8.22212Z"
                  />
                </svg>
              </summary>
              <div className="absolute left-0 mt-2 flex flex-col gap-3 bg-gray-800 text-white rounded-xl p-4 w-48">
                <a
                  href="#"
                  className="font-medium text-lg font-family transition-colors hover:text-green-400"
                >
                  News
                </a>
                <a
                  href="#"
                  className="font-medium text-lg font-family transition-colors hover:text-green-400"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="font-medium text-lg font-family transition-colors hover:text-green-400"
                >
                  Locations
                </a>
              </div>
            </details>

            <details className="relative">
              <summary className="flex items-center gap-2 cursor-pointer font-medium text-lg text-white hover:text-green-400 select-none">
                Help center
                <svg
                  className="w-5 h-5 transition-transform duration-300"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.1528 8.22212C15.4213 8.4906 15.4213 8.9259 15.1528 9.19439L11.4862 12.8611C11.2177 13.1295 10.7824 13.1295 10.5139 12.8611L6.84724 9.19439C6.57875 8.9259 6.57875 8.4906 6.84724 8.22212C7.11572 7.95363 7.55102 7.95363 7.81951 8.22212L11 11.4026L14.1806 8.22212C14.4491 7.95363 14.8844 7.95363 15.1528 8.22212Z"
                  />
                </svg>
              </summary>
              <div className="absolute left-0 mt-2 flex flex-col gap-3 bg-gray-800 text-white rounded-xl p-4 w-48">
                <a
                  href="#"
                  className="font-medium text-lg font-family transition-colors hover:text-green-400"
                >
                  FAQ
                </a>
                <a
                  href="#"
                  className="font-medium text-lg font-family transition-colors hover:text-green-400"
                >
                  Contact us
                </a>
              </div>
            </details>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:+18554200000"
            className="font-semibold text-lg text-white font-family"
          >
            +1 855 420 0000
          </a>
          <button className="p-[18px] rounded-[100px] bg-[#272727] cursor-pointer hover:bg-gray-700 transition-colors">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 1.14575C11.3797 1.14575 11.6875 1.45356 11.6875 1.83325V2.74992C11.6875 3.12961 11.3797 3.43742 11 3.43742C10.6203 3.43742 10.3125 3.12961 10.3125 2.74992V1.83325C10.3125 1.45356 10.6203 1.14575 11 1.14575Z"
                fill="white"
              />
              <path
                d="M11 5.72909C8.08898 5.72909 5.72915 8.08892 5.72915 10.9999C5.72915 13.9109 8.08898 16.2708 11 16.2708C13.911 16.2708 16.2708 13.9109 16.2708 10.9999C16.2708 8.08892 13.911 5.72909 11 5.72909Z"
                fill="white"
              />
              <path
                d="M5.00432 4.03199C4.73583 3.76351 4.30053 3.76351 4.03204 4.03199C3.76356 4.30048 3.76356 4.73578 4.03204 5.00426L4.68023 5.65244C4.94871 5.92093 5.38401 5.92093 5.6525 5.65244C5.92098 5.38396 5.92098 4.94866 5.6525 4.68017L5.00432 4.03199Z"
                fill="white"
              />
              <path
                d="M20.8541 10.9999C20.8541 11.3796 20.5463 11.6874 20.1666 11.6874H19.25C18.8703 11.6874 18.5625 11.3796 18.5625 10.9999C18.5625 10.6202 18.8703 10.3124 19.25 10.3124H20.1666C20.5463 10.3124 20.8541 10.6202 20.8541 10.9999Z"
                fill="white"
              />
              <path
                d="M17.9679 5.00426C18.2364 4.73577 18.2364 4.30047 17.9679 4.03198C17.6994 3.7635 17.2641 3.7635 16.9956 4.03198L16.3475 4.68016C16.079 4.94865 16.079 5.38395 16.3475 5.65244C16.6159 5.92092 17.0512 5.92092 17.3197 5.65244L17.9679 5.00426Z"
                fill="white"
              />
              <path
                d="M11 18.5624C11.3797 18.5624 11.6875 18.8702 11.6875 19.2499V20.1666C11.6875 20.5463 11.3797 20.8541 11 20.8541C10.6203 20.8541 10.3125 20.5463 10.3125 20.1666V19.2499C10.3125 18.8702 10.6203 18.5624 11 18.5624Z"
                fill="white"
              />
              <path
                d="M17.3198 16.3474C17.0513 16.0789 16.616 16.0789 16.3475 16.3474C16.079 16.6159 16.079 17.0512 16.3475 17.3197L16.9957 17.9679C17.2642 18.2363 17.6995 18.2363 17.968 17.9679C18.2365 17.6994 18.2365 17.2641 17.968 16.9956L17.3198 16.3474Z"
                fill="white"
              />
              <path
                d="M3.43748 10.9999C3.43748 11.3796 3.12968 11.6874 2.74998 11.6874H1.83331C1.45362 11.6874 1.14581 11.3796 1.14581 10.9999C1.14581 10.6202 1.45362 10.3124 1.83331 10.3124H2.74998C3.12968 10.3124 3.43748 10.6202 3.43748 10.9999Z"
                fill="white"
              />
              <path
                d="M5.65244 17.3197C5.92092 17.0512 5.92092 16.6159 5.65244 16.3474C5.38395 16.0789 4.94865 16.0789 4.68016 16.3474L4.03198 16.9956C3.7635 17.2641 3.7635 17.6994 4.03198 17.9679C4.30047 18.2363 4.73577 18.2363 5.00426 17.9679L5.65244 17.3197Z"
                fill="white"
              />
            </svg>
          </button>
          <button className="px-[30px] py-[18px] rounded-[100px] bg-[#299764] w-[142px] h-[58px] cursor-pointer hover:bg-green-600 font-medium text-lg text-white font-family flex items-center gap-2 transition-colors">
            Login
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3125 17.4166C10.3125 17.0369 10.6203 16.7291 11 16.7291H16.5C16.6265 16.7291 16.7291 16.6265 16.7291 16.4999L16.7291 5.49992C16.7291 5.37335 16.6265 5.27075 16.5 5.27075L11 5.27075C10.6203 5.27075 10.3125 4.96295 10.3125 4.58325C10.3125 4.20356 10.6203 3.89575 11 3.89575H16.5C17.3859 3.89575 18.1041 4.61396 18.1041 5.49992V16.4999C18.1041 17.3859 17.3859 18.1041 16.5 18.1041H11C10.6203 18.1041 10.3125 17.7963 10.3125 17.4166Z"
                fill="white"
              />
              <path
                d="M3.20831 12.0222C3.20831 12.5285 3.61872 12.9389 4.12498 12.9389H8.5763C8.59732 13.2647 8.62363 13.5902 8.65524 13.9154L8.68243 14.1952C8.72664 14.65 9.20968 14.9225 9.62183 14.7249C11.2974 13.9219 12.8143 12.8231 14.0995 11.4812L14.127 11.4525C14.3718 11.1969 14.3718 10.7937 14.127 10.5381L14.0995 10.5094C12.8143 9.16753 11.2974 8.06866 9.62183 7.26564C9.20969 7.06812 8.72664 7.34055 8.68243 7.79544L8.65524 8.0752C8.62363 8.40037 8.59732 8.72592 8.5763 9.05173L4.12498 9.05173C3.61872 9.05173 3.20831 9.46214 3.20831 9.9684V12.0222Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-full h-0.5 bg-white rounded-sm"></span>
          <span className="w-full h-0.5 bg-white rounded-sm"></span>
          <span className="w-full h-0.5 bg-white rounded-sm"></span>
        </button>
      </header>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute left-0 w-full z-999 top-15 px-6 pb-6 bg-[#1c1c1c] border-t border-[#333]">
          <div className="flex flex-col gap-5 pt-4">
            <a
              href="#"
              className="font-medium text-lg text-white font-family hover:text-green-400 transition-colors"
            >
              Categories
            </a>
            <a
              href="#"
              className="font-medium text-lg text-white font-family hover:text-green-400 transition-colors"
            >
              News
            </a>
            <a
              href="#"
              className="font-medium text-lg text-white font-family hover:text-green-400 transition-colors"
            >
              Careers
            </a>
            <a
              href="#"
              className="font-medium text-lg text-white font-family hover:text-green-400 transition-colors"
            >
              Locations
            </a>
            <a
              href="#"
              className="font-medium text-lg text-white font-family hover:text-green-400 transition-colors"
            >
              FAQ
            </a>
            <a
              href="#"
              className="font-medium text-lg text-white font-family hover:text-green-400 transition-colors"
            >
              Contact us
            </a>
            <div className="pt-4 flex flex-col gap-4">
              <a
                href="tel:+18554200000"
                className="font-semibold text-lg text-white font-family"
              >
                +1 855 420 0000
              </a>
              <button className="p-[18px] rounded-[100px] bg-[#272727] cursor-pointer hover:bg-gray-700 transition-colors flex justify-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1.14575C11.3797 1.14575 11.6875 1.45356 11.6875 1.83325V2.74992C11.6875 3.12961 11.3797 3.43742 11 3.43742C10.6203 3.43742 10.3125 3.12961 10.3125 2.74992V1.83325C10.3125 1.45356 10.6203 1.14575 11 1.14575Z"
                    fill="white"
                  />
                  <path
                    d="M11 5.72909C8.08898 5.72909 5.72915 8.08892 5.72915 10.9999C5.72915 13.9109 8.08898 16.2708 11 16.2708C13.911 16.2708 16.2708 13.9109 16.2708 10.9999C16.2708 8.08892 13.911 5.72909 11 5.72909Z"
                    fill="white"
                  />
                  <path
                    d="M5.00432 4.03199C4.73583 3.76351 4.30053 3.76351 4.03204 4.03199C3.76356 4.30048 3.76356 4.73578 4.03204 5.00426L4.68023 5.65244C4.94871 5.92093 5.38401 5.92093 5.6525 5.65244C5.92098 5.38396 5.92098 4.94866 5.6525 4.68017L5.00432 4.03199Z"
                    fill="white"
                  />
                  <path
                    d="M20.8541 10.9999C20.8541 11.3796 20.5463 11.6874 20.1666 11.6874H19.25C18.8703 11.6874 18.5625 11.3796 18.5625 10.9999C18.5625 10.6202 18.8703 10.3124 19.25 10.3124H20.1666C20.5463 10.3124 20.8541 10.6202 20.8541 10.9999Z"
                    fill="white"
                  />
                  <path
                    d="M17.9679 5.00426C18.2364 4.73577 18.2364 4.30047 17.9679 4.03198C17.6994 3.7635 17.2641 3.7635 16.9956 4.03198L16.3475 4.68016C16.079 4.94865 16.079 5.38395 16.3475 5.65244C16.6159 5.92092 17.0512 5.92092 17.3197 5.65244L17.9679 5.00426Z"
                    fill="white"
                  />
                  <path
                    d="M11 18.5624C11.3797 18.5624 11.6875 18.8702 11.6875 19.2499V20.1666C11.6875 20.5463 11.3797 20.8541 11 20.8541C10.6203 20.8541 10.3125 20.5463 10.3125 20.1666V19.2499C10.3125 18.8702 10.6203 18.5624 11 18.5624Z"
                    fill="white"
                  />
                  <path
                    d="M17.3198 16.3474C17.0513 16.0789 16.616 16.0789 16.3475 16.3474C16.079 16.6159 16.079 17.0512 16.3475 17.3197L16.9957 17.9679C17.2642 18.2363 17.6995 18.2363 17.968 17.9679C18.2365 17.6994 18.2365 17.2641 17.968 16.9956L17.3198 16.3474Z"
                    fill="white"
                  />
                  <path
                    d="M3.43748 10.9999C3.43748 11.3796 3.12968 11.6874 2.74998 11.6874H1.83331C1.45362 11.6874 1.14581 11.3796 1.14581 10.9999C1.14581 10.6202 1.45362 10.3124 1.83331 10.3124H2.74998C3.12968 10.3124 3.43748 10.6202 3.43748 10.9999Z"
                    fill="white"
                  />
                  <path
                    d="M5.65244 17.3197C5.92092 17.0512 5.92092 16.6159 5.65244 16.3474C5.38395 16.0789 4.94865 16.0789 4.68016 16.3474L4.03198 16.9956C3.7635 17.2641 3.7635 17.6994 4.03198 17.9679C4.30047 18.2363 4.73577 18.2363 5.00426 17.9679L5.65244 17.3197Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button className="px-[30px] py-[18px] rounded-[100px] bg-[#299764] cursor-pointer hover:bg-green-600 font-medium text-lg text-white font-family flex items-center justify-center gap-2 transition-colors">
                Login
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3125 17.4166C10.3125 17.0369 10.6203 16.7291 11 16.7291H16.5C16.6265 16.7291 16.7291 16.6265 16.7291 16.4999L16.7291 5.49992C16.7291 5.37335 16.6265 5.27075 16.5 5.27075L11 5.27075C10.6203 5.27075 10.3125 4.96295 10.3125 4.58325C10.3125 4.20356 10.6203 3.89575 11 3.89575H16.5C17.3859 3.89575 18.1041 4.61396 18.1041 5.49992V16.4999C18.1041 17.3859 17.3859 18.1041 16.5 18.1041H11C10.6203 18.1041 10.3125 17.7963 10.3125 17.4166Z"
                    fill="white"
                  />
                  <path
                    d="M3.20831 12.0222C3.20831 12.5285 3.61872 12.9389 4.12498 12.9389H8.5763C8.59732 13.2647 8.62363 13.5902 8.65524 13.9154L8.68243 14.1952C8.72664 14.65 9.20968 14.9225 9.62183 14.7249C11.2974 13.9219 12.8143 12.8231 14.0995 11.4812L14.127 11.4525C14.3718 11.1969 14.3718 10.7937 14.127 10.5381L14.0995 10.5094C12.8143 9.16753 11.2974 8.06866 9.62183 7.26564C9.20969 7.06812 8.72664 7.34055 8.68243 7.79544L8.65524 8.0752C8.62363 8.40037 8.59732 8.72592 8.5763 9.05173L4.12498 9.05173C3.61872 9.05173 3.20831 9.46214 3.20831 9.9684V12.0222Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
      </>
  );
};

export default Header;
