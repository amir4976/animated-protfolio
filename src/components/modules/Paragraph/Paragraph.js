"use client"
import React,{useEffect} from 'react'
import { useScroll, motion, useTransform} from 'framer-motion'
import { useRef } from 'react'


function Paragraph({value}) {


    const element = useRef(null)
    const {scrollYProgress} = useScroll({
        target: element,
        offset:['start 0.9','start start']
    })

    const words = value.split(" ")
  return (
    <motion.p className='text-[40px] max-w-[1280px] max-sm:w-full py-10 font-GothamBlack flex flex-wrap capitalize leading-[50px]' ref={element} style={{opacity:scrollYProgress}}>
        {
        words.map((word,i)=>{
            const start = i / words.length;
            const end  = start + (1 / words.length)
            return <Word key={i} range={[start,end]} progress={scrollYProgress} >{word}</Word>
        })
        }
    </motion.p>
  )
}

const Word= ({children,range,progress})=>{
    const opacity = useTransform(progress,range,[0,1])
    return (
        <span className='word max-sm:text-lg' >
        <span className='shadow '>{children}</span>
        <motion.span className='mr-5' style={{opacity: opacity}}> {children} </motion.span>
        </span>
    )
}


export default Paragraph
