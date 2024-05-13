import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Footer() {
  return (
    <div className='w-full bg-[#0B0B0B] flex relative  justify-center items-center h-fit  max-md:h-fit max-md:text-center p-10'>
          <div class="container flex justify-between relative">
      <div className=" absolute w-full h-[200px] bg-[#A87FF3] top-[-200px] rounded-lg flex justify-center items-center text-2xl font-GothamBlack">Thanks for visit my website <br/>
If you have any questions you can write me to any of my social networks, I am sure I will answer you.  </div>
            <div className="w-full flex justify-center items-center  ">
        <div className=" w-full container h-[200px] flex justify-between items-center max-md:flex-col max-md:gap-9 ">
            <div className="logo flex "><Image src={"/images/Logo.png"} width={70} height={70}/></div>
                <ul className='flex gap-9 font-sans font-bold text-white max-md:flex-col'>
                    <li><Link href={'/'}> Home </Link></li>
                    <li>Portfolio</li>
                    <li><Link rel="stylesheet" href="#skills">Skills </Link></li>
                    <li><Link href={'#about'}>About Me</Link></li>
                </ul>
            <div className="contact-me font-mono flex ">Contact me</div>
        </div>


    </div>
            </div>

    </div>
  )
}

export default Footer;
