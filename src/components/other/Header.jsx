import React from 'react'

const Header = ({ data }) => {


  return (

    <div className='flex items-end justify-between'>
      <h1 className='text-xl'>Hello  <br /> <span className='text-2xl'>{data.fname} 🖐️ </span>  </h1>
      <button className='bg-red-500 text-white px-5 py-2 rounded text-xl font-medium'>Log out</button>
    </div>

  )
}

export default Header