import React from "react";
import { useState } from "react";
import { VscHome } from "react-icons/vsc";
import { useEffect } from "react";
import { FaSnowman } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";
import CircularText from "./CircularText";
import Magnet from "./Magnet";
import ScrollReveal from "./ScrollReveal";
import GooeyNav from "./GooeyNav";
import ClickSpark from "./ClickSpark";
import TiltedCard from "./TiltedCard";
import Dock from "./Dock";
import Lenis from "@studio-freight/lenis";
import { useRef } from "react";
import VariableProximity from "./VariableProximity";
import DecryptedText from "./DecryptedText";
import { SmoothCursor } from "./SmoothCursor";
import "./App.css";

function App() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 990); // adjust breakpoint as needed
    };

    handleResize(); // run initially
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);



  const containerRef = useRef(null);
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const items = [
    { label: "Home", href: "#" },
    { label: "Project", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const mobitems = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: () => window.open("./", "_blank"),
    },
    {
      icon: <GoProjectRoadmap size={18} />,
      label: "Projects",
      onClick: () => window.open("https://youtube.com", "_blank"),
    },
    {
      icon: <FaSnowman size={18} />,
      label: "About",
      onClick: () => window.open("https://youtube.com", "_blank"),
    },
    {
      icon: <IoMdContact size={18} />,
      label: "Contact",
      onClick: () => window.open("https://youtube.com", "_blank"),
    },
    {
      icon: <IoShareSocial size={18} />,
      label: "Socialmedia",
      onClick: () =>
        window.open("https://www.linkedin.com/in/ashutosht05/", "_blank"),
    },
  ];

  useEffect(() => {
    const floatingElement = document.querySelector(".mobile");
    const footer = document.getElementById("pageFooter");

    if (footer && floatingElement) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              floatingElement.classList.add("hide");
            } else {
              floatingElement.classList.remove("hide");
            }
          });
        },
        {
          root: null,
          threshold: 0,
        }
      );

      observer.observe(footer);

      return () => {
        observer.disconnect(); // clean up
      };
    }
  }, []);

  return (
    <div id="smooth-wrapper" style={{cursor: "none"}}>
      <div id="smooth-content">
        {isDesktop && <SmoothCursor />}
        <ClickSpark
          sparkColor="#fff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <header>
            <nav>
              <div id="navbar">
                <div id="nav-left">
                  <CircularText
                    text="ASHUTOSH*KUMAR*TIWARI*"
                    onHover="speedUp"
                    spinDuration={20}
                    className="custom-class"
                  />
                </div>
                <div id="nav-right">
                  <div className="desktopnav" style={{ position: "relative" }}>
                    <GooeyNav
                      items={items}
                      animationTime={600}
                      pCount={15}
                      minDistance={20}
                      maxDistance={42}
                      maxRotate={75}
                      colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                      timeVariance={300}
                    />
                  </div>
                  <div className="mobilenav">
                    <div className="mobile" style={{ position: "fixed" }}>
                      <Dock
                        items={mobitems}
                        panelHeight={48}
                        baseItemSize={30}
                        magnification={40}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <main>
            <div id="photo-container">
              <div id="container">
                <nav>
                  <div id="container-nav">
                    <div id="container-nav-left">
                      <DecryptedText
                        text="ASHUTOSH"
                        animateOn="view"
                        revealDirection="end"
                        speed={150}
                        className="decrypted"
                        encryptedClassName="decrypted"
                      />
                    </div>
                    <div id="container-nav-right">
                      <ul>
                        <li>
                          <Magnet
                            padding={50}
                            disabled={false}
                            magnetStrength={8}
                          >
                            <a
                              href="https://www.linkedin.com/in/ashutosht05/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              LinkedIn
                            </a>
                          </Magnet>
                        </li>
                        <li>
                          <Magnet
                            padding={50}
                            disabled={false}
                            magnetStrength={8}
                          >
                            <a
                              href="https://www.instagram.com/ashutosht05/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Instagram
                            </a>
                          </Magnet>
                        </li>
                        <li>
                          <Magnet
                            padding={50}
                            disabled={false}
                            magnetStrength={8}
                          >
                            <a
                              href="https://x.com/ashutosht05"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Twitter
                            </a>
                          </Magnet>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                <div id="img-container">
                  <img src="animated.jpg" alt="animated" />
                </div>
                <div id="relative-text">
                  Creative mind, curious hands — I build ideas into experiences.
                  From code to motion, I chase the art in interaction.
                </div>
              </div>
            </div>
            <div id="midcontent">
              <div id="split-content">
                <div className="left-content">Something about me...</div>
                <div className="right-content">
                  <div className="desktext">
                    <ScrollReveal
                      baseOpacity={0}
                      enableBlur={true}
                      baseRotation={5}
                      blurStrength={20}
                    >
                      I'm a curious developer and creative thinker who crafts
                      interactive web experiences that inspire and engage. I
                      blend design with code to build digital stories that stand
                      out. I don't just build websites— I create experiences
                      that leave a mark.
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            </div>
            <div id="project-show">
              <div className="post-project-show">
                <div className="projtitdes">
                  <div className="projecttitle">
                    A basic but interesting project...
                  </div>
                  <div className="description">
                    This is a website designed by me
                  </div>
                </div>
                <div className="project-img">
                  <TiltedCard
                    imageSrc="first.png"
                    altText="Portfolio"
                    captionText="Kirti- Let's work together"
                    // containerHeight="300px"
                    // containerWidth="300px"
                    // imageHeight="300px"
                    // imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">Portfolio</p>
                    }
                  />
                </div>
              </div>
            </div>
            <div id="displaymail">
              <div className="displayques">Want to work together?</div>
              <div className="message">Send me a message!</div>
            </div>
            <div className="dismail">
              <a href="mailto:ashutoshkumart82@gmail.com">
                <div ref={containerRef} style={{ position: "relative" }}>
                  <VariableProximity
                    label={"ashutoskumart82"}
                    className={"variable-proximity-demo"}
                    fromFontVariationSettings="'wght' 400, 'opsz' 9"
                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                    containerRef={containerRef}
                    radius={100}
                    falloff="linear"
                  />
                  <br />
                  <VariableProximity
                    label={"@gmail.com"}
                    className={"variable-proximity-demo"}
                    fromFontVariationSettings="'wght' 400, 'opsz' 9"
                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                    containerRef={containerRef}
                    radius={100}
                    falloff="linear"
                  />
                </div>
              </a>
            </div>
          </main>
          <footer id="pageFooter">
            <div id="footer-section">
              <div id="footer-first">
                <span>Great discussions leads to great product...</span>
                <br />
                <span>I won't be suprise if you message me!</span>
              </div>
              <div id="footer-second">
                <div className="navigation">
                  <ul>
                    <li>
                      <a href="./">Home</a>
                    </li>
                    <li>
                      <a href="/">Project</a>
                    </li>
                    <li>
                      <a href="/">About</a>
                    </li>
                    <li>
                      <a href="/">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="footer-third">
                <div className="sociallinks">
                  <ul>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/ashutosht05/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/ashutoshdebug"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/ashutosht05/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/ashutosht05"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="footer-name">ASHUTOSH&#x2122;</div>
            <div className="rights">
              | All rights reserved by Ashutosh Kumar Tiwari |
            </div>
          </footer>
        </ClickSpark>
      </div>
    </div>
  );
}

export default App;
