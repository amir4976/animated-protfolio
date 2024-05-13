'use client'
import React from 'react'
import Link from 'next/link'
function Menu() {
  const links = [
    {path:'/',lable:'Home'},
    {path:'/work',lable:'Word'},
    {path:'/contact',lable:'Contact'},
    {path:'/About',lable:'About'},
  ]
  const container = useRef()
  const [isMenuOpen,setIsMenuOpen] = useState(false)

    const toggleMenu = ()=>{
        setIsMenuOpen(prev=>!prev)
    } 

  return (
    <div className='menu-contaienr' ref={container}>
        
    </div>
  )
}

export default Menu
