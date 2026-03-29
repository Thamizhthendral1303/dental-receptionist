// import React, { useState } from "react";
// import "../styles/signup.css";

// import img from "../assets/signup.jpg";
// import { Inputtags } from "../components/Inputtags";
// import { Buttontag } from "../components/Buttontag";
// import { useNavigate } from "react-router-dom";

// import axios from "Axios";

// export const Signuppage = () => {
//   const navigate = useNavigate();

//   const handlelogin = () => {
//     navigate("/");
//   };

//   const [getval, Setgetval] = useState({
//     name: "",
//     username: "",
//     password: "",
//     address: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     Setgetval({ ...getval, [name]: value });
//   };

//   const handleSubmit = () => {
//     // console.log(getval);

//     try {
//       if (
//         getval.name !== "" &&
//         getval.username !== "" &&
//         getval.password !== "" &&
//         getval.address !== "" &&
//         getval.name !== " " &&
//         getval.username !== " " &&
//         getval.password !== " " &&
//         getval.address !== " "
//       ) {
//         axios.post("http://127.0.0.1:8000/insertvalue", getval).then((res) => {

//           alert(res.data);
//           navigate("/")
//         });

//       } else {
//         alert("FILL THE ALL VALUE IN THE FORM ....");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <div className="signup-page-maindiv">
//         <div className="image-div">
//           <img src={img} alt="noimage" />
//         </div>
//         <div className="signup-page-subdiv">
//           <div className="signup-formdiv">
//             <Inputtags
//               type="text"
//               placeholder="Enter Name"
//               onchg={handleChange}
//               name="name"
//             />
//             <Inputtags
//               type="text"
//               placeholder="Enter User Name"
//               onchg={handleChange}
//               name="username"
//             />
//             <Inputtags
//               type="text"
//               placeholder="Enter Password"
//               onchg={handleChange}
//               name="password"
//             />
//             <Inputtags
//               type="text"
//               placeholder="Address"
//               onchg={handleChange}
//               name="address"
//             />
//           </div>
//           <div className="signup-buttondiv">
//             <Buttontag value="Signup" onclk={handleSubmit} />
//           </div>
//           <div className="signup-forgetdiv">
//             {/* <p className="paraforget" >Forget Password.?</p> */}
//             <p>
//               You already have an account please --
//               <span onClick={handlelogin}>Login</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

import React, { useState } from "react";
import "../styles/signup.css";

import img from "../assets/signup.jpg";
import { Inputtags } from "../components/Inputtags";
import { Buttontag } from "../components/Buttontag";
import { useNavigate } from "react-router-dom";

import axios from "Axios";

export const Signuppage = () => {
  const navigate = useNavigate();

  const handlelogin = () => {
    navigate("/");
  };

  const [getval, Setgetval] = useState({
    name: "",
    username: "",
    password: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    Setgetval({ ...getval, [name]: value });
  };

  const handleSubmit = () => {
    // console.log(getval);

    try {
      if (
        getval.name !== "" &&
        getval.username !== "" &&
        getval.password !== "" &&
        getval.address !== "" &&
        getval.name !== " " &&
        getval.username !== " " &&
        getval.password !== " " &&
        getval.address !== " "
      ) {
        axios.post("http://127.0.0.1:8000/insertvalue", getval).then((res) => {
          alert(res.data);
          navigate("/");
        });
      } else {
        alert("FILL THE ALL VALUE IN THE FORM ....");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="signup-maindiv">
        <div className="signup-subdiv">
          <div className="signup-imagediv">
            <img src={img} alt="noimage" srcset="" />
          </div>

          <div className="signup-inputdiv">
            <h2>SIGN UP PAGE</h2>
            <div className="signup-formdiv">
              <div className="inputsdiv">
                <Inputtags
                  type="text"
                  placeholder="Enter Name"
                  onchg={handleChange}
                  name="name"
                />
                <Inputtags
                  type="text"
                  placeholder="Enter User Name"
                  onchg={handleChange}
                  name="username"
                />
                <Inputtags
                  type="email"
                  placeholder="Enter Email "
                  onchg={handleChange}
                  name="email"
                />
                <Inputtags
                  type="text"
                  placeholder="Enter Password"
                  onchg={handleChange}
                  name="password"
                />
                <Inputtags
                  type="text"
                  placeholder="Address"
                  onchg={handleChange}
                  name="address"
                />
              </div>
              <div className="buttonsdiv">
                <Buttontag value="SIGN UP" onclk={handleSubmit} />
              </div>
              <div className="forgetdiv">
                {/* <p className="paraforget" onClick={handleForget}>
                      Forget Password.?
                    </p> */}
                <p>
                  If you have any account please --
                  <span onClick={handlelogin}>login </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
