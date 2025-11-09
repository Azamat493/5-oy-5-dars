import React from "react";
import Logo from "../assets/images/Logo.png";
import socials from "../assets/images/socials.png";
import socials1 from "../assets/images/socials1.png";
import socials2 from "../assets/images/socials2.png";
import socials3 from "../assets/images/socials3.png";

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] relative py-12 px-6 border-t-[1.50px] border-t-[#333] border-solid">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start md:items-center gap-8 md:gap-4">
        <div className="max-w-[240px] w-full mb-5">
          <img src={Logo} alt="" className="mb-4" />
          <p className="font-normal text-xs leading-[167%] text-white font-family">
            Car rental offers a wide range of cars available for rent in Newark
            EWR Airport NJ. We pride ourselves in our customer service, and
            hassle-free renting experience.
          </p>
        </div>
        <div className="w-full md:max-w-[814px] ml-[100px] md:ml-0 flex flex-col sm:grid sm:grid-cols-3 xl:grid-cols-4 gap-0 mt-5">
          <div>
            <h4 className="font-medium text-base text-white font-family mb-4">
              Main
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-medium text-sm text-white font-family hover:underline"
                >
                  My Bookings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-sm text-white font-family hover:underline"
                >
                  Reservation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-base text-white font-family mb-4">
              Categories
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-medium text-sm text-white font-family hover:underline"
                >
                  Compact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-sm text-white font-family hover:underline"
                >
                  Sports cars
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-sm text-white font-family hover:underline"
                >
                  Vans
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-base text-white font-family mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-medium text-sm text-white font-family hover:underline"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-sm text-white font-family hover:underline"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-sm text-white font-family hover:underline"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-sm text-white font-family hover:underline"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-base text-white font-family mb-4">
              Our Locations
            </h4>
            <address className="font-medium text-sm whitespace-nowrap text-white not-italic font-family space-y-1">
              <p className="mb-2">2118 Thornridge Cir. Syracuse</p>
              <p className="mb-2">4140 Parker Rd. Allentown</p>
              <p>4517 Washington Ave.</p>
            </address>
          </div>
        </div>
      </div>
      <svg
        width="895"
        height="2"
        viewBox="0 0 895 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-20 top-[60%] lg:top-[70%] xl:top-[60%] hidden md:block"
      >
        <path d="M0 0.75L895 0.749922" stroke="#333333" stroke-width="1.5" />
      </svg>

      <div className="max-w-[1200px] mx-auto pl-[48px] md:pl-0 pt-8 mt-8 flex flex-col items-start gap-8">
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <div>
            <p className="font-medium mb-5 text-base leading-[150%] text-white font-family">
              © 2022 Car rental
              <br />
              <a
                href="#"
                className="font-medium hover:underline text-base leading-[150%] text-white font-family"
              >
                Terms & Conditions
              </a>
            </p>
          </div>

          <div className="w-full md:max-w-[814px] flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h5 className="font-medium text-base text-white font-family mb-2">
                Contact
              </h5>
              <div className="flex flex-col">
                <a
                  href="#"
                  className="font-medium text-sm text-white font-family hover:underline"
                >
                  +1 855 420 0000
                </a>
                <a
                  href="#"
                  className="font-medium text-sm text-white font-family hover:underline"
                >
                  carrental@gmail.com
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-medium text-base text-white font-family mb-2">
                Hours of operation
              </h5>
              <p className="font-medium text-sm text-white font-family">
                8:00 - 21:00 Mon-Sat
              </p>
              <p className="font-medium text-sm text-white font-family">
                9:00 - 15:00 Sundays
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <h5 className="font-medium text-base text-white font-family">
                Social network
              </h5>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={socials}
                    alt=""
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </a>
                <a
                  href="https://x.com/?lang=ru"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={socials1}
                    alt=""
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </a>
                <a
                  href="https://www.facebook.com/?locale=ru_RU"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={socials2}
                    alt=""
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </a>
                <a
                  href="https://www.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={socials3}
                    alt=""
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#top"
        className="w-[70px] h-[70px] fixed bottom-8 right-8 bg-[#299764] rounded-full flex cursor-pointer items-center justify-center hover:bg-green-600 transition-colors"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3738 14.0404C10.9833 14.431 10.3501 14.431 9.95958 14.0404C9.56906 13.6499 9.56906 13.0168 9.95958 12.6262L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289L22.0405 12.6262C22.431 13.0168 22.431 13.6499 22.0405 14.0404C21.6499 14.431 21.0168 14.431 20.6262 14.0404L17 10.4142L17 23.3333C17 23.8856 16.5523 24.3333 16 24.3333C15.4477 24.3333 15 23.8856 15 23.3333L15 10.4142L11.3738 14.0404Z"
            fill="white"
          />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
