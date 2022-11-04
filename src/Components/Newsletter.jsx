import React from 'react'
import Select from 'react-select'
import { useEffect, useState } from 'react'

const Newsletter = () => {
    const [datas, setDatas] = useState([]) 
    const [userSelect, setUserSelect] = useState("")

    const getBerries = async() => {
        const berries = await fetch("https://pokeapi.co/api/v2/berry/")
        const value = await berries.json()
        const result = value.results.map(data => {
            return {
                label: data.name,
                value: data.name
            }
        })
        
        setDatas(result.sort((a, b) => a.label.localeCompare(b.label)))
    }

    useEffect(() => {
        getBerries()
    }, [])

    const handleChange = (value) => {
        setUserSelect(value)
    }


  return (
    <div className='w-full bg-[#000] py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & trick to optimize your flow? </h1>
                <p>Sign up to our newsletter and stay up yo date.</p>
            </div>
            <div className='my-4'>
                <p className='font-medium text-1xl '>mencari nama</p>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <Select options={datas} className=' flex w-[200px] font-medium py-4 rounded-md text-[#000]' type='email' placeholder='Enter Name' />
                    <button className='w-[180px] rounded-md font-medium ml-4 py-3 mx-auto bg-[#c5c5] my-4 '>Notify Me</button>
                </div>
                <p>
                    we care about the protection of your data. Read our <span className='text-[#cdda19]'>Privacy Policy.</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter