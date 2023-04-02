import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Row } from "antd";
import DoctorList from "../components/DoctorList";

import MainDash from "../components/MainDash/MainDash";
import RightSide from "../components/RigtSide/RightSide";
import "../styles/Homepage.css"
const HomePage = () => {
  const [doctors, setDoctors] = useState([]);
  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.get(
        "/api/v1/user/getAllDoctors",

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    
   
      
      <div className="Appdash">
      <div className="AppGlassdash ">
      
   
     <Layout/>
      <MainDash/>
      <RightSide/>
     
      
      </div>
      </div>
  
  
   
  );
};

export default HomePage;
