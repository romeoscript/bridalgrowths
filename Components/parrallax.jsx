import React from 'react';
import { humanPhoto } from '@/public/Assets';


const ParallaxCard = () => {
    return (
        <div className=" overflow-hidden bg-white rounded-lg shadow-lg group bg-white">
            <div className=" inset-0 transform group-hover:scale-110 transition duration-700 ease-in-out cursor-pointer">
                <img src={humanPhoto.src} alt="" className='w-full h-[350px] object-cover' />
            </div>
            <div className="relative p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Parallax Card</h2>
                <p className="text-gray-600 mb-4">
                    This is a beautiful parallax card component made with Tailwind CSS and React.
                </p>
                <a
                    href="#"
                    className="inline-block px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Learn More
                </a>
            </div>
        </div>
    );
};

export default ParallaxCard;
