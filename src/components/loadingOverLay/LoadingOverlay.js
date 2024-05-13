"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import {useGSAP} from '@gsap/react'
function LoadingOverlay() {
    useGSAP(()=>{
        gsap.set('#Layer_1-2 #Layer_2-2',{
            autoAlpha:1
        })
        let tl = gsap.timeline()
        tl.from('#Layer_1-2 .cls-1 ',{
            duration: 1,
            opacity: 0,
            yPercent:-200,
            ease: "power3.inOut",
            stagger: 0.03,
            scale:0.2,
            
        })
        tl.from('#Layer_2-2 .cls-1',{
            duration: 1,
            opacity: 0,
            ease: "power3.inOut",
            stagger: 0.03,
        })
        tl.from('.wellcome',{
            duration: 1,
            opacity: 0,
            ease: "power3.inOut",
            stagger: 0.03,
        })
        tl.to('#overlay',{
            duration:0.5,
            opacity:0,
            ease: "power3.in",
        },"<+=3")
        tl.to('#overlay',{
            yPercent:-200
        })
      

    })
  return (
    <div
      id="overlay"
      className="w-full h-screen bg-black fixed top-0 left-0 z-50 flex text-white items-center justify-center flex-col"
    >
      {/* <h1 className="T">Hello my Name is </h1> */}

    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 378.91 33.41" fill="white">
  <g id="Layer_1-2" data-name="Layer 1">
    <g>
      <path className="cls-1" d="M4.18.53v13.54h15.65V.53h4.22v32.35h-4.22v-15.17H4.18v15.17H0V.53h4.18Z"/>
      <path className="cls-1" d="M48.05,17.71h-12.58v11.67h14.02v3.5h-18.19V.53h17.47v3.5h-13.3v10.23h12.58v3.46Z"/>
      <path className="cls-1" d="M54.91.53h4.18v28.85h13.83v3.5h-18V.53Z"/>
      <path className="cls-1" d="M77.57.53h4.18v28.85h13.83v3.5h-18V.53Z"/>
      <path className="cls-1" d="M126,16.37c0,11.14-6.77,17.04-15.03,17.04s-14.55-6.62-14.55-16.42c0-10.27,6.38-16.99,15.03-16.99s14.55,6.77,14.55,16.37ZM100.9,16.9c0,6.91,3.74,13.1,10.32,13.1s10.37-6.1,10.37-13.44c0-6.43-3.36-13.15-10.32-13.15s-10.37,6.38-10.37,13.49Z"/>
      <path className="cls-1" d="M168.87,18.67c-.24-4.51-.53-9.94-.48-13.97h-.14c-1.1,3.79-2.45,7.82-4.08,12.29l-5.71,15.7h-3.17l-5.23-15.41c-1.54-4.56-2.83-8.74-3.74-12.58h-.1c-.1,4.03-.34,9.46-.62,14.31l-.86,13.87h-3.98l2.26-32.35h5.33l5.52,15.65c1.34,3.98,2.45,7.54,3.26,10.9h.14c.82-3.26,1.97-6.82,3.41-10.9l5.76-15.65h5.33l2.02,32.35h-4.08l-.82-14.21Z"/>
      <path className="cls-1" d="M187.39,32.88v-13.73L177.17.53h4.75l4.56,8.93c1.25,2.45,2.21,4.42,3.22,6.67h.1c.91-2.11,2.02-4.22,3.26-6.67l4.66-8.93h4.75l-10.85,18.58v13.78h-4.22Z"/>
      <path className="cls-1" d="M216.34,32.88V.53h4.56l10.37,16.37c2.4,3.79,4.27,7.2,5.81,10.51l.1-.05c-.38-4.32-.48-8.26-.48-13.3V.53h3.94v32.35h-4.22l-10.27-16.42c-2.26-3.6-4.42-7.3-6.05-10.8l-.14.05c.24,4.08.34,7.97.34,13.35v13.83h-3.94Z"/>
      <path className="cls-1" d="M253.15,22.71l-3.36,10.18h-4.32L256.46.53h5.04l11.04,32.35h-4.46l-3.46-10.18h-11.47ZM263.76,19.44l-3.17-9.31c-.72-2.11-1.2-4.03-1.68-5.9h-.1c-.48,1.92-1.01,3.89-1.63,5.86l-3.17,9.36h9.74Z"/>
      <path className="cls-1" d="M304.37,18.67c-.24-4.51-.53-9.94-.48-13.97h-.14c-1.1,3.79-2.45,7.82-4.08,12.29l-5.71,15.7h-3.17l-5.23-15.41c-1.54-4.56-2.83-8.74-3.74-12.58h-.1c-.1,4.03-.34,9.46-.62,14.31l-.86,13.87h-3.98l2.26-32.35h5.33l5.52,15.65c1.34,3.98,2.45,7.54,3.26,10.9h.14c.82-3.26,1.97-6.82,3.41-10.9l5.76-15.65h5.33l2.02,32.35h-4.08l-.82-14.21Z"/>
      <path className="cls-1" d="M332.45,17.71h-12.58v11.67h14.02v3.5h-18.19V.53h17.47v3.5h-13.3v10.23h12.58v3.46Z"/>
      <path className="cls-1" d="M353.66.53v32.35h-4.18V.53h4.18Z"/>
      <path className="cls-1" d="M360.38,27.79c1.87,1.15,4.61,2.11,7.49,2.11,4.27,0,6.77-2.26,6.77-5.52,0-3.02-1.73-4.75-6.1-6.43-5.28-1.87-8.54-4.61-8.54-9.17,0-5.04,4.18-8.78,10.46-8.78,3.31,0,5.71.77,7.15,1.58l-1.15,3.41c-1.06-.58-3.22-1.54-6.14-1.54-4.42,0-6.1,2.64-6.1,4.85,0,3.02,1.97,4.51,6.43,6.24,5.47,2.11,8.26,4.75,8.26,9.5,0,4.99-3.7,9.31-11.33,9.31-3.12,0-6.53-.91-8.26-2.06l1.06-3.5Z"/>
    </g>
  </g>
    </svg>
      


      


<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290.47 37.95" fill="white">
    <g id="Layer_2-2" data-name="Layer 1">

  <path className="cls-1" d="M19.29,0l5.64,37.95h-10.08l-.53-6.82h-3.53l-.59,6.82H0L5.03,0h14.26ZM14.07,24.4c-.5-4.3-1-9.61-1.5-15.94-1.01,7.27-1.64,12.58-1.89,15.94h3.4Z"/>
  <path className="cls-1" d="M57.06,0v37.95h-8.62V12.33s-3.45,25.62-3.45,25.62h-6.12l-3.62-25.03v25.03h-8.64V0h12.77c.38,2.28.77,4.97,1.17,8.07l1.4,9.65L44.22,0h12.84Z"/>
  <path className="cls-1" d="M70.89,0v37.95h-9.87V0h9.87Z"/>
  <path className="cls-1" d="M74.85,0h6.98c4.66,0,7.81.18,9.46.54s2.99,1.28,4.03,2.75,1.56,3.83,1.56,7.07c0,2.95-.37,4.94-1.1,5.95s-2.18,1.62-4.34,1.83c1.95.48,3.27,1.13,3.94,1.95s1.09,1.56,1.25,2.24.25,2.55.25,5.61v10.01h-9.16v-12.61c0-2.03-.16-3.29-.48-3.77s-1.16-.73-2.52-.73v17.11h-9.87V0ZM84.71,6.49v8.44c1.11,0,1.89-.15,2.33-.46s.67-1.29.67-2.96v-2.09c0-1.2-.21-1.99-.64-2.37s-1.21-.56-2.36-.56Z"/>
  <path className="cls-1" d="M131.85,0v37.95h-9.87v-15.94h-2.95v15.94h-9.87V0h9.87v13.57h2.95V0h9.87Z"/>
  <path className="cls-1" d="M161.33,0l5.64,37.95h-10.08l-.53-6.82h-3.53l-.59,6.82h-10.2L147.06,0h14.26ZM156.1,24.4c-.5-4.3-1-9.61-1.5-15.94-1,7.27-1.64,12.58-1.89,15.94h3.4Z"/>
  <path className="cls-1" d="M191.33,0v37.95h-9.87v-15.94h-2.95v15.94h-9.87V0h9.87v13.57h2.95V0h9.87Z"/>
  <path className="cls-1" d="M225.74,0v37.95h-8.62V12.33s-3.45,25.62-3.45,25.62h-6.12l-3.62-25.03v25.03h-8.64V0h12.77c.38,2.28.77,4.97,1.17,8.07l1.4,9.65,2.27-17.72h12.84Z"/>
  <path className="cls-1" d="M246.76,0l5.64,37.95h-10.08l-.53-6.82h-3.53l-.59,6.82h-10.2L232.49,0h14.26ZM241.53,24.4c-.5-4.3-1-9.61-1.5-15.94-1,7.27-1.64,12.58-1.89,15.94h3.4Z"/>
  <path className="cls-1" d="M254.07,0h7.38c4.77,0,7.99.22,9.67.66s2.96,1.16,3.83,2.16,1.42,2.11,1.64,3.34.33,3.64.33,7.23v13.29c0,3.41-.16,5.68-.48,6.83s-.88,2.05-1.68,2.7-1.78,1.1-2.95,1.36-2.94.39-5.3.39h-12.45V0ZM263.94,6.49v24.96c1.42,0,2.3-.29,2.62-.86s.49-2.12.49-4.65v-14.74c0-1.72-.05-2.82-.16-3.3s-.36-.84-.75-1.07-1.12-.34-2.2-.34Z"/>
  <path className="cls-1" d="M290.47,0v37.95h-9.87V0h9.87Z"/>
    </g>
</svg>

<p className="wellcome">wellcome to my portfolio</p>
    </div>

  );
}

export default LoadingOverlay;