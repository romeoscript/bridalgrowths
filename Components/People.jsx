import React from 'react'
import ClientCard from './ClientCard'
import Icon from '@/Reusable/Icons'

const People = () => {
    const clients = [

        {
            name: 'Jane Smith',
            testimonial: 'Their attention to detail and commitment to excellence made all the difference in our project.',
            image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=256&h=256&q=80'
        },
        {
            name: 'Alex Johnson',
            testimonial: 'The team was incredibly professional and delivered outstanding results on time.',
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=faces&fit=crop&w=256&h=256&q=80'
        },
        {
            name: 'Bob Brown',
            testimonial: 'I am very impressed with the quality of work and the level of communication throughout the project.',
            image: 'https://images.unsplash.com/photo-1608681299041-cc19878f79f1?q=80&w=2947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: ' Diana Green',
            testimonial: 'The final product exceeded my expectations and I couldn’t be happier with the outcome.',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=faces&fit=crop&w=256&h=256&q=80'
        },
        {
            name: 'John Hanny',
            testimonial: 'Working with this team has been a transformative experience. Their expertise and dedication are unmatched.',
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: 'Chris Lee',
            testimonial: 'Their innovative approach and creative solutions were exactly what we needed.',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=faces&fit=crop&w=256&h=256&q=80'
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
