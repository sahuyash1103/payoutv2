import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Overview from '../components/Overview'
import TransactionsTable from '../components/TransactionsTable.jsx'

function Dashboard() {
    return (
        <main className='flex h-full w-full'>
            <section
                className='inline-flex flex-col items-start shrink-0 bg-[#1E2640] h-full fixed'
            >
                <Navbar />
            </section>
            <section className='h-full w-full ml-[224px]'>
                <Header />
                <div className='flex flex-col items-start gap-8 w-[95%] mx-8 my-10 '>
                    <div className='flex flex-col items-start gap-6 self-stretch'>
                        <Overview />
                    </div>
                    <div className='flex flex-col items-start gap-5 w-full'>
                        <span className='text-[#1A181E] font-[Inter] text-xl not-italic font-medium'>
                            Transactions | This Month
                        </span>
                        <TransactionsTable />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Dashboard