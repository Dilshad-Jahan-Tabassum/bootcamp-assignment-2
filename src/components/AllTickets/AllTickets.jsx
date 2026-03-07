import React, {use} from 'react';
import SingleTicket from '../SingleTicket/SingleTicket';
import SingleTask from '../SingleTask/SingleTask';
import ResolveTicket from '../ResolveTicket/ResolveTicket';

const AllTickets = ({ ticketsPromise, taskList, resolvedTickets, handleCompleteTask, handleCompleteButton }) => {
    const ticketsData = use(ticketsPromise);
    //console.log(ticketsData); 

    const availableTickets = ticketsData.filter(ticket => !taskList.some(task => task.id === ticket.id) && !resolvedTickets.some(resolved => resolved.id === ticket.id));
    return (
        <div className='mb-8 w-11/12 mx-auto mt-8 flex flex-col lg:flex-row gap-1'>
                <div>
                <h1 className="font-bold text-2xl mb-5">Customer Tickets</h1>
                 <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    {
                        availableTickets.map(ticket =><SingleTicket 
                            key={ticket.id} 
                            ticket={ticket} 
                            taskList={taskList} 
                            handleCompleteTask={handleCompleteTask}
                            handleCompleteButton={handleCompleteButton}
                            ></SingleTicket>)
                    }
                </div>
            
            </div>

            <div className='flex flex-col gap-5 p-2'>
                
                <h1 className="font-bold text-2xl mb-5 ml-5 text-center">Task Status</h1>
                 <div className=''>
                   {taskList.map(singleTask => <SingleTask 
                   key={singleTask.id} 
                   singleTask={singleTask} 
                   handleCompleteButton={handleCompleteButton}>

                   </SingleTask>) }
                </div>
            
                <h1 className=" font-bold text-2xl mb-5 ml-5 text-center">Resolved Task</h1>
                 <div className=''>
                   {
                    resolvedTickets.map(ticket => <ResolveTicket key={ticket.id} ticket={ticket}></ResolveTicket>)
                   }
                </div>
            
            
            </div>
            
        </div>
    );
};

export default AllTickets;