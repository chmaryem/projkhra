import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import { Row } from "antd";
import DoctorList from "../components/RHList";
import "../../src/styles/Homepage.css"

// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';
// import about data
import { helloData } from '../Data/data';

const Hello = () => {
   // destructure about
   const { image, title, subtitle } = helloData;
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
   <section
      className='ml-[100px] xl:mt-[100px] min-w-max '
      
      data-aos-offset='350'
    >
      <div className='container mx-auto'>
        <div className='bg-purple-300/[30%] rounded-[50px] min-h-[560px]  px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[20px] xl:pb-0'>
          {/* image */}
          <div className='flex-1' data-aos='zoom-in-left'>
            <img src={image} alt='' />
          </div>
          {/* text */}
          <div className='flex-1 xl:pr-12'>
            <h2 className='h2 mb-10' data-aos='fade-up' data-aos-delay='300'>
              {title}
            </h2>
            <p
              className='max-w-[474px] mx-auto xl:mx-0'
              data-aos='fade-up'
              data-aos-delay='400'
            >
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
   
   
   
     
    
    </div>
    </div>
  );
};

export default Hello;