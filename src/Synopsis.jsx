import React, { useState, useEffect } from "react";
// import api from "./api/axios";
// import axios from "axios";
const Synopsis = () => {
  // const [getsynopsis, setgetsynopsis] = useState([]);
  // // const [search, setSearch] = useState('')
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await api.get("/synopsis");
  //       setgetsynopsis(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // .then(response => {
  //   setgetsynopsis(response.data)

  return (
    <div>
      {/* <div className="bg-[#F9FAFB] p-6 rounded-lg mt-4 "> */}

      {/* <div className='flex justify-end items-end mb-4'><Filterbutton/></div> */}
      <div className="w-full border p-4 rounded-md bg-white mt-8">
        <p>
          Lorem ipsum dolor sit amet consectetur. Accumsan enim convallis
          molestie nisl aliquam libero netus pellentesque nulla. Ut et sit lacus
          in diam nullam quis. Facilisis tincidunt orci nulla lectus. Sit
          viverra vulputate urna nascetur quam. Aliquam lobortis nulla in
          consequat
        </p>
        <p className="mt-4">
          Donec laoreet neque euismod adipiscing. Sed diam dui facilisis nunc.
          Ac egestas massa viverra morbi a quisque. Arcu nibh sed elit risus
          odio ut massa. Integer arcu hendrerit sit mattis nibh nibh laoreet.
          Sagittis at fermentum eget a velit interdum. Elementum quis amet nunc
          in magna suscipit blandit. Molestie posuere netus dui quam vestibulum
          justo gravida porta.
        </p>
        <p className="mt-4">
          Bibendum interdum sed tincidunt quam. Enim quis in felis imperdiet vel
          neque penatibus tincidunt amet. Commodo tellus eu ullamcorper posuere
          pretium convallis vitae. Sed eu urna blandit id diam velit in. Elit
          dui quam sollicitudin sed. Sit mi lobortis ligula dictum porttitor.
          Auctor cursus euismod aliquet ipsum magna a sed ac
        </p>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Synopsis;
