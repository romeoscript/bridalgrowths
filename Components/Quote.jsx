"use client"
import React, { useState } from 'react';
import { Input, Select, message } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import ReCAPTCHA from "react-google-recaptcha";

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
        recaptchaToken: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (value, field) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleCaptcha = (token) => {
        setFormData({ ...formData, recaptchaToken: token });
    };

    const handleSubmit = async () => {
        const { projectDescription, budgetRange, companyName, companyWebsite, yourName, recaptchaToken } = formData;

        if (!projectDescription || !budgetRange.length || !companyName || !companyWebsite || !yourName || !recaptchaToken) {
            message.error('Please complete all fields and verify reCAPTCHA');
            return;
        }

        setLoading(true);
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
                // Reset form data
                setFormData({
                    projectDescription: '',
                    budgetRange: [],
                    companyName: '',
                    companyWebsite: '',
                    yourName: '',
                    recaptchaToken: '',
                });
            } else {
                message.error('Failed to send message');
            }
        } catch (error) {
            message.error('Failed to send message');
        }
        setLoading(false);
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
                    value={formData.projectDescription}
                    onChange={(e) => handleChange(e.target.value, 'projectDescription')}
                    placeholder="Briefly describe your project"
                />
            </div>
            <div className='my-[1rem]'>
                <label htmlFor="">What’s your budget range?</label>
                <Select
                    mode="tags"
                    style={{ width: '100%' }}
                    placeholder="Select your budget range"
                    value={formData.budgetRange}
                    onChange={(value) => handleChange(value, 'budgetRange')}
                    options={options}
                />
            </div>
            <div>
                <label htmlFor="">Company’s Name</label>
                <TextArea
                    className='p-[0.6rem]'
                    placeholder="Enter your company’s name"
                    autoSize
                    value={formData.companyName}
                    onChange={(e) => handleChange(e.target.value, 'companyName')}
                />
            </div>
            <div className='py-[1rem]'>
                <label htmlFor="">Company’s Website</label>
                <TextArea
                    className='p-[0.6rem]'
                    placeholder="Enter your company’s website URL"
                    autoSize
                    value={formData.companyWebsite}
                    onChange={(e) => handleChange(e.target.value, 'companyWebsite')}
                />
            </div>
            <div className='mb-[1rem]'>
                <label htmlFor="">Your Name</label>
                <TextArea
                    className='p-[0.6rem]'
                    placeholder="Enter your name"
                    autoSize
                    value={formData.yourName}
                    onChange={(e) => handleChange(e.target.value, 'yourName')}
                />
            </div>
            <ReCAPTCHA
                sitekey="6LfH0OkpAAAAAIHTy4-vATZ24i775tZDpTvrVAeh"
                onChange={handleCaptcha}
            />
            <button
                className='bg-[#176FF5] w-full px-[2rem] py-[0.5rem] rounded-full text-white flex items-center justify-center'
                onClick={handleSubmit}
                disabled={loading}
            >
                {loading ? <LoadingOutlined spin /> : 'Send a Message'}
            </button>
        </div>
    );
};

export default Quote;
