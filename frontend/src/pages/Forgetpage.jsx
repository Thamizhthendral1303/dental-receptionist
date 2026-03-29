// import React, { useEffect, useState } from "react";
// import "../styles/loginpage.css";

// import img from "../assets/forgetimage.jpg";
// import { Inputtags } from "../components/Inputtags";
// import { Buttontag } from "../components/Buttontag";
// import { useNavigate } from "react-router-dom";

// import axios from "Axios";

// export const Forgetpage = () => {
//   const navigate = useNavigate();

//   const [userval, Setuserval] = useState({ username: "" });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     Setuserval({ ...userval, [name]: value });
//   };

//   const handleSubmit = () => {
//     console.log(userval);
//     try {

//         axios.post("http://127.0.0.1:8000/usercheck", userval).then((res) => {
//           sessionStorage.setItem("otpval", res.data.otp);
//           sessionStorage.setItem("usernameval", res.data.user[0]);
//           navigate("/otppage");
//         });

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <div className="login-page-maindiv">
//         <div className="image-div">
//           <img src={img} alt="noimage" />
//         </div>
//         <div className="login-page-subdiv">
//           <div className="login-formdiv">
//             <Inputtags
//               type="text"
//               placeholder="Enter the email"
//               name="username"
//               onchg={handleChange}
//             />
//             {/* <Inputtags type="password" placeholder="Password" /> */}
//           </div>
//           <div className="login-buttondiv">
//             <Buttontag value="SEND OTP" onclk={handleSubmit} />
//           </div>
//           {/* <div className="login-forgetdiv">
//                 <p className="paraforget">Forget Password.?</p>
//                 <p>
//                   If you dont have any account please -- <span>Sign up</span>
//                 </p>
//               </div> */}
//         </div>
//       </div>
//     </>
//   );
// };

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
      axios.post("http://127.0.0.1:8000/usercheck", userval).then((res) => {
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
