import React, { useContext } from 'react'

const header = ({data}) => {
  
  
  return (
    <div className='width-full h-18 bg-black flex justify-between items-center px-4'>
      <h1 className='text-white text-2xl font-medium'>Hello<br /> <span className='text-3xl'>{data.employeeName}👋</span> </h1>
      <button className='bg-red-500 text-white px-4 py-2 rounded-full cursor-pointer hover:scale-105 active:scale-90 transition' >logOut</button>
    </div>
  )
}

export default header
