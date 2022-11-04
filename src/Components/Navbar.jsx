import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
      setNav(!nav)
    }

  return (
    <div className='flex  justify-between items-center h-24 mx-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-4xl pl-7 font-bold'>Miftah Parid.</h1>
      <ul className='px-7 pointer-events-auto hidden md:flex rounded-l-3xl shadow-lg bg-[#c5c5]'>
        <li className='p-4 hover:bg-orange-200 rounded-b-xl'>Home</li>
        <li className='p-4 hover:bg-orange-200 rounded-b-xl'>Services</li>
        <li className='p-4 hover:bg-orange-200 rounded-b-xl'>Faq</li>
        <li className='p-4 hover:bg-orange-200 rounded-b-xl'>About</li>
        <li className='p-4 hover:bg-orange-200 rounded-b-xl'>Contact</li>
      </ul>
      <di onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/> }
      </di>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-00 bg-[#c0c0c0] ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <ul className='uppercase pt-24'>
            <li className='p-4 border-b border-b-gray-300'>Home</li>
            <li className='p-4 border-b border-b-gray-300'>Services</li>
            <li className='p-4 border-b border-b-gray-300'>Faq</li>
            <li className='p-4 border-b border-b-gray-300'>About</li>
            <li className='p-4'>Contact</li>
          </ul>
      </div>
    </div>
  )
}

export default Navbar