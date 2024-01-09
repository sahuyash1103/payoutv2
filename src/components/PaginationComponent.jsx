import React from "react"
import { NextIcon, PreviousIcon } from "../assets/svgs"


const PaginationComponent = () => {
    const pages = [1, '...', 10, 11, 12, 13, 14, 15, 16, 17, 18]
    return (
        <div className='flex justify-center items-center gap-6'>
            <div className='flex justify-center items-center gap-[6px] py-[6px] pr-[6px] pl-3 rounded border border-solid border-[#D9D9D9] cursor-pointer hover:bg-[#EBEBEB]'>
                <PreviousIcon className='w-[18px] h-[18px]' />
                <span className='text-[#4D4D4D] text-center font-[Inter] text-sm not-italic font-medium'>
                    Previous
                </span>
            </div>
            {
                pages.map((page, index) => (
                    <div
                        key={index}
                        className={`flex w-[28px] h-[28px] py-[2px] px-0 flex-col justify-center items-center gap-2 rounded cursor-pointer hover:border-[#EBEBEB] hover:border ${page === 10 && 'bg-[#146EB4] py-[6px] px-2'}`}
                    >
                        <span
                            className={`text-[#4D4D4D] text-center font-[Inter] text-sm not-italic font-normal self-stretch ${page === 10 && 'text-white'}`}
                        >
                            {page}
                        </span>
                    </div>
                ))
            }
            <div className='flex justify-center items-center gap-[6px] py-[6px] pr-3 pl-[6px] rounded border border-solid border-[#D9D9D9] cursor-pointer hover:bg-[#EBEBEB]'>
                <span className='text-[#4D4D4D] text-center font-[Inter] text-sm not-italic font-medium'>
                    Next
                </span>
                <NextIcon className='w-[18px] h-[18px]' />
            </div>
        </div>
    )
}

export default PaginationComponent