import React,{ useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MatatuVisionLanding from '../pages/landing';
import PageLayout from "../components/layout/PageLayout"; // Import the layout
import DashBoard from '../pages/dashboard';
import './App.css';
import VideoPlayer from '../pages/liveStream';
function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<MatatuVisionLanding/>}/>
          <Route path="/dashboard" element={<DashBoard />} />
          {/* <Route
            path="/livestreams"
            element={
              <VideoPlayer
                src="/bus1.mp4"
                type="video/mp4"
                passengerCount={15}
                vehicleReg="KBC 123D"
              />
            }
          />  */}
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;

