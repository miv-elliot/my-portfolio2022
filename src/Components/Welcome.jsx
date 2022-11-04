import React from 'react'
import herose from '../assets/herose.jpg'

const Welcome = () => {
  return (
    <div className='w-full bg-[#fff] py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={herose} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur.</p>
                <h1 className='md:text-4xl text-2xl font-bold py-2'>Lorem ipsum dolor sit.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptate obcaecati provident officiis veniam soluta dolorum dolore, eius minus rem, vitae praesentium ducimus?
                </p>
                <button className='w-[200px] rounded-md font-medium py-3 mx-auto md:mx-0 bg-[#c5c5] my-6 '>Let's look</button>
            </div>
        </div>
    </div>
  )
}

export default Welcome