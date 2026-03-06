
import { Suspense } from 'react';
import Banner from './components/Banner/Banner';
import AllTickets from './components/AllTickets/AllTickets';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { DiVim } from 'react-icons/di';


const fetchAllTickets = async () =>{
  const res = await fetch('tickets.json');
  return res.json();
}

function App() {
  const ticketsPromise = fetchAllTickets();

  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<div className='flex justify-center items-center mt-15 mb-15'><span className="loading loading-spinner loading-xl "></span></div>
}>
        <AllTickets ticketsPromise={ticketsPromise}></AllTickets>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
