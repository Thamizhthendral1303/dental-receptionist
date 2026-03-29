import React, { useEffect, useState } from "react";
import "../styles/patientregister.css";
import { Inputtags } from "../components/Inputtags";
import { Buttontag } from "../components/Buttontag";
import img from "../assets/dentalimage.jpg";

import axios from "Axios";

export const PatientRegsiter = () => {
  const [registervalue, Setregistervalue] = useState({
    patientname: "",
    patientage: 0,
    patientgender: "",
    patientphno: 0,
    patientaddress: "",
    patientstatus: "",
    patientcheckup: "",
    patientappointmentdate: "",
  });

  const Handlechange = (e) => {
    const { name, value } = e.target;
    Setregistervalue({ ...registervalue, [name]: value });
  };

  const HandleSubmit = () => {
    console.log(registervalue);

    axios
      .post("http://127.0.0.1:8000/patientregister", registervalue)
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <>
      <div className="patientregister-maindiv">
        <div className="patientregister-subdiv">
          <div className="patientregister-imagediv">
            <img src={img} alt="" />
          </div>
          <div className="patientregister-formdiv">
            <h2>Patient Register Page</h2>
            <Inputtags
              placeholder="Enter Name"
              name="patientname"
              onchg={Handlechange}
            />
            <Inputtags
              placeholder="Enter Age"
              name="patientage"
              onchg={Handlechange}
            />
            <div className="radiodiv">
              <label htmlFor="male">
                MALE{" "}
                <Inputtags
                  placeholder="Enter Gender"
                  type="radio"
                  value="male"
                  name="patientgender"
                  id="male"
                  onchg={Handlechange}
                />
              </label>
              <label htmlFor="female">
                FeMALE{" "}
                <Inputtags
                  placeholder="Enter Gender"
                  type="radio"
                  value="female"
                  name="patientgender"
                  id="female"
                  onchg={Handlechange}
                />
              </label>
            </div>

            <Inputtags
              placeholder="Enter Phone Number"
              name="patientphno"
              onchg={Handlechange}
            />
            <Inputtags
              placeholder="Enter Address"
              name="patientaddress"
              onchg={Handlechange}
            />
            <div className="radiodiv">
              <label htmlFor="newpatient">
                New patient{" "}
                <Inputtags
                  type="radio"
                  value="new"
                  name="patientstatus"
                  id="newpatient"
                  onchg={Handlechange}
                />
              </label>
              <label htmlFor="oldpatient">
                Old patient{" "}
                <Inputtags
                  type="radio"
                  value="old"
                  name="patientstatus"
                  id="oldpatient"
                  onchg={Handlechange}
                />
              </label>
            </div>

            <div className="selectdiv">
              <select name="patientcheckup" id="" onChange={Handlechange}>
                <option value="">Select</option>
                <option value="Normal">Normal Check Up</option>
                <option value="New">New Check up</option>
              </select>
            </div>
            <Inputtags
              placeholder="Enter Date"
              type="date"
              name="patientappointmentdate"
              onchg={Handlechange}
            />

            <div className="patientregister-buttondiv">
              <Buttontag value="Submit" onclk={HandleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
