"use client"
import React, { useState } from 'react';



const ParallaxCard = ({ title, text, Image }) => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="parallax-card group">
            <div className="inset-0 transform group-hover:scale-110 transition duration-700 ease-in-out cursor-pointer">
                <img src={Image} alt="" className="w-full h-[350px] object-cover" />
            </div>
            <div className="relative p-6 text-container">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
                <p className={`text-gray-600 mb-4 ${showMore ? 'expanded' : ''}`}>
                    {text}
                </p>
                <button
                    onClick={toggleShowMore}
                    className="inline-block px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    {showMore ? 'Show Less' : 'See More'}
                </button>
            </div>
        </div>
    );
};

export default ParallaxCard;
