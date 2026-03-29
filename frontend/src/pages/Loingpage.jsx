
import "../styles/loginpage.css";

import img from "../assets/loginimage.jpg";
import { Inputtags } from "../components/Inputtags";
import { Buttontag } from "../components/Buttontag";
import { useNavigate } from "react-router-dom";

import axios from "Axios";

export const Loingpage = () => {
  const navigate = useNavigate();

  const [userval, Setuserval] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    Setuserval({ ...userval, [name]: value });
  };

  const handleForget = () => {
    navigate("/forgetpage");
  };
  const handlesignup = () => {
    navigate("/signuppage");
  };

  const handleSubmit = () => {
    axios.post("https://dental-receptionist-xr5t.onrender.com/login", userval).then((res) => {
      if (res.data.status == "failed") {
        alert("USER NAME AND PASSWORD IS MAY BE WRONG...");
      } else {
        if (userval.username !== "" && userval.password !== "") {
          sessionStorage.setItem("userid", res.data.userid[0]);
          alert("LOGIN SUCCESSFULL");
          navigate("/dashboard");
        } else {
          alert("Enter the user name and password");
        }
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
            <h2>LOGIN PAGE</h2>
            <div className="loginpage-formdiv">
              <div className="inputsdiv">
                <Inputtags
                  type="text"
                  placeholder="User Name"
                  onchg={handleChange}
                  name="username"
                />
                <Inputtags
                  type="password"
                  placeholder="Password"
                  onchg={handleChange}
                  name="password"
                />
              </div>
              <div className="buttonsdiv">
                <Buttontag value="LOGIN" onclk={handleSubmit} />
              </div>
              <div className="forgetdiv">
                <p className="paraforget" onClick={handleForget}>
                  Forget Password.?
                </p>
                <p>
                  If you dont have any account please --
                  <span onClick={handlesignup}>Sign up</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
