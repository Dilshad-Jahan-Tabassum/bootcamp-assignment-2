import React from 'react';

const SingleTask = ({singleTask, handleCompleteButton}) => {
    console.log(singleTask);
    return (
        <div>
            <div className="lg:ml-5 mb-5 card w-full lg:w-60 p-3 bg-base-100 card-sm shadow-2xl">
  <div className="">
    <h2 className="card-title font-bold">{singleTask.title}</h2>
    
    <div className=" card-actions">
      <button className="btn mt-5 bg-green-500 text-white w-full" onClick={() => handleCompleteButton(singleTask)}>Complete</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default SingleTask;