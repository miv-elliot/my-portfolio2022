import React from 'react';
// import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col'>
            <p className='pb-2 font-bold '>My Portfolio 2022 | miftah parid</p>
            <h1 className='md:py-6 py-3 text-5xl md:text-7xl sm:text-6xl font-bold'>Welcom my Gallery</h1>
            <div className='flex justify-center items-center'>
              <p className='md:text-4xl sm:text-3xl text-xl font-bold'>Artwork, Designer, Illustrator</p>
              {/* <Typed
                className='md:text-5xl sm:text-4xl text-xl font-bold pl-2'
                  strings={['artwork', 'designer', 'photography']}
                  typeSpeed={120}
                  backSpeed={140}
                  loop
                /> */}
            </div>
            <p className='md:text-1xl text-xl font-bold text-gray-300'>selamat menikmati karya saya dan semoga terhibur denga karya yang saya suguhkan</p>
            <button className='w-[200px] rounded-2xl font-medium py-3 mx-auto bg-[#c5c5] my-6 hover:bg-orange-200  '>Let's look</button>
      </div>
    </div>
  )
}

export default Hero