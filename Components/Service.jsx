"use client"
import React, { useEffect, useRef } from 'react'
import ServiceCard from './ServiceCard'
import { people } from '@/public/Assets/'

const Service = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const inView = rect.top <= 0 && rect.bottom >= window.innerHeight;

            if (inView) {
                document.body.style.overflowY = 'hidden';
                section.style.overflowY = 'scroll';
            } else {
                document.body.style.overflowY = 'scroll';
                section.style.overflowY = 'hidden';
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id='section' ref={sectionRef} className='sticky-section md:my-[4rem]'>
            <div className='relative py-[2rem] md:px-[4rem] w-4/5 m-auto h-screen'>
                <aside className='md:flex items-start justify-between first-aside gap-[4rem]'>
                    <div className='flex flex-col gap-[2rem] justify-between h-full'>
                        <ServiceCard
                            title="Keyword Research"
                            text='Identifying relevant keywords for your business to optimize website content.'
                            iconText='magnify'
                            className='service-card' />
                        <ServiceCard
                            title="Technical SEO"
                            text='Optimizing website structure, content, and HTML elements to improve search engine rankings.'
                            iconText='seo'
                            className='service-card' />
                    </div>
                    <div className='flex-shrink-0'>
                        <img src={people.src} alt="" className='object-contain w-full h-[700px]' />
                    </div>
                </aside>
                <aside className='md:flex items-start gap-[6rem] my-[2rem] second-aside'>
                    <div className='flex flex-col gap-[2rem] justify-between h-full'>
                        <ServiceCard
                            iconText="optimize"
                            title="On & Off Page Optimization"
                            text="Optimizing website structure, content, and HTML elements to improve search engine rankings.
                        Building backlinks from authoritative websites to increase domain authority and improve search visibility."
                            className='service-card' />
                        <ServiceCard
                            title="Content Marketing"
                            iconText="content"
                            text="Creating high-quality, relevant content to attract and engage target audiences while also improving search rankings."
                            className='service-card' />
                    </div>
                    <div className='flex flex-col gap-[2rem] justify-between h-full mt-[2rem]'>
                        <ServiceCard
                            text="Creating a comprehensive plan aligned with business goals and target audience."
                            title="Strategy development"
                            iconText="strategy"
                            className='service-card' />
                        <ServiceCard
                            text="Designing visually appealing and engaging email templates."
                            title="Email Campaign Design"
                            iconText="campaign"
                            className='service-card' />
                    </div>
                </aside>
            </div>
        </section>
    )
}

export default Service
