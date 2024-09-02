import React from 'react';
import profilepics from '../src/assets/Frame 1618868669.svg';
import Telephone from '../src/assets/call.svg';
import house from '../src/assets/house.svg';

export const MemberAccount = () => {
  return (
    <div className='mt-10 p-4'>
      <div className='flex flex-col md:flex-row items-center gap-4'>
        <img className='w-32 md:w-38' src={profilepics} alt='' />
        <div className='flex flex-col'>
          <h1 className='font-bold text-xl md:text-2xl'>Ovie Victor</h1>
          <h3 className='text-sm md:text-base'>Librarian</h3>
        </div>
      </div>

      <form className='mt-6'>
        <div className='text-xl font-bold'>Personal information</div>
        <div className='flex flex-col md:flex-row md:justify-between gap-4 mt-4'>
          <div className='flex flex-col'>
            <label htmlFor="firstName" className='border border-white rounded-md flex items-center justify-center w-fit text-xs py-1 px-2 font-bold bg-[#FCFCFD] ml-4 relative z-50 mb-[-5px]'>FIRST NAME</label>
            <input className='border w-full md:w-[27rem] p-3 rounded-md mt-[-0.5rem]' type="text" id="firstName" name="firstName" placeholder="Ovie" />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="lastName" className='border border-white rounded-md flex items-center justify-center w-fit text-xs py-1 px-2 font-bold bg-[#FCFCFD] ml-4 relative z-50 mb-[-5px]'>LAST NAME</label>
            <input type='text' id="lastName" name="lastName" className='border w-full md:w-[30rem] p-3 mt-[-0.5rem] rounded-md' placeholder="Victor" />
          </div>
        </div>
      </form>

      <form className='mt-6'>
        <div className='flex flex-col  md:flex-row md:justify-between gap-4'>
          <div className='flex flex-col'>
            <label htmlFor="email" className='border border-white rounded-md flex items-center justify-center w-fit text-xs py-1 px-2 font-bold bg-[#FCFCFD] ml-4 relative z-50 mb-[-5px]'>EMAIL ADDRESS</label>
            <input className='border w-full md:w-[21rem] p-3 rounded-md mt-[-0.5rem]' type="email" id="email" name="email" placeholder="Victorovie8@gmail.com" />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="dateOfBirth" className='border border-white rounded-md flex items-center justify-center w-fit text-xs py-1 px-2 font-bold bg-[#FCFCFD] ml-4 relative z-50 mb-[-5px]'>DATE OF BIRTH</label>
            <input type="date" id="dateOfBirth" name="dateOfBirth" className='border w-full p-3 mt-[-0.5rem] rounded-md' />
          </div>
          <div className='flex flex-col'>
          <label htmlFor='phoneNumber' className='border border-white rounded-md flex items-center justify-center w-fit text-xs py-1 px-2 font-bold bg-[#FCFCFD] ml-4 relative z-50 mb-[-5px]'>PHONE NUMBER</label>
          <div className='relative'>
            <input type='tel' id='phoneNumber' name="phoneNumber" className='border w-full md:w-[25rem] p-3 rounded-md mt-[-0.5rem]' placeholder="08102345678" />
            <img className='absolute right-4 top-2 w-6 h-6' src={Telephone} alt='' />
          </div>
        </div>
        </div>
        
        
        
        <div className='flex flex-col mt-6'>
          <label htmlFor='address' className='border border-white rounded-md flex items-center justify-center w-fit text-xs py-1 px-2 font-bold bg-[#FCFCFD] ml-4 relative z-50 mb-[-5px]'>HOUSE ADDRESS</label>
          <div className='relative'>
            <input type='text' id='address' name="address" className='border w-full p-3 rounded-md mt-[-0.5rem]' placeholder="No 5, Ajanlekoko Street, Okokomaiko" />
            <img className='absolute right-4 top-2 w-6 h-6' src={house} alt='' />
          </div>
        </div>
      </form>

      <form className='mt-6'>
        {/* <div className='text-xl font-bold'>Change Password</div>
        <div className='flex flex-col md:flex-row md:justify-between gap-4 mt-4'>
          <div className='flex flex-col'>
            <label htmlFor="oldPassword" className='border border-white rounded-md flex items-center justify-center w-fit text-xs py-1 px-2 font-bold bg-[#FCFCFD] ml-4 relative z-50 mb-[-5px]'>OLD PASSWORD</label>
            <input className='border w-full md:w-[18rem] p-3 rounded-md mt-[-0.5rem]' type='password' id="oldPassword" name="oldPassword" placeholder="" />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="newPassword" className='border border-white rounded-md flex items-center justify-center w-fit text-xs py-1 px-2 font-bold bg-[#FCFCFD] ml-4 relative z-50 mb-[-5px]'>NEW PASSWORD</label>
            <input className='border w-full md:w-[18rem] p-3 rounded-md mt-[-0.5rem]' type='password' id="newPassword" name="newPassword" placeholder="" />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="confirmPassword" className='border border-white rounded-md flex items-center justify-center w-fit text-xs py-1 px-2 font-bold bg-[#FCFCFD] ml-4 relative z-50 mb-[-5px]'>CONFIRM PASSWORD</label>
            <input className='border w-full md:w-[18rem] p-3 rounded-md mt-[-0.5rem]' type='password' id="confirmPassword" name="confirmPassword" placeholder="" />
          </div>
        </div> */}
        <button className='bg-[#518C36] mt-6 px-6 py-2 text-white rounded-lg' type='submit'>Save Changes</button>
      </form>
    </div>
  );
}

export default MemberAccount;

// import React, {useState} from 'react';
// import profilepics from '../src/assets/Frame 1618868669.svg'
// import Telephone from '../src/assets/call.svg'
// import house from '../src/assets/house.svg'
// import { FiPhone } from "react-icons/fi";

// export const MemberAccount = () => {    
//   return (
//         <div className='mt-10 p-'>
//           <div className='flex items-center gap-4'>
//             <img className='w-38' src={profilepics} alt=''/>
//             <div className='flex flex-col '>
//                 <h1 className='font-bold text-[25px]'>Ovie Victor</h1>
//                 <h3 className='text-[15px]'>Librarian</h3>
//             </div>
//         </div>
        
//         <form className='mt-[2rem] w-full '>
//         <div className='text-[25px] font-bold'>Personal information</div>
//           <div className=' flex justify-between ' >
//           <div>
//           <label htmlFor="name" className='border-[0.1rem]  border-white rounded-md justify-center flex  w-fit text-[0.7rem] py-[0.2rem] px-[0.8rem] font-bold ml-6 relative z-100 bg-[#FCFCFD] mt-2' >FIRST NAME </label>
//           <input className='border w-[27rem] p-[1.1rem] rounded-md  z-10  mt-[-0.8rem]' type="text" id="name" name="name" placeholder="Ovie" />
//           </div>
//           <div>
//           <label htmlFor="name" className='border-[0.1rem]  border-white rounded-md justify-center flex  w-fit text-[0.7rem] py-[0.2rem] px-[0.8rem] font-bold ml-6  relative z-100 bg-[#FCFCFD]' >LAST NAME </label>
//           <input type='text' id="name" name="" className='border w-[30rem] p-[1.1rem] mt-[-0.8rem] rounded-md z-0'placeholder="Victor" />
//            </div>
//           </div>
//         </form>
//         <form className='mt-[1rem] flex justify-between gap-'>
//           <div>
//           <label htmlFor="email" className='border-[0.1rem]  border-white rounded-md justify-center flex  w-fit text-[0.7rem] py-[0.2rem] px-[0.8rem] font-bold ml-6 relative z-100 bg-[#FCFCFD]' >EMAIL ADDRESS </label>
//           <input className='border w-[21rem]  p-[1.1rem] rounded-md  z-10  mt-[-0.8rem]' type="email" id="email" name="email" placeholder="Victorovie8@gmail.com" />
//           </div>
//           <div>
//           <label htmlFor="dateofbirth" className='border-[0.1rem]  border-white rounded-md justify-center flex  w-fit text-[0.7rem] py-[0.2rem] px-[0.8rem] font-bold ml-6  relative z-100 bg-[#FCFCFD]' >DATE OF BIRTH </label>
//           <input type="date" id="date" name="date" className='border w-full p-[1.1rem] mt-[-0.8rem] rounded-md z-0'placeholder="" />
//            </div>

//             <div >
//             <label htmlFor='phonenumber' className='border-[0.1rem]  border-white rounded-md justify-center flex  w-fit text-[0.7rem] py-[0.2rem] px-[0.8rem] font-bold ml-6  relative z-50 bg-[#FCFCFD]' >PHONE NUMBER </label>
//             <div className='flex items-center relative'>
//             <input type='tel' id='tel' name="tel" className='border w-[30rem] p-[1.1rem] mt-[-0.8rem] rounded-md relative z-0'placeholder="08102345678" />
//             <img className='absolute right-5 top-2' src={Telephone} alt=''/>
//             {/* <div className='absolute right-5 top-2.5'><FiPhone/></div> */}

//             </div>
//             </div>
//         </form>
//         <form>
//         <div className='mt-[1rem]'>
//           <label htmlFor='House Address' className='border-[0.1rem]  border-white rounded-md justify-center flex  w-fit text-[0.7rem] py-[0.2rem] px-[0.8rem] font-bold ml-6  relative z-50 bg-[#FCFCFD]' >HOUSE ADDRESS</label>
//           <div className='flex items-center relative'>
//           <input type='text' id='address' name="" className='border w-full p-[1.1rem] mt-[-0.8rem] rounded-md z-0'placeholder="No 5, Ajanlekoko Street, Okokomaiko" />
//             <img className='absolute right-5 top-2' src={house} alt=''/>
            
//           </div>
//            </div>
//         </form>
//           <form className='mt-[2rem] '>
//         <div className='text-[25px] font-bold'>Change Password</div>
//           <div className=' flex justify-between w-full' >
//           <div>
//           <label htmlFor="password" className='border-[0.1rem]  border-white rounded-md justify-center flex  w-fit text-[0.7rem] py-[0.2rem] px-[0.8rem] font-bold ml-6 relative z-100 bg-[#FCFCFD] ' >OLD PASSWORD </label>
//           <input className='border w-[20rem] p-[1.1rem] rounded-md  z-10  mt-[-0.8rem]' type='password' id="password" name="Old Password" placeholder="" />
//           </div>
//           <div>
//           <label htmlFor="password" className='border-[0.1rem]  border-white rounded-md justify-center flex  w-fit text-[0.7rem] py-[0.2rem] px-[0.8rem] font-bold ml-6 relative z-100 bg-[#FCFCFD]' >  NEW PASSWORD </label>
//           <input className='border w-[20rem] p-[1.1rem] rounded-md  z-10  mt-[-0.8rem]' type='password' id="password" name="Old Password" placeholder="" />
//           </div>
//           <div>
//           <label htmlFor="password" className='border-[0.1rem]  border-white rounded-md justify-center flex  w-fit text-[0.7rem] py-[0.2rem] px-[0.8rem] font-bold ml-6 relative z-100 bg-[#FCFCFD]' >CONFIRM PASSWORD </label>
//           <input className='border w-[25rem] p-[1.1rem] rounded-md  z-10  mt-[-0.8rem]' type='password' id="password" name="Old Password" placeholder="" />
//           </div>
//           </div>
//         <button className='bg-[#518C36] mt-10 px-10 py-2 text-white rounded-lg ' type='submit'>Save Changes</button>

//         </form>
//         </div>
    
    
//   )
// }
// export default MemberAccount;