

import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import circle from '../../assets/close-circle.svg'

export const MemberDetails = () => {
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
        <button>
            <img src={circle} alt=''/>
        </button>
        </div>

    </div>
  )
}
export default MemberDetails;