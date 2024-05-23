import React from 'react';
import Image from 'next/image';

const ClientCard = ({ name, testimonial, image }) => {
    return (
        <div className='border-[1px] m-[1rem] border-[#176FF5] shadow-md text-sm rounded-md flex items-center flex-col justify-center text-center gap-4 p-[2rem]'>
            <p>{testimonial}</p>
            <Image
                className='rounded-full'
                src={image}
                alt={`${name}'s photo`}
                width={45}
                height={45}
                objectFit="cover"
            />
            <h2>{name}</h2>
        </div>
    );
};

export default ClientCard;
