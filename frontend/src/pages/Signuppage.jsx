import React, { useState, useEffect } from "react";
import "../styles/signup.css";

import img from "../assets/signup.jpg";
import { Inputtags } from "../components/Inputtags";
import { Buttontag } from "../components/Buttontag";
import { useNavigate } from "react-router-dom";

import axios from "Axios"; // ✅ FIXED (small letter)

export const Signuppage = () => {
  const navigate = useNavigate();

  const handlelogin = () => {
    navigate("/");
  };

  // ✅ form state
  const [getval, setGetval] = useState({
    name: "",
    username: "",
    password: "",
    address: "",
    email: ""
  });

  // ✅ loading state
  const [loading, setLoading] = useState(false);

  // ✅ useEffect (backend warmup)
  useEffect(() => {
    axios
      .get("https://dental-receptionist-poc8.onrender.com/ping") // better use /ping
      .then(() => console.log("Backend warmed up"))
      .catch(() => console.log("Ping failed"));
  }, []);

  // ✅ input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGetval({ ...getval, [name]: value });
  };

  // ✅ form submit
  const handleSubmit = async () => {
    // trim values to avoid " " issue
    const { name, username, password, address, email } = getval;

    if (
      !name.trim() ||
      !username.trim() ||
      !password.trim() ||
      !address.trim() ||
      !email.trim()
    ) {
      alert("Please fill all fields properly!");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "https://dental-receptionist-poc8.onrender.com/insertvalue",
        getval
      );

      alert(res.data);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="signup-maindiv">
        <div className="signup-subdiv">
          <div className="signup-imagediv">
            <img src={img} alt="noimage" />
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
                  placeholder="Enter Email"
                  onchg={handleChange}
                  name="email"
                />

                <Inputtags
                  type="password" // ✅ better security
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
                <Buttontag
                  value={loading ? "Please wait..." : "SIGN UP"}
                  onclk={handleSubmit}
                />
              </div>

              <div className="forgetdiv">
                <p>
                  If you have any account please --
                  <span onClick={handlelogin}> login</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};