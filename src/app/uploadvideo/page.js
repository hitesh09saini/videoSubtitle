"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import img from '../../../public/download.png';
import axios from 'axios';

const Page = () => {
    const [data, setData] = useState('');

    const fetchData = async () => {
        try {
            const res = await axios.get('/api/video');
            setData(res.data.message);
            console.log(res.data.message);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='min-h-screen flex-col flex justify-center items-center'>
            {data}
            <form action='' className='flex flex-col gap-4'>
                <Image src={img} width={200} height={200} alt='upload' />
                <input type='range' name='' id='' />
                <input type='text' placeholder='Add subtitles' className='border border-2 border-gray-500' />
                <input type='submit' value='Submit' />
            </form>
        </div>
    );
};

export default Page;
