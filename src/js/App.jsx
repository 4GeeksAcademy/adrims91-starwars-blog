import React from "react";
import { ContextProvider } from "./context/AppContext";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";
import Vehicles from "./components/Vehicles";
import PeopleDetails from "./components/PeopleDetails";
import PlanetsDetails from "./components/PlanetsDetails";
import VehiclesDetails from "./components/VehiclesDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div>
              <People />
              <Planets />
              <Vehicles />
            </div>
          } />
          <Route path="/people_details/:id" element={<PeopleDetails />} />
          <Route path="/planets_details/:id" element={<PlanetsDetails />} />
          <Route path="/vehicles_details/:id" element={<VehiclesDetails />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
};

export default App;
