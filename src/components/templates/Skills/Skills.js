import React from 'react'
import SkillCard from '@/components/modules/SkillsCard/SkillCard'
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
function Skills() {

  return (
    <div className='w-full flex flex-wrap  justify-between items-center max-md:flex-col'>
        <SkillCard duration={'1000'} disc="i have deep understanding about designing white html and css and this help me a lot" icon={<FaHtml5 /> }/>
        <SkillCard duration={'2000'} disc="i have a prity good skill about this one i love it i live it and i can use this for the rest of my life" icon={<FaReact />}/>
        <SkillCard duration={'2000'} disc="i have a good relation with this one i love it but not so much 😂 i kidding i have skill on this one to" icon={<SiNextdotjs />}/>
        <SkillCard duration={'1000'} disc="i really love to be better in porgramming and earn some experince" icon={<MdOutlineDesignServices />}/>
    </div>
  )
}

export default Skills
