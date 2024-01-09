import React from 'react'
import companyLogo from '../assets/images/companyLogo.png'
import { ChevronDownIcon } from '../assets/svgs/'

function ProfileCard() {
  return (
    <div className='flex w-[192px] items-center gap-3'>
      <img src={companyLogo} alt="company logo" className='w-10 h-10 shrink-0 rounded bg-white' />
      <div className='flex flex-col justify-center items-start gap-1 flex-1'>
        <span
          className='self-stretch text-white font-[Inter] text-[15px] font-medium leading-[22px] not-italic'
        >
          Nishyan
        </span>
        <span
          className='self-stretch text-white font-[Inter] text-[13px] font-normal leading-[16px] not-italic underline opacity-80 cursor-pointer'
        >
          Visit store
        </span>
      </div>
      <ChevronDownIcon className='w-5 h-5 shrink-0 cursor-pointer' />
    </div>
  )
}

export default ProfileCard