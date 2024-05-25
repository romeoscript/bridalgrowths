import React from 'react';
import { motion } from 'framer-motion';
import Icon from '@/Reusable/Icons'; // Assuming you have an Icon component

const ServiceCard = ({ iconText, title, text }) => {
  return (
    <motion.section
      className='relative transition-transform duration-300 ease-in-out hover:scale-[1.1] cursor-pointer'
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className='border-[1px] border-blue-500 rounded-md p-[25px] md:w-[340px] w-fit-content'>
        <Icon type={iconText} />
        <h2 className='font-bold text-capitalize text-2xl my-[0.5rem]'>{title}</h2>
        <p className='text-md text-gray-500'>{text}</p>
      </div>
    </motion.section>
  );
}

export default ServiceCard;
