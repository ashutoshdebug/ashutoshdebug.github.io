import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    '/media/dev/f1.jpg',
    '/media/dev/f2.jpg',
    '/media/dev/f3.jpg',
    '/media/dev/f4.jpeg',
    '/media/dev/f5.jpg',
    '/media/dev/f6.jpeg',
    '/media/dev/f7.jpeg',
    '/media/dev/f8.jpg',
  ]

  useGSAP(function () {
  const mm = gsap.matchMedia();

  // ✅ For larger screens (your current working scrollTrigger)
  mm.add("(min-width: 769px)", () => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: "top 5%",
        end: "top -200%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });

  // ✅ For smaller screens (continuous looping swap)
  mm.add("(max-width: 768px)", () => {
    let index = 0;

    // set the first image
    gsap.set(imageRef.current, { opacity: 1 });
    imageRef.current.src = imageArray[index];

    // loop through array
    gsap.to({}, {
      repeat: -1,
      repeatDelay: 2, // image stays 2s before swapping
      onRepeat: () => {
        index = (index + 1) % imageArray.length;
        gsap.to(imageRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            imageRef.current.src = imageArray[index];
            gsap.to(imageRef.current, { opacity: 1, duration: 0.1 });
          },
        });
      }
    });
  });

  return () => mm.revert(); // cleanup
});



  return (
    <div className='parent'>
      <div id='page1' className='py-1 '>
        <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h-[50vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[28vw] lg:top-60 top-30 lg:left-[30vw] left-[30vw] mix-blend-difference'>
          <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>
        <div className='relative font-[font2]'>
          <div className='lg:mt-[55vh] mt-[30vh]'>
            <h1 className='lg:text-[15vw] text-[18vw] text-center uppercase leading-[18vw] lg:mix-blend-hue'>Ashutosh <br />
              K. Tiwari</h1>
          </div>
          <div className='lg:pl-[40%] lg:mt-20 mt-4 p-3'>
            <p className='lg:text-6xl text-xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I’m curious by nature and open to ideas from every angle. For me, creativity only thrives when ego steps aside. I see projects—whether a website, a model, or a design—not as static outputs but as living systems with values, purpose, and stories to tell. That’s the perspective I carry into every line of code, every project, and every collaboration.</p>
          </div>
        </div>
      </div>
      <div id='page2' className=" h-screen">

      </div>
    </div>
  )
}

export default Agence