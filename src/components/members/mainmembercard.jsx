import React from 'react';
import Sidebar from '../sidebars/sidebar';
import Navbar from '../navbar/navbar';
import Memberinfo from './memberinfo';
import Borrowedbook from '../../components/booklists/borrowedbook'
import { Filterbutton } from '../buttons/filterbutton';


const MainMemberCard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar className="fixed top-0 left-0 h-full w-[250px] bg-gray-800"/>
      <div className="flex-1 flex flex-col bg-[#F9FAFB] overflow-y-auto">
        <Navbar/>
        <Memberinfo />
       <div className='p-6'>
        <div className='flex justify-between p-5 rounded-t-md bg-white text-2xl items-center font-bold '>
        <p>Borrowed History</p>
        <Filterbutton/>
        </div>
         <Borrowedbook/>
         </div>
      </div>
    </div>
  );
};

export default MainMemberCard;