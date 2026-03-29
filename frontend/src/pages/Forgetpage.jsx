

import React, { useEffect, useState } from "react";
import "../styles/loginpage.css";

import img from "../assets/forgetimage.jpg";
import { Inputtags } from "../components/Inputtags";
import { Buttontag } from "../components/Buttontag";
import { useNavigate } from "react-router-dom";

import axios from "Axios";

export const Forgetpage = () => {
  const navigate = useNavigate();

  const [userval, Setuserval] = useState({ email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    Setuserval({ ...userval, [name]: value });
  };

  const handleSubmit = () => {
    // console.log(userval);'
   
    try {
      axios.post("https://dental-receptionist-poc8.onrender.com/usercheck", userval).then((res) => {
        sessionStorage.setItem("usernameval", res.data.user[0]);
        navigate("/otppage");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="loginpage-maindiv">
        <div className="loginpage-subdiv">
          <div className="loginpage-imagediv">
            <img src={img} alt="noimage" srcset="" />
          </div>

          <div className="loginpage-inputdiv">
            <h2>FORGET PAGE</h2>
            <div className="loginpage-formdiv">
              <div className="inputsdiv">
                <Inputtags
                  type="text"
                  placeholder="Enter the email"
                  name="email"
                  onchg={handleChange}
                />
              </div>
              <div className="buttonsdiv">
                <Buttontag value="SEND OTP" onclk={handleSubmit} />
              </div>
              <div className="forgetdiv">
        
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
