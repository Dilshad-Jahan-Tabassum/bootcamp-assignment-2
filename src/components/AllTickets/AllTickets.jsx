import React, {use} from 'react';
import SingleTicket from '../SingleTicket/SingleTicket';
import SingleTask from '../SingleTask/SingleTask';

const AllTickets = ({ ticketsPromise }) => {
    const ticketsData = use(ticketsPromise);
    //console.log(ticketsData); 
    return (
        <div className='mb-8 w-11/12 mx-auto mt-8 flex flex-col lg:flex-row gap-10'>
            <div>
                <h1 className="font-bold text-2xl mb-5">Customer Tickets</h1>
                 <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    {
                        ticketsData.map(ticket =><SingleTicket key={ticket.id} ticket={ticket}></SingleTicket>)
                    }
                </div>
            
            </div>
            <div className='flex flex-col gap-10'>
                <div className='border'>
                <h1 className="font-bold text-2xl mb-5">Task Status</h1>
                 <div className=''>
                   <SingleTask></SingleTask>
                </div>
            
            </div>
            <div className='border'>
                <h1 className="font-bold text-2xl mb-5">Resolved Task</h1>
                 <div className=''>
                   
                </div>
            
            </div>
            </div>
        </div>
    );
};

export default AllTickets;