import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile.jsx";
import Education from "./Education.jsx";
import Experiance from "./Experiance.jsx";
import Project from "./Project.jsx";
// import Hireme from "./Hireme.jsx";
export function MainSec() {
  return (
    <React.Fragment>
      <div className='content-sec'>
        <Routes>
          <Route exact path="/Profile" element={<Profile />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Experiance" element={<Experiance />} />
          <Route path="/Project" element={<Project />} />

        </Routes>
      </div>
    </React.Fragment>
  );
}

export default MainSec;
