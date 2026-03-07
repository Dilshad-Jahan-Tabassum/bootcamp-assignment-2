import React from 'react';
import { FaRegCalendarAlt, FaCircle  } from "react-icons/fa";


const SingleTicket = ({ticket, taskList, handleCompleteTask}) => {
    // console.log(ticket);
   

    const {id, title, description, priority, customer, createdAt} = ticket;

     const isTaskExist = taskList?.some(task => task.id === id);
    //console.log(isTaskExist);
    return (
        <div onClick={() =>handleCompleteTask(ticket)}>
           
            <div className="card bg-base-100 shadow-xl p-5 border h-48 lg:w-120">
  
  <div className="flex flex-col h-full">
    <div className='flex justify-between'>
        <h2 className="card-title ">{title}</h2>
        <span className={`"badge flex items-center gap-1 py-1 px-2 rounded-xl font-medium" ${isTaskExist? "bg-amber-400 text-amber-800" : "bg-green-400 text-green-700"}`}><span><FaCircle /></span>
        
            {
                isTaskExist ? "In Progress" : "Open"
            
            }
        </span>
    </div>
    
    <p className="text-lg text-gray-500 mt-2">{description}</p>
        
    
    <div className='flex justify-between items-center mt-auto '>
        <div className='flex flex-row items-center gap-2'>
            <p className='text-gray-500 font-semibold'>#{id}</p>
            <p className={`text-sm lg:text-lg font-semibold ${priority === 'High' ? "text-red-500" : priority === 'Medium' ? "text-yellow-500" : "text-green-500"}`}>
                {priority.toUpperCase()} PRIORITY
            </p>
        </div>
        <div className='flex flex-row items-center gap-2'>
            <p className='text-gray-500 font-semibold'>{customer}</p> 
            <p className='text-gray-500 lg:font-semibold flex items-center gap-1'><FaRegCalendarAlt /> {createdAt}</p> 
        </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleTicket;