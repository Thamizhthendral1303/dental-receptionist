

import React, { useState } from "react";

import "../styles/loginpage.css";

import img from "../assets/loginimage.jpg";
import { Inputtags } from "../components/Inputtags";
import { Buttontag } from "../components/Buttontag";
import { useNavigate } from "react-router-dom";

import axios from "Axios";

export const Otppage = () => {
  const navigate = useNavigate();

  const [otpvalue, Setotpvalue] = useState({ userid: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    Setotpvalue({ ...otpvalue, [name]: value });
  };

  const handleSubmit = () => {
    var getval = { userid: sessionStorage.getItem("usernameval") };
    // console.log(getval);

    console.log(otpvalue);

    axios.post("https://dental-receptionist-poc8.onrender.com/otpcheck", getval).then((res) => {
      // console.log(res.data.otpval[0]);
      if (res.data.otpval[0] == otpvalue.userid) {
        alert("Your " + res.data.status);
        navigate("/changepassword");
      } else {
        console.log("failed...");
      }
    });
  };

  return (
    <>
      <div className="loginpage-maindiv">
        <div className="loginpage-subdiv">
          <div className="loginpage-imagediv">
            <img src={img} alt="noimage" srcset="" />
          </div>

          <div className="loginpage-inputdiv">
            <h2>OTP PAGE</h2>
            <div className="loginpage-formdiv">
              <div className="inputsdiv">
                <Inputtags
                  type="text"
                  placeholder="Enter the OTP"
                  onchg={handleChange}
                  name="userid"
                />
              </div>
              <div className="buttonsdiv">
                <Buttontag value="SUBMIT" onclk={handleSubmit} />
              </div>
              <div className="forgetdiv"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
