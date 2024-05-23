import React from 'react'

const Hero = () => {
    return (
        <div className='relative w-5/5  mt-[75px] ' style={{ height: 'calc(80vh - 80px)' }}>
            <video autoPlay loop muted className='absolute top-0 left-0 h-full w-full object-cover'>
                <source src="/Assets/bg-video.webm" type="video/mp4" className='w-full h-full' />
                Your browser does not support the video tag.
            </video>
            <div className='font-crimson absolute top-0 left-0 w-full h-full bg-[#010814cc] flex flex-col justify-center items-center text-white'>
                <div className='md:w-4/5 w-[95%] m-auto text-center'>
                    <h2 className='md:text-6xl text-4xl'>UNLOCK THE SECRET TO BOOSTING YOUR BUSINESS REVENUE</h2>
                    <p className='md:text-2xl w-full m-auto p-[1rem] my-[1rem]'>Are you tired of feeling like your business is stuck in neutral? Are you struggling to attract new customers and increase
                        revenue? Well, I’ve got good news for you! With the right combination of SEO and email marketing strategies, you can unlock
                        the full potential of your business and watch your revenue soar!</p>

                </div>
            </div>
        </div>
    )
}

export default Hero
