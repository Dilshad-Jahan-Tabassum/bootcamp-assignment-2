
import { Suspense, useState } from 'react';
import Banner from './components/Banner/Banner';
import AllTickets from './components/AllTickets/AllTickets';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { toast, ToastContainer } from 'react-toastify';



const fetchAllTickets = async () =>{
  const res = await fetch('tickets.json');
  return res.json();
}

function App() {
  const ticketsPromise = fetchAllTickets();

  const [taskList, setTaskList] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);


  const handleCompleteTask = (task) => {
    const isTaskExist = taskList.find(customerTicket => customerTicket.id === task.id);
    if(isTaskExist){
      toast.error('Task already exist in the list');
      return;
    }
    setTaskList([...taskList, task]);
    toast.success('Task added to the list');

  }

  const handleCompleteButton = (task) => {
    const updatedTaskExist = taskList.filter(singleTaskUpdate => singleTaskUpdate.id !== task.id);
    setTaskList(updatedTaskExist);

    setResolvedTickets([...resolvedTickets, task]);
    toast.success('Issue is resolved');

  }

  return (
    <>
      <Navbar />
      <Banner taskList={taskList} resolvedTickets={resolvedTickets} />
      <Suspense fallback={<div className='flex justify-center items-center mt-15 mb-15'><span className="loading loading-spinner loading-xl "></span></div>
}>
        <AllTickets 
          ticketsPromise={ticketsPromise} 
          handleCompleteTask={handleCompleteTask}
          handleCompleteButton={handleCompleteButton}
          taskList={taskList}
          resolvedTickets={resolvedTickets}
          ></AllTickets>
      </Suspense>
      <ToastContainer />
      <Footer />
    </>
  )
}

export default App
