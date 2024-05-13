import React from 'react'

function MainPageTitle({title,id}) {
  return (
    <div id={id} className='w-full uppercase text-5xl mt-20 text-[#C8FEC7]'>
        <p>{title}</p>
    </div>
  )
}

export default MainPageTitle
