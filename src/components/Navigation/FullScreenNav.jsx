import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext } from "react";
import { useRef } from "react";

import { Link } from "react-router-dom";
import NavContext, {
  NavbarColorContext,
  NavbarContext,
} from "../../context/NavContext";

const FullScreenNav = () => {
  const fullNavLinkRef = useRef(null);

  const [navOpen, setNavOpen] = useContext(NavbarContext);
    const [navColor, setNavColor] = useContext(NavbarColorContext);
  

  const fullScreenRef = useRef(null);

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(".fullscreennav", {
      display: "block",
    });
    tl.to(".stairing", {
      delay: 0.1,
      height: "100%",
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3,
      },
    });
    tl.to(".navlink", {
      opacity: 1,
    });
  }
  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".stairing", {
      height: 0,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".navlink", {
      opacity: 0,
    });
    tl.to(".fullscreennav", {
      display: "none",
    });
  }

  useGSAP(
    function () {
      if (navOpen) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [navOpen]
  );

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fullscreennav text-white h-screen w-full absolute overflow-hidden z-100"
    >
      <div className="h-screen fixed w-full">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullNavLinkRef} className="relative">
        <div className="navlink flex w-full justify-between items-start lg:p-5 p-2">
          <div className="">
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
              setNavOpen(false);
            }}
            className="lg:h-32 h-20 lg:w-32 w-20 relative cursor-pointer"
          >
            <div className="lg:h-44 h-28 lg:w-1 w-0.5 bg-[#D3FD50] absolute -rotate-45 origin-top "></div>
            <div className="lg:h-44 h-28 lg:w-1 w-0.5 bg-[#D3FD50] absolute rotate-45 origin-top right-0"></div>
          </div>
        </div>
        <div id="all-links" className="py-10">
          <div className="link origin-top relative border-t-1 border-white">
            <Link to="/" onClick={() => setNavOpen(false)}>
              <h1 className="font-[font2] text-5xl lg:text-[7vw] lg:leading-[0.8] lg:pt-3 pt-3 uppercase text-center ">
                Home
              </h1>

              <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
                <div className="flex items-center moveX ">
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-4xl lg:leading-[0.8] lg:pt-3 pt-2 uppercase text-center ">
                    home
                  </h2>
                  <img
                    className="lg:h-20 h-15 lg:w-60 w-30 shrink-0 object-cover rounded-full"
                    src="/media/dev/f8.jpg"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-4xl lg:leading-[0.8] lg:pt-3 pt-2 uppercase text-center ">
                    home
                  </h2>
                  <img
                    className="lg:h-20 h-15 lg:w-60 w-30 shrink-0 object-cover rounded-full"
                    src="/media/dev/f8.jpg"
                    alt=""
                  />
                </div>
                <div className="flex items-center moveX ">
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-4xl lg:leading-[0.8] lg:pt-3 pt-2 uppercase text-center ">
                    home
                  </h2>
                  <img
                    className="lg:h-20 h-15 lg:w-60 w-30 shrink-0 object-cover rounded-full"
                    src="/media/dev/f8.jpg"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-4xl lg:leading-[0.8] lg:pt-3 pt-2 uppercase text-center ">
                    home
                  </h2>
                  <img
                    className="lg:h-20 h-15 lg:w-60 w-30 shrink-0 object-cover rounded-full"
                    src="/media/dev/f8.jpg"
                    alt=""
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="link origin-top relative border-t-1 border-white">
            <Link to="/projects" onClick={() => setNavOpen(false)}>
              <h1 className="font-[font2] text-5xl lg:text-[7vw] lg:leading-[0.8] lg:pt-3 pt-3 uppercase text-center ">
                WORK
              </h1>

              <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
                <div className="flex items-center moveX ">
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-4xl lg:leading-[0.8] lg:pt-3 pt-2 uppercase text-center ">
                    work
                  </h2>
                  <img
                    className="lg:h-20 h-15 lg:w-60 w-30 shrink-0 object-cover rounded-full"
                    src="/media/projects/nav1.jpg"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-4xl lg:leading-[0.8] lg:pt-3 pt-2 uppercase text-center ">
                    work
                  </h2>
                  <img
                    className="lg:h-20 h-15 lg:w-60 w-30 shrink-0 object-cover rounded-full"
                    src="/media/projects/nav2.jpg"
                    alt=""
                  />
                </div>
                <div className="flex items-center moveX ">
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-4xl lg:leading-[0.8] lg:pt-3 pt-2 uppercase text-center ">
                    work
                  </h2>
                  <img
                    className="lg:h-20 h-15 lg:w-60 w-30 shrink-0 object-cover rounded-full"
                    src="/media/projects/nav1.jpg"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-4xl lg:leading-[0.8] lg:pt-3 pt-2 uppercase text-center ">
                    work
                  </h2>
                  <img
                    className="lg:h-20 h-15 lg:w-60 w-30 shrink-0 object-cover rounded-full"
                    src="/media/projects/nav2.jpg"
                    alt=""
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="link origin-top relative border-y-1 border-white">
            <Link to="/agence" onClick={() => setNavOpen(false)}>
              <h1 className="font-[font2] text-5xl lg:text-[7vw] lg:leading-[0.8] lg:pt-3 pt-3 uppercase text-center ">
                About Me
              </h1>

              <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
                <div className="flex items-center moveX ">
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-4xl lg:leading-[0.8] lg:pt-3 pt-2 uppercase text-center ">
                    about me
                  </h2>
                  <img
                    className="lg:h-20 h-15 lg:w-60 w-30 shrink-0 object-cover rounded-full"
                    src="/media/dev/f5.jpg"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-4xl lg:leading-[0.8] lg:pt-3 pt-2 uppercase text-center ">
                    about me
                  </h2>
                  <img
                    className="lg:h-20 h-15 lg:w-60 w-30 shrink-0 object-cover rounded-full"
                    src="/media/dev/f7.jpeg"
                    alt=""
                  />
                </div>
                <div className="flex items-center moveX ">
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-4xl lg:leading-[0.8] lg:pt-3 pt-2 uppercase text-center ">
                    about me
                  </h2>
                  <img
                    className="lg:h-20 h-15 lg:w-60 w-30 shrink-0 object-cover rounded-full"
                    src="/media/dev/f5.jpg"
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-4xl lg:leading-[0.8] lg:pt-3 pt-2 uppercase text-center ">
                    about me
                  </h2>
                  <img
                    className="lg:h-20 h-15 lg:w-60 w-30 shrink-0 object-cover rounded-full"
                    src="/media/dev/f7.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </Link>
          </div>
          {/* <div className="link origin-top relative border-y-1 border-white">
            <h1 className="font-[font2] text-5xl lg:text-[7vw] lg:leading-[0.8] lg:pt-3 pt-3 uppercase text-center ">
              Projects
            </h1>

            <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
              <div className="flex items-center moveX ">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-4xl lg:leading-[0.8] lg:pt-3 pt-2 uppercase text-center ">
                  SEE EVERYTHING
                </h2>
                <img
                  className="lg:h-20 h-15 lg:w-60 w-30 shrink-0 object-cover rounded-full"
                  src="/media/nav1.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-4xl lg:leading-[0.8] lg:pt-3 pt-2 uppercase text-center ">
                  SEE EVERYTHING
                </h2>
                <img
                  className="lg:h-20 h-15 lg:w-60 w-30 shrink-0 object-cover rounded-full"
                  src="/media/nav2.jpg"
                  alt=""
                />
              </div>
              <div className="flex items-center moveX ">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-4xl lg:leading-[0.8] lg:pt-3 pt-2 uppercase text-center ">
                  SEE EVERYTHING
                </h2>
                <img
                  className="lg:h-20 h-15 lg:w-60 w-30 shrink-0 object-cover rounded-full"
                  src="/media/nav1.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-4xl lg:leading-[0.8] lg:pt-3 pt-2 uppercase text-center ">
                  SEE EVERYTHING
                </h2>
                <img
                  className="lg:h-20 h-15 lg:w-60 w-30 shrink-0 object-cover rounded-full"
                  src="/media/nav2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
