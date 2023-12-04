import Image from 'next/image';
import React from 'react';
import nextjsImg from "@/assets/nextjs.png"

const AlbumPage = () => {
    return (
        <div>
            <h1>this is Iamge using Image components</h1>
            <Image src={nextjsImg} alt='image' width="0" priority={true}
                height="0"
                sizes="100vw"
                className='w-full h-auto'
            />

            {/* <h1>this is Iamge using Img tag</h1>
            <img src="https://i.ibb.co/kg80QZ8/IMG-20231018-185250.jpg" alt='image' width="0" priority={true}
                height="0"
                sizes="100vw"
                className='w-full h-auto'
            /> */}
        </div>
    );
};

export default AlbumPage;