import React from 'react'
import { ArrowIcon } from '../assets/svgs/'

const OverviewCard = ({ title, value }) => {
    return (
        <div className='flex p-5 flex-col items-start gap-4 flex-1 rounded-lg bg-white shadow-shadowcard self-stretch'>
            <span className='text-[#4D4D4D] font-[Inter] text-base not-italic font-normal'>
                {title}
            </span>
            <span className='text-[#1A181E] font-[Inter] text-[32px] not-italic font-medium leading-[38px]'>
                {value}
            </span>
        </div>
    )
}

function Overview() {
    return (
        <div className='flex flex-col items-start gap-6 self-stretch'>
            <div className='flex flex-col items-start self-stretch gap-5'>
                <div className='flex justify-between items-center self-stretch'>
                    <span className='text-[#1A181E] font-[Inter] text-xl not-italic font-medium'>
                        Overview
                    </span>
                    <div className='flex justify-center items-center gap-4 w-[137px] h-9 shrink-0 rounded bg-white border border-solid border-[#D9D9D9]'>
                        <span className='text-[#4D4D4D] font-[Inter] text-base not-italic font-normal'>
                            Last Month
                        </span>
                        <ArrowIcon className='w-4 h-4 shrink-0' />
                    </div>
                </div>
            </div>
            <div className='flex items-start gap-5 self-stretch'>
                <div className='flex justify-center items-center gap-6 flex-1'>
                    <OverviewCard title={'Online orders'} value={'231'} />
                </div>
                <div className='flex flex-col text-start gap-4 flex-1'>
                    <OverviewCard title={'Amount received'} value={'₹23,92,312.19'} />
                </div>
            </div>
        </div>
    )
}

export default Overview