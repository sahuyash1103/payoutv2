import React from 'react'
import PaginationComponent from './PaginationComponent'
import TransactionsTableFilterOprionsComponent from './TransactionsTableFilterOprionsComponent'
import { InfoIcon, TriangleIcon } from '../assets/svgs'
import { tableColumns, tableData } from '../data/tableData';

function TransactionsTable() {
    return (
        <div className='flex flex-col items-center px-3 pt-3 pb-6 gap-3 w-full rounded-lg bg-white shadow-shadowcard overflow-hidden'>
            <TransactionsTableFilterOprionsComponent />
            <div className='flex flex-col items-start w-full'>
                <table className='w-full'>
                    <thead className='flex flex-col w-full'>
                        <tr className='flex py-[10px] px-3 items-center gap-10 w-full rounded bg-[#F2F2F2]'>
                            <th
                                className='flex items-center gap-1 flex-1 w-full justify-start'
                            >
                                <span className='text-[#4D4D4D] font-[Inter] text-sm not-italic font-medium'>
                                    {tableColumns[0].title}
                                </span>
                            </th>
                            <th
                                className='flex items-center gap-1 flex-1 w-full justify-start'
                            >
                                <span className='text-[#4D4D4D] font-[Inter] text-sm not-italic font-medium'>
                                    {tableColumns[1].title}
                                </span>
                                <TriangleIcon className='w-2 h-2' />
                            </th>
                            <th
                                className='flex items-center gap-1 flex-1 w-full justify-end'
                            >
                                <span className='text-[#4D4D4D] font-[Inter] text-sm not-italic font-medium'>
                                    {tableColumns[2].title}
                                </span>
                            </th>
                            <th
                                className='flex items-center gap-1 flex-1 w-full justify-end'
                            >
                                <span className='text-[#4D4D4D] font-[Inter] text-sm not-italic font-medium'>
                                    {tableColumns[3].title}
                                </span>
                                <InfoIcon className='w-[14px] h-[14px]' />
                            </th>
                        </tr>
                    </thead>
                    <tbody className='flex flex-col w-full'>
                        {
                            tableData.map((row, index) => (
                                <tr
                                    key={index}
                                    className='flex h-12 py-[14px] px-3 items-center gap-10 w-full cursor-pointer hover:bg-[#F5F5F5]'
                                >
                                    <td className='flex items-center gap-1 flex-1 w-full justify-start'>
                                        <span className='text-[#146EB4] font-[Inter] text-sm not-italic font-medium'>
                                            {row.orderId}
                                        </span>
                                    </td>
                                    <td className='flex items-center gap-1 flex-1 w-full justify-start'>
                                        <span className='text-[#1A181E] font-[Inter] text-sm not-italic font-normal'>
                                            {row.orderDate}
                                        </span>
                                    </td>
                                    <td className='flex items-center gap-1 flex-1 w-full justify-end'>
                                        <span className='text-[#1A181E] font-[Inter] text-sm not-italic font-normal'>
                                            {row.orderAmount}
                                        </span>
                                    </td>
                                    <td className='flex items-center gap-1 flex-1 w-full justify-end'>
                                        <span className='text-[#1A181E] font-[Inter] text-sm not-italic font-normal'>
                                            {row.transactionFees}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <PaginationComponent />
        </div>
    )
}

export default TransactionsTable