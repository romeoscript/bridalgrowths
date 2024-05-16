import React from 'react'

const Hero = () => {
    return (
        <div className='relative w-5/5  mt-[75px] ' style={{ height: 'calc(80vh - 80px)' }}>
            <video autoPlay loop muted className='absolute top-0 left-0 h-full w-full object-cover'>
                <source src="/Assets/bg-video.mp4" type="video/mp4" className='w-full h-full' />
                Your browser does not support the video tag.
            </video>
            <div className='font-crimson absolute top-0 left-0 w-full h-full bg-[#010814cc] flex flex-col justify-center items-center text-white'>
                <div className='md:w-3/5 w-[90%] m-auto text-center'>
                    <h2 className='md:text-6xl text-4xl'>Boosting Business Revenue with SEO & Email Marketing Strategies</h2>
                    <p className='md:text-2xl w-4/5 m-auto p-[1rem] my-[1rem]'>Lorem ipsum dolor sit amet consectetur. Viverra nec ultrices enim in elit ac volutpat. Justo aliquet leo mauris</p>

                </div>
            </div>
        </div>

    )
}

export default Hero
