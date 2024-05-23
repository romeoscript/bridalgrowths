import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceCard from './ServiceCard';
import { people } from '@/public/Assets/';

const Service = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease-in-out', // Easing function
            once: true, // Whether animation should happen only once
        });
    }, []);

    return (
        <section id='section' ref={sectionRef} className='sticky-section md:my-[4rem]'>
            <div className='relative py-[2rem] md:px-[4rem] w-4/5 m-auto h-screen'>
                <aside className='md:flex items-start justify-between first-aside gap-[4rem]'>
                    <div className='flex flex-col gap-[2rem] justify-between h-full'>
                        <ServiceCard
                            title="Keyword Research"
                            text='Imagine having a roadmap that shows you exactly what your customers are searching for. With our keyword research
                            services, you’ll get a comprehensive list of keywords and phrases that your target audience is using to find businesses like
                            yours. This is the foundation of your success, and we’ll help you build it from the ground up.'
                            iconText='magnify'
                            className='service-card'
                            data-aos="fade-up"
                        />
                        <ServiceCard
                            title="Technical SEO"
                            text='You’ve got a great website, but is it optimized for search engines? Our technical SEO services will ensure that your website is
                            technically sound, making it easier for search engines to crawl, index, and rank your site. This means more visibility, more
                            traffic, and more revenue for your business.'
                            iconText='seo'
                            className='service-card'
                            data-aos="fade-up"
                            data-aos-delay="200"
                        />
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
                            text="On-page optimization is just the beginning. We’ll also help you build high-quality backlinks from authoritative sources,
                            increasing your website’s authority and driving even more traffic to your site. With the use of our on and off-page optimization
                            services, you’ll dominate search results and leave your competitors in the dust."
                            className='service-card'
                            data-aos="fade-up"
                            data-aos-delay="400"
                        />
                        <ServiceCard
                            title="Content Marketing Strategy Development"
                            iconText="content"
                            text="Content marketing is more than just blogging. It’s a strategic approach to attracting and engaging your target audience. Our
                            content marketing strategy development services will help you create a content marketing plan that resonates with your
                            audience, builds trust and credibility, and drives revenue."
                            className='service-card'
                            data-aos="fade-up"
                            data-aos-delay="600"
                        />
                    </div>
                    <div className='flex flex-col gap-[2rem] justify-between h-full mt-[2rem]'>
                        <ServiceCard
                            data-aos="fade-up"
                            data-aos-delay="800"
                            text="Our strategic development services will help you create a comprehensive marketing plan that aligns with your business
                            goals. We will help you identify your target audience, develop a unique value proposition, and create a marketing strategy
                            that drives revenue and growth."
                            title="Strategy development"
                            iconText="strategy"
                            className='service-card'
                        />
                        <ServiceCard
                            data-aos="fade-up"
                            data-aos-delay="1000"
                            text="You’ve got a list of leads, but are you converting them into customers? Our email campaign design services will help you
                            create targeted, personalized email campaigns that nurture your leads and drive conversions. With our expertise, you’ll turn
                            your leads into loyal customers who will keep coming back for more."
                            title="Email Campaign Design"
                            iconText="campaign"
                            className='service-card'
                        />
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default Service;
