import React from 'react'
import Quote from './Quote'

const Result = () => {
    return (
        <div className='bg-[#D8E6FD] flex justify-around max-md:flex-col p-[1rem] gap-4 p-[2.5rem] relative mt-[5rem]'>
            <aside className='basis-[30%] '>
                <h2 className='text-[#0946AE] text-4xl font-bold'>Our result oriented approach</h2>
                <div>
                    <h2 className='font-bold text-3xl mt-[1rem]'>Understanding the company</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Viverra nec ultrices enim in elit ac volutpat. Justo aliquet leo mauris </p>
                </div>
                <div>
                    <h2 className='font-bold text-3xl mt-[1rem]'>Research & strategy</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Viverra nec ultrices enim in elit ac volutpat. Justo aliquet leo mauris </p>
                </div>
                <div>
                    <h2 className='font-bold text-3xl mt-[1rem]'>Data</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Viverra nec ultrices enim in elit ac volutpat. Justo aliquet leo mauris  </p>
                </div>
                <div>
                    <h2 className='font-bold text-3xl mt-[1rem]'>Iteration</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Viverra nec ultrices enim in elit ac volutpat. Justo aliquet leo mauris  </p>
                </div>
            </aside>
            <aside className='basis-[39%]'>
                <Quote />
            </aside>
        </div>
    )
}

export default Result
