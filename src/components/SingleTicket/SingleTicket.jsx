import React from 'react';
import { FaRegCalendarAlt, FaCircle  } from "react-icons/fa";


const SingleTicket = ({ticket}) => {
    console.log(ticket);
    const {id, title, description, priority, status, customer, createdAt} = ticket;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl p-5 border w-125">
  
  <div className="">
    <div className='flex justify-between'>
        <h2 className="card-title text-gray-500">{title}</h2>
        <span className='flex items-center gap-1.5 badge badge-info rounded-2xl'><FaCircle />{status}</span>
    </div>
    <div className="card-actions ">
        <p className="text-lg text-gray-500">{description}</p>
        
    </div>
    <div className='flex justify-between'>
        <div className='flex flex-row gap-2'>
            <p className='text-gray-500 font-semibold'>#{id}</p>
            <p className={`font-semibold ${priority === 'High' ? "text-red-500" : priority === 'Medium' ? "text-yellow-500" : "text-green-500"}`}>
                {priority.toUpperCase()} PRIORITY
            </p>
        </div>
        <div className='flex flex-row gap-3'>
            <p className='text-gray-500 font-semibold'>{customer}</p> 
            <p className='text-gray-500 font-semibold flex items-center gap-1'><FaRegCalendarAlt /> {createdAt}</p> 
        </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleTicket;