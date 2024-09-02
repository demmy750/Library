

import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { PiPencilLine } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Circle from '../../assets/close-circle.svg'
import { Membercard } from './membercard';

export const Memberinfo = () => {
  return (
    <div className='p-6  '>
        <div className='flex items-center w-full justify-between  '>
        <div className='flex items-center gap-6'>
            <Link to='/members' >
            <div className='flex items-center gap-2'>
                <FaArrowLeft/>
                <h3>Back</h3>
            </div>
            </  Link>
            <h1 className='font-bold text-[25px]'>Book Detail</h1>
        </div>
        <div className='border flex bg-[#D92D20] text-white gap-2 py-2 px-4 rounded-lg'>
        <img src={Circle} alt=''/>
        <div>Block Member</div>
        </div>
        </div>
        <Membercard/>
        
    </div>
  )
}
export default Memberinfo;
