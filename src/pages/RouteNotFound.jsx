import React from 'react'
import { Link } from 'react-router-dom'

function RouteNotFound() {
    return (
        <div className='flex flex-col justify-center items-center w-full h-screen bg-[#1e2640] gap-4'>
            <span className='text-[40px] text-center text-white font-medium'>
                404 <br /> NOT FOUND
            </span>
            <span className='text-[20px] text-center text-white font-normal'>
                go to
                <Link to="/" className='mx-2 hover:underline '>
                    Home Page
                </Link>
            </span>
        </div>
    )
}

export default RouteNotFound