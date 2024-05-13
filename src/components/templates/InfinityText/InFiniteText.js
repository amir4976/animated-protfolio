"use client"
import React from 'react'
import styles from './infinityText.module.css'
import gsap from 'gsap'
import { useEffect,useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";
function InFiniteText() {
    const firstText = useRef(null)
    const secondText = useRef(null)
    const slider = useRef(null)

    let xPercent = 0;
    let direction = -1;

    useEffect(() => { 
        console.log('object')
        gsap.registerPlugin(ScrollTrigger)
        requestAnimationFrame(animation)

        gsap.to(slider.current,{
            scrollTrigger:{
               trigger:document.documentElement
               ,start:0,
               end:window.innerHeight,
               scrub:true,
               onUpdate: e => direction = e.direction * -1
            },
            x:"-=300px",
            
        })
    },[])

    const animation =()=>{
        if(xPercent <= -100){
            xPercent= 0;
        }
        if(xPercent > 0){
            xPercent= -100; 
        }
            gsap.set(firstText.current , {xPercent: xPercent})
            gsap.set(secondText.current , {xPercent: xPercent})
            xPercent += 0.1 * direction;
            requestAnimationFrame(animation);
    }

    return (
    <div className={styles.main}>
        <div className={styles.sliderContainer}>
            <div ref={slider} className={styles.slider}>
                <p ref={firstText}> front end programmer <span className='text-7xl'><FaArrowRight /></span></p>
                <p ref={secondText}> front end programmer <span className='text-7xl'><FaArrowRight /></span></p>
            </div>
        </div>
    </div>
  )
}

export default InFiniteText
