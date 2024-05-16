import React from 'react'
import ClientCard from './ClientCard'
import Icon from '@/Reusable/Icons'

const People = () => {
    return (
        <div className='bg-[#010814] text-white md:p-[4rem] p-[2rem] relative'>
            <h2 className='text-4xl md:w-1/5 my-[1rem] font-bold'>What a few clients say</h2>
            <div className='grid md:grid-cols-3 gap-8'>
                <ClientCard />
                <ClientCard />
                <ClientCard />
                <ClientCard />
                <ClientCard />
                <ClientCard />
            </div>
            <div className='md:w-2/5 m-auto text-center my-[5rem]'>
                <p className='text-[#176FF5] font-crimson md:text-6xl text-4xl'>Be our Next <br /> Client</p>
                <button className='px-[2rem] py-[0.5rem] bg-white rounded-full text-[#176FF5] my-[1rem] '>Send a Message</button>
            </div>
            <div className='text-white  flex justify-between'>
                <p><span>©</span>2024 Bridal Growth. All rights reserved.</p>
                <div>
                    <Icon type='medium' />
                    <Icon name='linkedin' />
                </div>
            </div>
        </div>
    )
}

export default People
