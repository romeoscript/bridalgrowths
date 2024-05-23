'use client'
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Quote from '@/Components/Quote';
const Modaly = ({isModalOpen, setIsModalOpen}) => {
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Modal  open={isModalOpen} onCancel={handleCancel}>
                <Quote />
            </Modal>
        </>
    );
};
export default Modaly;