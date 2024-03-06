import React, { useState, useEffect } from "react";
import "./App.css";
import StudentAttendanceModal from "./components/StudentAttendanceModal/StudentAttendanceModal.jsx";
// import axios from "axios";

function App() {
 const [isOpen, setIsOpen] = useState(false)
 const openModal = (()=> setIsOpen(true))
 const closeModal = (()=> setIsOpen(false))

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("API");
  //       setData(response.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <StudentAttendanceModal/>
     {/* <button onClick={()=> openModal()}>open modal</button>
     {isOpen ? (
      <div>
        <p>loda</p>
        <button onClick={()=> closeModal()}>close</button>
      </div>
     ): null} */}

      {/* {data.map((item, index) => (
        <p key={index}>{item?.name}</p>
      ))} */}

    </>
  );
}

export default App;
