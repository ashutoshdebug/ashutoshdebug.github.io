import React, { useContext, useRef } from "react";
import NavContext, {
  NavbarColorContext,
  NavbarContext,
} from "../../context/NavContext";

const Navbar = () => {
  const navGreenRef = useRef(null);
  const [onavOpen, setNavOpen] = useContext(NavbarContext);
  const [navColor, setNavColor] = useContext(NavbarColorContext);
  return (
    <div className="flex fixed top-0 w-full items-start justify-between z-4">
      <div className="lg:p-5 p-2">
        <div className="w-[15vw] sm:w-[12vw] lg:w-30">
          <svg
            viewBox="0 0 265 126"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M234 123C234 124.657 232.657 126 231 126H212C210.343 126 209 124.657 209 123V25H234V123ZM209 0V25H182C180.343 25 179 23.6569 179 22V3C179 1.34315 180.343 0 182 0H209ZM262 0C263.657 7.70871e-07 265 1.34315 265 3V22C265 23.6569 263.657 25 262 25H234V0H262Z"
              fill={navColor}
            />
            <path
              d="M91 3C91 1.34315 92.3431 0 94 0H113C114.657 0 116 1.34315 116 3V123C116 124.657 114.657 126 113 126H94C92.3431 126 91 124.657 91 123V3Z"
              fill={navColor}
            />
            <path
              d="M173.637 104.958C175.98 107.301 175.98 111.1 173.637 113.443L164.444 122.636C162.101 124.979 158.302 124.979 155.959 122.636L113.422 80.0986C114.421 80.364 115.53 80.108 116.314 79.3242L132.158 63.4795L173.637 104.958ZM99.5107 60.7715C98.5414 62.9711 98.9569 65.6337 100.759 67.4355L113.422 80.0986C112.928 79.9675 112.46 79.7116 112.072 79.3242L98.6367 65.8887C97.4656 64.7172 97.4656 62.818 98.6367 61.6465L99.5107 60.7715ZM158.647 1.63672C159.819 0.465148 161.718 0.465148 162.89 1.63672L176.325 15.0713C177.496 16.2427 177.496 18.1419 176.325 19.3135L132.158 63.4795L118.437 49.7578C116.635 47.956 113.972 47.5405 111.772 48.5098L158.647 1.63672ZM99.5107 60.7715C99.8019 60.1107 100.217 59.4915 100.759 58.9502L109.951 49.7578C110.492 49.2165 111.112 48.801 111.772 48.5098L99.5107 60.7715Z"
              fill={navColor}
            />
            <rect
              x="86"
              width="25"
              height="86"
              rx="6"
              transform="rotate(90 86 0)"
              fill={navColor}
            />
            <path
              d="M61 3C61 1.34315 62.3431 0 64 0H83C84.6569 0 86 1.34315 86 3V123C86 124.657 84.6569 126 83 126H64C62.3431 126 61 124.657 61 123V3Z"
              fill={navColor}
            />
            <path
              d="M25 123C25 124.657 23.6569 126 22 126H3C1.34315 126 3.02e-08 124.657 0 123V88H25V123ZM86 88H25V63H86V88ZM22 0C23.6569 6.44256e-08 25 1.34315 25 3V63H0V3C1.9328e-06 1.34315 1.34315 0 3 0H22Z"
              fill={navColor}
            />
          </svg>
        </div>
      </div>
      <div
        onClick={() => {
          setNavOpen(true);
        }}
        onMouseEnter={() => {
          navGreenRef.current.style.height = "100%";
        }}
        onMouseLeave={() => {
          navGreenRef.current.style.height = "0%";
        }}
        className="lg:h-12 h-12 lg:w-[15vw] w-64 relative bg-black"
      >
        <div
          ref={navGreenRef}
          className="bg-[#D3FD50] absolute top-0 h-0 w-full transition-all"
        ></div>
        <div className="relative flex flex-col gap-1 justify-center items-end h-full lg:px-12 px-6">
          <div className="lg:w-18 w-12 h-0.5 bg-white"></div>
          <div className="lg:w-10 w-6 h-0.5 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
