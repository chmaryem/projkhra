import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import { Row } from "antd";
import DoctorList from "../components/DoctorList";
import "../styles/Homepage.css"
import About from "../components/About";
// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hello = () => {
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
  Aos.init({
    duration: 400,
    offset: 0,
  });
  return (
    <div className="Appdash">
    <div className="AppGlassdash ">
   <Layout/>
   <>
   <About/>
   </>
     
    
    </div>
    </div>
  );
};

export default Hello;
