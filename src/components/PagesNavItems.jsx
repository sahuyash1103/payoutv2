import React from 'react'

function PagesNavItem({ name, Icon, active }) {
    return (
        <div className={`flex items-start gap-3 py-2 px-4 w-52 rounded ${active && 'bg-[#ffffff1a]'} cursor-pointer hover:bg-[#ffffff1a]`}>
            <Icon className='w-5 h-5 shrink-0 opacity-80' />
            <span className='text-white font-[Inter] text-[14px] not-italic font-medium leading-5 opacity-80'>{name}</span>
        </div>
    )
}

export default PagesNavItem