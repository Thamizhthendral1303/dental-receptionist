
import React, { useState } from "react";

import "../styles/loginpage.css";

import img from "../assets/loginimage.jpg";
import { Inputtags } from "../components/Inputtags";
import { Buttontag } from "../components/Buttontag";
import { useNavigate } from "react-router-dom";

import axios from "Axios";

export const Changepassword = () => {
  const [getpass, Setgetpass] = useState({
    newpassword: "",
    confirmpassword: "",
    username: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    Setgetpass({
      ...getpass,
      [name]: value,
      userid: sessionStorage.getItem("usernameval"),
    });
  };

  const handleSubmit = () => {
    //  navigate("/");
    if (
      getpass.confirmpassword !== "" &&
      getpass.newpassword !== "" &&
      getpass.newpassword == getpass.confirmpassword
    ) {
      axios.put("https://dental-receptionist-xr5t.onrender.com/updatepassword", getpass).then((res) => {
        if (res.data) {
          alert(res.data);
          navigate("/");
        }
      });
    } else {
      alert("Enter the password...");
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
            <h2>CHANGE PASSWORD PAGE</h2>
            <div className="loginpage-formdiv">
              <div className="inputsdiv">
                <Inputtags
                  type="password"
                  placeholder="New Password"
                  onchg={handleChange}
                  name="newpassword"
                />
                <Inputtags
                  type="password"
                  placeholder="Confirm Password"
                  onchg={handleChange}
                  name="confirmpassword"
                />
              </div>
              <div className="buttonsdiv">
                <Buttontag value="Change password" onclk={handleSubmit} />
              </div>
              <div className="forgetdiv"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
