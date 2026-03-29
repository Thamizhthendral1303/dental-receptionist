// import React, { useState } from "react";

// import "../styles/loginpage.css";

// import img from "../assets/loginimage.jpg";
// import { Inputtags } from "../components/Inputtags";
// import { Buttontag } from "../components/Buttontag";
// import { useNavigate } from "react-router-dom";

// export const Otppage = () => {
//   const navigate = useNavigate();

//   const [otpval, Setotpval] = useState({ otp: "" });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     Setotpval({ ...otpval, [name]: value });
//   };

//   const handleSubmit = () => {
//     if (otpval.otp == sessionStorage.getItem("otpval")) {
//       alert("OTP was correct");
//       navigate("/changepassword");

//       sessionStorage.removeItem("otpval")
//     } else {
//       alert("OTP was Incorrect");
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
//               placeholder="Enter the OTP"
//               onchg={handleChange}
//               name="otp"
//             />
//             {/* <Inputtags type="password" placeholder="Password" /> */}
//           </div>
//           <div className="login-buttondiv">
//             <Buttontag value="SUBMIT" onclk={handleSubmit} />
//           </div>
//           {/* <div className="login-forgetdiv">
//                     <p className="paraforget">Forget Password.?</p>
//                     <p>
//                       If you dont have any account please -- <span>Sign up</span>
//                     </p>
//                   </div> */}
//         </div>
//       </div>
//     </>
//   );
// };

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

    axios.post("http://127.0.0.1:8000/otpcheck", getval).then((res) => {
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
