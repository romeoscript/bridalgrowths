import React from 'react'
import ClientCard from './ClientCard'
import Icon from '@/Reusable/Icons'
import { alex , john, chris, bob, diana, jane } from '@/public/Assets'

const People = () => {
    const clients = [

        {
            name: 'Jane Smith',
            testimonial: 'Their attention to detail and commitment to excellence made all the difference in our project.',
            image: jane.src
        },
        {
            name: 'Alex Johnson',
            testimonial: 'The team was incredibly professional and delivered outstanding results on time.',
            image: alex.src
        },
        {
            name: 'Bob Brown',
            testimonial: 'I am very impressed with the quality of work and the level of communication throughout the project.',
            image: bob.src
        },
        {
            name: ' Diana Green',
            testimonial: 'The final product exceeded my expectations and I couldn’t be happier with the outcome.',
            image: diana.src
        },
        {
            name: 'John Hanny',
            testimonial: 'Working with this team has been a transformative experience. Their expertise and dedication are unmatched.',
            image: john.src
        },
        {
            name: 'Chris Lee',
            testimonial: 'Their innovative approach and creative solutions were exactly what we needed.',
            image: chris.src
        }
    ];
    return (
        <div className='bg-[#010814] text-white md:p-[4rem] p-[2rem] relative'>
            <h2 className='text-4xl md:w-1/5 my-[1rem] font-bold'>What a few clients say</h2>
            <div className='grid md:grid-cols-3 gap-8'>
                {clients.map((client, index) => (
                    <ClientCard
                        key={index}
                        name={client.name}
                        testimonial={client.testimonial}
                        image={client.image}
                    />
                ))}
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
