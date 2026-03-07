import React from 'react';

const ResolveTicket = ({ticket}) => {
    console.log(ticket.title);
    return (
        <div>
            <div className="lg:ml-5 mb-5 card w-full lg:w-60 p-3 bg-[#E0E7FF] card-sm shadow-2xl">
        <div className="">
            <h2 className="card-title font-semibold">{ticket.title}</h2>
            
            
        </div>
</div>
            
        </div>
    );
};

export default ResolveTicket;