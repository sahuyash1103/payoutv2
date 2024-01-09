import React from "react"
import { DownloadIcon, SearchIcon, SrotIcon } from "../assets/svgs"

const TransactionsTableFilterOprionsComponent = () => {
    return (
        <div className='flex justify-between items-center self-stretch w-full'>
            <div className='flex w-[248px] items-start'>
                <div className='flex items-center gap-2 flex-1 py-[10px] px-4 rounded border border-solid border-[#D9D9D9] bg-white'>
                    <SearchIcon className='w-[14px] h-[14px]' />
                    <input type="text"
                        placeholder='Search by order ID...'
                        className='text-[#999] font-[Inter] text-sm not-italic font-normal bg-transparent border-none outline-none'
                    />
                </div>
            </div>
            <div className='flex items-center gap-3 justify-end'>
                <div className='flex items-center gap-[6px] py-[6px] px-3 rounded border border-solid border-[#D9D9D9] bg-white cursor-pointer hover:bg-[#EBEBEB]'>
                    <span className='text-[#4D4D4D] font-[Inter] text-base not-italic font-normal'>Sort</span>
                    <SrotIcon className='w-4 h-4' />
                </div>
                <div className='flex justify-center items-center w-9 h-9 shrink-0 rounded border border-solid border-[#D9D9D9] cursor-pointer hover:bg-[#EBEBEB]'>
                    <DownloadIcon className='w-5 h-5 shrink-0' />
                </div>
            </div>
        </div>
    )
}

export default TransactionsTableFilterOprionsComponent