import React from 'react'
import { QuestionMarkOutlineIcon, SearchIcon, MenuIcon, NotificationsIcon, EllipseIcon } from '../assets/svgs/'

function Header() {
    return (
        <div className='flex w-full py-3 px-8 items-center gap-4 bg-white border-b border-solid border-[#D9D9D9] sticky top-0 ' >
            <div className='flex items-center gap-4 flex-1'>
                <span
                    className='flex items-center gap-4 text-[#1A181E] font-[Inter] text-[15px] not-italic font-normal leading-[22px]'
                >
                    Payments
                </span>
                <div className='flex items-center gap-[6px] cursor-pointer hover:underline'>
                    <QuestionMarkOutlineIcon className='w-[14px] h-[14px]' />
                    <span className='text-[#4D4D4D] font-[Inter] text-xs not-italic font-normal'>
                        How it works
                    </span>
                </div>
            </div>
            <div className='flex items-center self-stretch gap-2 shrink-0 w-[400px] rounded-md bg-[#F2F2F2]'>
                <SearchIcon className='w-4 h-4 shrink-0 my-[9px] mx-4 mr-0' />
                <input
                    type='text'
                    placeholder='Search features, tutorials, etc.'
                    className='text-[#808080] font-[Inter] text-[15px] not-italic font-normal leading-[22px] w-full bg-transparent outline-none py-[9px] px-4 pl-0'
                />
            </div>
            <div className='flex justify-end items-start gap-2 flex-1'>
                <div className='flex items-start gap-3'>
                    <span className='w-10 h-10 relative cursor-pointer'>
                        <EllipseIcon className='w-10 h-10 shrink-0 ' />
                        <NotificationsIcon className='w-5 h-5 shrink-0 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]' />
                    </span>
                    <MenuIcon className='w-10 h-10 cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Header