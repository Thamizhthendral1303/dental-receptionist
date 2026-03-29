import React, { useEffect, useState } from "react";

import "../styles/dashboard.css";

import axios from "Axios";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Buttontag } from "../components/Buttontag";

export const Dashboard = () => {

  const navigate = useNavigate()

  const [getid, Setgetid] = useState({
    userid: sessionStorage.getItem("userid"),
  });

  const [dbdata, Setdbdata] = useState({});

  useEffect(() => {
    axios.post("https://dental-receptionist-poc8.onrender.com/userdata", getid).then((res) => {
      Setdbdata(res.data);
    });
  }, []);

  const Handlepatientregister = ()=>{
    navigate("patientregister")
  }
  const HandleDashboard = ()=>{
    navigate("/dashboard")
  }
  const Handleviewreigster = ()=>{
    navigate("viewregister")
  }


  return (
    <>
      <div className="dashboard-maindiv">
        DashBoard
        <div className="dashboard-subdiv">
          <div className="dashboard-navbar">
            <div className="dashboard-buttondiv">
              <Buttontag value="Dashboard" onclk={HandleDashboard}/>
              <Buttontag value="Register" onclk={Handlepatientregister} />
              <Buttontag value="View Register" onclk={Handleviewreigster}/>
            </div>
          </div>
          <div className="dashboard-outletpages">
            <Outlet />
          </div>
          
        </div>
      </div>
    </>
  );
};
