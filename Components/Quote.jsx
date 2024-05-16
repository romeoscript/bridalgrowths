"use client"
import React from 'react'
import { Input } from 'antd';
const { TextArea } = Input;
import { Select } from 'antd';



const options = [];
for (let i = 10; i < 36; i++) {
    options.push({
        value: i.toString(36) + i,
        label: i.toString(36) + i,
    });
}
const handleChange = (value) => {
    console.log(`selected ${value}`);
};


const onChange = (e) => {
    console.log('Change:', e.target.value);
};

const Quote = () => {
    return (
        <div className='bg-white p-[2rem] rounded-md'>
            <h2 className='text-5xl font-bold font-crimson my-[1rem]'>Let’s discuss your project</h2>
            <div>
                <label htmlFor="">Describe the project</label>
                <TextArea className='p-[0.6rem]' showCount maxLength={100} onChange={onChange} placeholder="can resize" />
            </div>
            <div className='my-[1rem]'>
                <label htmlFor="">What’s your budget range?</label>
                <Select
                    mode="tags"
                    style={{
                        width: '100%',
                    }}
                    placeholder="Tags Mode"
                    onChange={handleChange}
                    options={options}
                />
            </div>
            <div>
                <label htmlFor="">Company’s Name</label>
                <TextArea className='p-[0.6rem]' placeholder="Autosize height based on content lines" autoSize />
            </div>
            <div className='py-[1rem]'>
                <label htmlFor="">Company’s Website</label>
                <TextArea className='p-[0.6rem]' placeholder="Autosize height based on content lines" autoSize />
            </div>
            <div className='mb-[1rem]'>
                <label htmlFor="">Your Name</label>
                <TextArea className='p-[0.6rem]' placeholder="Autosize height based on content lines" autoSize />
            </div>

            <button className='bg-[#176FF5] px-[2rem] py-[0.5rem] rounded-full text-white'>
                Send a Message
            </button>
        </div>
    )
}

export default Quote
