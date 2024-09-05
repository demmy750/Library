import React, { useState } from "react";
import Cookies from "js-cookie";
// import axios from 'axios';
// import api from "./api/axios";
import { Button1 } from "./components/buttons/Button1";
import { Link, useNavigate } from "react-router-dom";
import vestilogo from "../src/assets/Vestilogo.png";
import Bookreel from "../src/assets/Book reel.png";
import axios from "axios";

const SignIn = () => {
  // State variables for form inputs and status
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Indicates loading state
  const [error, setError] = useState(null); // Stores error messages
  const [success, setSuccess] = useState(null); // Stores success messages

  const navigate = useNavigate(); // Initialize navigate

  // Event handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    setLoading(true); // Start loading

    const signInData = { email, password };

    try {
      const response = await axios.post(
        "https://library-management-system-hctm.onrender.com/api/auth/login",
        signInData
      );
      const token = response.data.token;
      Cookies.set("token", token, { expires: 7 });

      setSuccess("Sign-in successful!"); // Set success message
      setError(null); // Clear any previous error
      navigate("/dashboard");
    } catch (error) {
      console.log(error);

      setError("Invalid credentials"); // Set error message
      setSuccess(null); // Clear any previous success message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="h-[100vh] flex overflow-y-hidden justify-center items-center xl:gap-20 xxl:gap-40 gap-20">
      <img
        src={Bookreel}
        className="w-[80%] xl:w-[100%] h-full hidden lg:block"
        alt="Book reel"
      />
      <div className="w-full ml-4 mr-2 items-center flex flex-col lg:items-start">
        <div>
          <img src={vestilogo} alt="Vesti Logo" />
        </div>
        <h1 className="font-bold text-[1.8rem] mt-[2rem]">Welcome Back!</h1>
        <h2 className="mt-[0.5rem] font-medium text-[#667085] text-center md:text-start">
          Please enter your credentials to access the admin dashboard.
        </h2>
        <form className="mt-[2rem]" onSubmit={handleSubmit}>
          {" "}
          {/* Add onSubmit handler */}
          <label
            htmlFor="email"
            className="border-[0.1rem] border-white rounded-md justify-center flex w-fit text-[0.7rem] py-[0.2rem] px-[0.8rem] font-bold ml-6 relative z-100 bg-[#FCFCFD]"
          >
            EMAIL *
          </label>
          <input
            className="border lg:w-[30rem] xs:w-[20rem] w-full p-[1.1rem] rounded-md z-10 mt-[-0.8rem]"
            type="email"
            id="email"
            name="email"
            placeholder="marayam@wevesti.com"
            value={email} // Controlled input
            onChange={(e) => setEmail(e.target.value)} // Update state
            required
          />
          <label
            htmlFor="password"
            className="border-[0.1rem] border-white rounded-md justify-center flex w-fit text-[0.7rem] py-[0.25rem] px-[0.8rem] font-bold ml-6 mt-[1.5rem] relative z-100 bg-[#FCFCFD]"
          >
            PASSWORD *
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border lg:w-[30rem] xs:w-[20rem] w-full p-[1.1rem] mt-[-0.8rem] rounded-md z-10"
            placeholder="Password"
            value={password} // Controlled input
            onChange={(e) => setPassword(e.target.value)} // Update state
            required
          />
          <div className="mt-4">
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
          </div>
          <div className="flex justify-end font-bold lg:w-[30rem] w-full">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          {/* Replace Button1 with a submit button if Button1 doesn't support form submission */}
          <Button1
            type="submit" // Ensure Button1 supports type prop for form submission
            style="bg-[#518C36] lg:w-[30rem] sm:mr:0 w-full mt-9 py-2 text-white rounded-[0.5rem]"
            title="Sign in"
          />
        </form>
      </div>
    </div>
  );
};

export default SignIn;

// import React, {useState, useEffect} from 'react';
// import { Button1 } from './components/buttons/Button1';
// import { Link } from 'react-router-dom';
// import vestilogo from '../src/assets/Vestilogo.png'
// // import '../src/SignIn.css'
// import Bookreel from '../src/assets/Book reel.png'

// const SignIn = () => {
//   // State variables for form inputs and status
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false); // Indicates loading state
//   const [error, setError] = useState(null); // Stores error messages
//   const [success, setSuccess] = useState(null); // Stores success messages

//   // Event handler for form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault(); // Prevent the default form submission

//     setLoading(true); // Start loading

//     const signInData = { email, password };

//     try {
//       const response = await axios.post('https://api.example.com/signin', signInData);
//       setSuccess('Sign-in successful!'); // Set success message
//       setError(null); // Clear any previous error
//       // Handle successful sign-in, e.g., redirect or store token
//     } catch (error) {
//       setError('Sign-in failed. Please try again.'); // Set error message
//       setSuccess(null); // Clear any previous success message
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   return (
//     <div className="w-full h-[100vh] flex overflow-y-hidden  items-center gap-20">
//       <img src={Bookreel} className='w-[50%] object-cover' alt=''/>
//       <div className=''>
//         <div><img src={vestilogo} alt=''/></div>
//         <h1 className='font-bold text-[1.8rem] mt-[2rem]'>Welcome Back !</h1>
//         <h2 className='mt-[0.5rem] font-medium text-[#667085]'>Please enter your credentials to access the admin dashboard </h2>
//         <form className='mt-[2rem]'>
//           <label htmlFor="email" className='border-[0.1rem]  border-white rounded-md justify-center flex  w-fit text-[0.7rem] py-[0.2rem] px-[0.8rem] font-bold ml-6 relative z-100 bg-[#FCFCFD]' >EMAIL *</label>
//           <input className='border w-[32rem] p-[1.1rem] rounded-md  z-10  mt-[-0.8rem]' type="email" id="email" name="email" placeholder="marayam@wevesti.com" />
//           <label htmlFor="password" className='border-[0.1rem]  border-white rounded-md justify-center flex  w-fit text-[0.7rem] py-[0.25rem] px-[0.8rem] font-bold ml-6 mt-[1.5rem] relative z-100 bg-[#FCFCFD]' >PASSWORD *</label>
//           <input type="password" id="password" name="password" className='border w-[32rem] p-[1.1rem] mt-[-0.8rem] rounded-md z-0'placeholder="Password" />
//           <div className=" mt-4 flex justify-end font-bold">
//             <Link to='/forgot-password' >Forgot Password?</Link>
//           </div>
//           <Button1 style='bg-[#518C36] w-full mt-9 py-2 text-white rounded-[0.5rem] ' title='Sign in'/>
//           {/* <button className='submit-button' type="submit">Sign in</button> */}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignIn;
