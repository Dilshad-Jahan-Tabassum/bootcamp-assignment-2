import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className='w-11/12 mx-auto flex flex-col lg:flex-row gap-10 mt-15'>
            {/* card-1  */}
            <div className="banner-1 card w-full lg:w-150 h-48 shadow-sm relative z-0">
                <figure className='flex justify-between'>
                    <img className="object-cover" src="../../assets/vector1.png" alt=""  />
                    <img className="reverse object-cover" src="../../assets/vector1.png" alt="" />
                </figure>
                <div className="card-body items-center text-center absolute inset-5">
                    <h2 className='card-title'>In-Progress</h2>
                    <p>0</p>
                </div>
            </div>
            {/* card-2  */}
            <div className="banner-2 card w-full lg:w-150 h-48 shadow-sm relative">
                <figure className='flex justify-between'>
                    <img className="object-cover" src="../../assets/vector1.png" alt=""  />
                    <img className="reverse object-cover" src="../../assets/vector1.png" alt="" />
                </figure>
                <div className="card-body items-center text-center absolute inset-5">
                    <h2 className='card-title'>Resolved</h2>
                    <p>0</p>
                </div>
            </div>

        </div>
    );
};

export default Banner;