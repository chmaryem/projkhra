import React from "react";

import { Col, Form, Input, Row, TimePicker, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import axios from "axios";
import moment from "moment";
import "../../styles/Homepage.css";
import Layout from "../../components/Layout";
const ApplyDoctor = () => {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //handle form
  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/apply-doctor",
        {
          ...values,
          userId: user._id,
          timings: [
            moment(values.timings[0]).format("HH:mm"),
            moment(values.timings[1]).format("HH:mm"),
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
        navigate("/home");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Somthing Went Wrrong ");
    }
  };
  return (
    <div className="Appdash">
    <div className="AppGlassdash ">
    <Layout/>
    <div className="signup-containerprofile">
      <div className="signup-form-containerprofile ">
      <h1 className="text-center">Apply Employee</h1>
      <div className="left">
  
      <Form  className="register-form" onFinish={handleFinish} >
        <h4 className="">Personal Details : </h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label=" "
              name="firstName"
              required
              rules={[{ required: true }]}
            >
              <Input  className="inputprofile" type="text" placeholder="your first name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label=" "
              name="lastName"
              required
              rules={[{ required: true }]}
            >
              <Input  className="inputprofile" type="text" placeholder="your last name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label=" "
              name="phone"
              required
              rules={[{ required: true }]}
            >
              <Input  className="inputprofile" type="text" placeholder="your contact no" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label=" "
              name="email"
              required
              rules={[{ required: true }]}
            >
              <Input  className="inputprofile" type="email" placeholder="your email address" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Website" name="website">
              <Input  className="inputprofile" type="text" placeholder="your website" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label=" "
              name="address"
              required
              rules={[{ required: true }]}
            >
              <Input  className="inputprofile" type="text" placeholder="your clinic address" />
            </Form.Item>
          </Col>
        </Row>
        <h4>Professional Details :</h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label=" "
              name="specialization"
              required
              rules={[{ required: true }]}
            >
              <Input  className="inputprofile" type="text" placeholder="your specialization" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label=" "
              name="experience"
              required
              rules={[{ required: true }]}
            >
              <Input  className="inputprofile" type="text" placeholder="your experience" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label=" "
              name="feesPerCunsaltation"
              required
              rules={[{ required: true }]}
            >
              <Input  className="inputprofile" type="text" placeholder="your contact no" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Timings" name="timings" required>
              <TimePicker.RangePicker format="HH:mm" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}></Col>
          <Col xs={24} md={24} lg={8}>
            <button className="green_btn"  type="submit">
              Submit
            </button>
          </Col>
        </Row>
      </Form>
      </div>
   </div>
   </div>
   </div>
   </div>
  );
};

export default ApplyDoctor;
