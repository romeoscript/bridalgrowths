"use client"
import React, { useState } from 'react';
import { Input, Select, message } from 'antd';
const { TextArea } = Input;

const options = [
    { value: '1000-5000', label: '$1000 - $5000' },
    { value: '5000-10000', label: '$5000 - $10000' },
    { value: '10000-20000', label: '$10000 - $20000' },
    { value: '20000+', label: '$20000+' },
];

const Quote = () => {
    const [formData, setFormData] = useState({
        projectDescription: '',
        budgetRange: [],
        companyName: '',
        companyWebsite: '',
        yourName: '',
    });

    const handleChange = (value, field) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/quote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 200) {
                message.success('Message sent successfully');
            } else {
                message.error('Failed to send message');
            }
        } catch (error) {
            message.error('Failed to send message');
        }
    };

    return (
        <div className='bg-white p-[2rem] rounded-md'>
            <h2 className='md:text-5xl text-3xl font-bold font-crimson my-[1rem]'>Let’s discuss your project</h2>
            <div>
                <label htmlFor="">Describe the project</label>
                <TextArea
                    className='p-[0.6rem]'
                    showCount
                    maxLength={100}
                    onChange={(e) => handleChange(e.target.value, 'projectDescription')}
                    placeholder="Can resize"
                />
            </div>
            <div className='my-[1rem]'>
                <label htmlFor="">What’s your budget range?</label>
                <Select
                    mode="tags"
                    style={{ width: '100%' }}
                    placeholder="Tags Mode"
                    onChange={(value) => handleChange(value, 'budgetRange')}
                    options={options}
                />
            </div>
            <div>
                <label htmlFor="">Company’s Name</label>
                <TextArea
                    className='p-[0.6rem]'
                    placeholder="Autosize height based on content lines"
                    autoSize
                    onChange={(e) => handleChange(e.target.value, 'companyName')}
                />
            </div>
            <div className='py-[1rem]'>
                <label htmlFor="">Company’s Website</label>
                <TextArea
                    className='p-[0.6rem]'
                    placeholder="Autosize height based on content lines"
                    autoSize
                    onChange={(e) => handleChange(e.target.value, 'companyWebsite')}
                />
            </div>
            <div className='mb-[1rem]'>
                <label htmlFor="">Your Name</label>
                <TextArea
                    className='p-[0.6rem]'
                    placeholder="Autosize height based on content lines"
                    autoSize
                    onChange={(e) => handleChange(e.target.value, 'yourName')}
                />
            </div>
            <button
                className='bg-[#176FF5] px-[2rem] py-[0.5rem] rounded-full text-white'
                onClick={handleSubmit}
            >
                Send a Message
            </button>
        </div>
    );
};

export default Quote;
