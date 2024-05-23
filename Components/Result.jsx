import React from 'react'
import Quote from './Quote'

const Result = () => {
    return (
        <div className='bg-[#D8E6FD] flex justify-around max-md:flex-col p-[1rem] gap-4 md:p-[2.5rem] 0-[1rem] relative mt-[5rem]'>
            <aside className='basis-[30%] '>
                <h2 className='text-[#0946AE] md:text-4xl text-3xl font-bold'>Don’t Miss Out on This Opportunity to Transform Your Business</h2>
                <div className='mt-[1rem]'>
                    <p>Don’t let your business stagnate any longer. With our SEO and email marketing strategies, you’ll attract new customers,
                        increase revenue, and dominate your competition.</p>
                </div>
                <div>
                    <h2 className='font-bold text-3xl mt-[1rem]'>What You’ll Get</h2>
                    <ul className='px-[2rem]'>
                        <li className='list-disc'>A comprehensive keyword research report</li>
                        <li className='list-disc'>Technical SEO audit and implementation</li>
                        <li className='list-disc'>On and off-page optimization services</li>
                        <li className='list-disc'>Content marketing strategy development</li>
                        <li className='list-disc'>Email campaign design and implementation</li>
                    </ul>
                </div>
                {/* <div>
                    <h2 className='font-bold text-3xl mt-[1rem]'>Data</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Viverra nec ultrices enim in elit ac volutpat. Justo aliquet leo mauris  </p>
                </div> */}
                <div>
                    <h2 className='font-bold text-3xl mt-[1rem]'>Iteration</h2>
                    <p>Our team of experts is dedicated to helping businesses like yours succeed online. Whether you need help with keyword
                        research, technical SEO, content marketing, or email campaign design, we’ve got your covered. Let us help you unlock the
                        full potential of your business and watch your revenue soar! </p>
                </div>
            </aside>
            <aside className='basis-[39%]'>
                <Quote />
            </aside>
        </div>
    )
}

export default Result
