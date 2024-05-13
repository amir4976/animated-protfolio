"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TiSocialInstagram } from "react-icons/ti";
import { IoLogoFigma } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { PiMediumLogoFill } from "react-icons/pi";
import LocomotiveScroll from 'locomotive-scroll';
function Landing() {
  useGSAP(() => {
    let tl = gsap.timeline({});
    var start = tl.startTime();
    tl.startTime(6);
  
    tl.from(".MainTitle", {
      duration: 1,
      opacity: 0,
      ease: "power3.inOut",
      stagger: 0.03,
    });
    tl.from(".star", {
      yPercent: 100,
      duration: 0.3,
      opacity: 0,
      ease: "power3.inOut",
    });
    tl.from(".name", {
      duration: 1,
      opacity: 0,
      xPercent: -200,
      ease: "power3.inOut",
      stagger: 0.03,
    });
    tl.from(".img", {
      xPercent: -100,
      duration: 0.5,
      opacity: 0,
      ease: "expo.in",
      opacity: 0,
    });
    tl.from('.socialmedia',{
      stagger: 0.07,
      duration:0.5,
      opacity:0,
      yPercent:30,
    })
  });
  useEffect(()=>{
    const scroll = new LocomotiveScroll();
  },[])
  return (
    <>
      <div id="landing" className="h-[1000px] flex justify-between items-center font-AntonFont " data-scroll data-scroll-speed="0.5">
        <div className="container flex justify-between items-center max-md:flex-col mx-auto max-md:w-full max-lg:justify-center">
          <div className="left h-400 w-full h-full ">
            <div className="flex justify-between items-center max-xl:justify-center flex-col max-md:w-full max-lg:justify-center">
              <div className="MainTitle text-[200px] font-AntonFont  leading-[0.9] max-md:text-center h-fit overflow-hidden max-sm:text-7xl max-md:w-full max-md:justify-center  max-md:text-5xl "   >
                PROGRAM <br />
                DESIGNER <br />
              </div>
              <div className=" name text-[6rem] text-start leading-tight max-md:text-center  w-full h-fit m-0 p-0  bg-gradient-to-r from-[#FA709A] to-[#FEE140] inline-block text-transparent bg-clip-text max-md:text-4xl max-2xl:text-center"  >
                AMIR H AHMADI
              </div>
            </div>
            <div className=" max-md:w-full  py-5 h-[150px] max-md:px-6">
              <div className="social-icons flex justify-between">
                <div className="socialmedia" data-scroll data-scroll-speed="0.1">
                  <TiSocialInstagram />
                </div>
                <div className="socialmedia"data-scroll data-scroll-speed="0.09">
                  <IoLogoFigma />
                </div>
                <div className="socialmedia" data-scroll data-scroll-speed="0.08" >
                  <CiLinkedin />
                </div>
                <div className="socialmedia" data-scroll data-scroll-speed="0.07">
                  <BsTwitterX />
                </div>
                <div className="socialmedia" data-scroll data-scroll-speed="0.06">
                  <FaTelegram />
                </div>
                <div className="socialmedia" data-scroll data-scroll-speed="0.05">
                  <PiMediumLogoFill />
                </div>
              </div>
              <button className="LandingBTN w-full h-14 bg-[#0B0B0B] mt-10 text-white rounded-sm text-center overflow-hidden">
                <div className="LandingBTN-layer py-2  px-4 flex justify-center items-center   w-full h-full   font-mono">DOWNLOAD CV</div>
              </button>
            </div>
          </div>
          <div className="star h-[600px] flex items-start max-2xl:hidden"  >
            <Image
              src={"./Images/Portal.svg"}
              className="max-sm:hidden "
              width={300}
              height={300}
            />
          </div>
          <div className="right  w-full flex justify-end max-2xl:hidden overflow-hidden ">
            <Image
              src="/Images/cover2.jpg"
              className="max-sm:hidden img"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;


