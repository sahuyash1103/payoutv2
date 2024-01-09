import React from 'react'
import CompanyProfileCard from './CompanyProfileCard'
import PagesNavItem from './PagesNavItems.jsx'
import { WalletOutlineIcon } from '../assets/svgs'
import { NavbarPageLinksData } from '../data/NavbarLinksData';

function Navbar() {
    return (
        <div
            className='flex flex-col items-center gap-4 py-4 px-[10px] flex-1 w-[224px] h-full'>
            <div className='flex flex-col items-center gap-6 flex-1'>
                <CompanyProfileCard />
                <div className='flex flex-col items-start gap-1 flex-1'>
                    {
                        NavbarPageLinksData.map((page, index) => (
                            <PagesNavItem
                                key={index}
                                name={page.name}
                                Icon={page.icon}
                                active={page.active}
                            />
                        ))
                    }
                </div>
            </div>
            <div className='flex flex-col items-start gap-[10px] w-48 py-[6px] px-3 rounded bg-[#353C53]'>
                <div className='flex items-center gap-3'>
                    <div className='flex items-start gap-[10px] p-[6px] rounded bg-[#ffffff1a] '>
                        <WalletOutlineIcon className='w-6 h-6' />
                    </div>
                    <div className='flex flex-col items-start gap-[2px]'>
                        <span
                            className='text-white font-[Inter] text-[13px] font-normal leading-[16px] not-italic opacity-80'
                        >
                            Available credits
                        </span>
                        <span
                            className='text-white font-[Inter] text-base font-medium not-italic'
                        >
                            222.10
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar