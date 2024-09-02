import React, { useState } from "react";
import { Button1 } from "./components/buttons/Button1";
import Bookreel from "../src/assets/Book reel.png";
import vestilogo from "../src/assets/Vestilogo.png";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://library-management-system-hctm.onrender.com/api/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      const data = await response.json();
      console.log(data);
      alert("Email sent successfully");
    } catch (error) {}
  };

  return (
    <div className="h-[100vh] flex overflow-y-hidden justify items-center xl:gap-20 xxl:gap-40 gap-5">
      <img
        src={Bookreel}
        className="w-[50%] xl:[75%] h-full hidden lg:block"
        alt=""
      />
      <div className="w-full ml-4 mr-2 items-center flex flex-col lg:items-start">
        <div>
          <img src={vestilogo} alt="" />
        </div>
        <h1 className="font-bold text-[1.8rem] mt-[2rem]">Welcome Back!</h1>
        <h2 className="mt-[0.5rem] font-medium text-[#667085] text-center md:text-start">
          Please enter your credentials to access the admin dashboard
        </h2>
        <form className="mt-[2rem]" onSubmit={handleSubmit}>
          <div>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button1
            style="bg-[#518C36] lg:w-[30rem] sm:mr:0 w-full sm:mr:0 w-full xs:w-[20rem] mt-9 py-2 text-white rounded-[0.5rem]"
            title="Send link"
          />
        </form>
      </div>
    </div>
  );
};
