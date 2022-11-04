import React from 'react'
import Users from '../assets/Users.png'
import Delivery from '../assets/Delivery.png'
import web from '../assets/web.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1080px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-100'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Users} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>149$</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p> 
                    <p className='py-2 border-b mx-8'>Sent up to 2 GB</p>
                </div>
                <button className='w-[200px] rounded-md font-medium py-3 px-6 mx-auto bg-[#c5c5] my-6 '>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-100'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Delivery} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>149$</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p> 
                    <p className='py-2 border-b mx-8'>Sent up to 2 GB</p>
                </div>
                <button className='w-[200px] rounded-md font-medium py-3 px-6 mx-auto bg-[#9e199e7a] my-6 '>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-100'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={web} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>149$</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p> 
                    <p className='py-2 border-b mx-8'>Sent up to 2 GB</p>
                </div>
                <button className='w-[200px] rounded-md font-medium py-3 px-6 mx-auto bg-[#c5c5] my-6 '>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards