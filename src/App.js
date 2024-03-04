import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router and Routes

import Login from "./Components/Login";
import AdminLogin from "./Components/AdminLogin";
import Booking from "./Components/Booking";
import Dashboard from "./Components/Dashboard";
import LandingPage from "./Components/LandingPage";
import EmployeeLogin from "./Components/EmployeeLogin";
import UserLogin from "./Components/UserLogin";
import History from "./Components/History";
import FetchServices from "./Components/FetchServices";
import DoorDetails from "./Components/DoorDetails";
import EngineDetails from "./Components/EngineDetails";
import BatteryDetails from "./Components/BatteryDetails";
import AlternatorDetails from "./Components/AlternatorDetails";
import MirrorDetails from "./Components/MirrorDetails";
import WheelDetails from "./Components/WheelDetails";
import AppList from "./Components/AppList";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/employeelogin" element={<EmployeeLogin />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/landingpage' element={<LandingPage/>} />
          <Route path="/history" element={<History />} />
          <Route path="/fetch" element={<FetchServices />} />
          <Route path="/door" element={<DoorDetails />} />
          <Route path="/engine" element={<EngineDetails />} />
          <Route path="/battery" element={<BatteryDetails />} />
          <Route path="/alternator" element={<AlternatorDetails />} />
          <Route path="/wheel" element={<WheelDetails />} />
          <Route path="/mirror" element={<MirrorDetails />} />
          <Route path="/applist" element={<AppList />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
