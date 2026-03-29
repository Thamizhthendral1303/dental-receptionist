import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Loingpage } from "./pages/Loingpage";
import { Forgetpage } from "./pages/forgetpage";
import { Otppage } from "./pages/Otppage";
import { Changepassword } from "./pages/Changepassword";
import { Signuppage } from "./pages/Signuppage";
import { Dashboard } from "./pages/Dashboard";
import { PatientRegsiter } from "./pages/PatientRegsiter";
import { Viewregister } from "./pages/Viewregister";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loingpage />} />
          <Route path="/forgetpage" element={<Forgetpage />} />
          <Route path="/otppage" element={<Otppage />} />
          <Route path="/changepassword" element={<Changepassword />} />
          <Route path="/signuppage" element={<Signuppage />} />
          {/* <Route  element={<Dashboard  />}/> */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="patientregister" element={<PatientRegsiter />} />
            <Route path="viewregister" element={<Viewregister />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
