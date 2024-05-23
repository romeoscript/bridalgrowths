'use client'
import React, { useState } from 'react'
import { logo } from '@/public/Assets/';
import Icon from '@/Reusable/Icons';
import Modaly from '@/Reusable/modal';

const Nav = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className='bg-black h-[80px] flex justify-around items-center z-100 fixed w-full top-0 px-[1rem]' style={{zIndex:100}}>
            <aside>
                <img src={logo.src} alt="" className='max-md:w-3/5' />
            </aside>
            <aside className='flex items-center gap-8'>
                <button className='text-white flex gap-2 max-md:hidden'>
                    <span>Case studies</span>
                    <Icon type='arrowslant' />
                </button>
                <button className='bg-[#176FF5] px-[2rem] py-[0.5rem] max-md:py-[0.3rem] max-md:px-[0.9rem] rounded-full text-white max-md:w-[120px]' onClick={showModal}>
                    Get a Quote
                </button>
                <Modaly isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            </aside>
        </div>
    )
}

export default Nav
