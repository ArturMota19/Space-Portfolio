// Components
import Dashboard from "./components/Dashboard/Dashboard";
import Portfolio from "./components/Portfolio/Portfolio";
import SinglePlanet from "./components/SinglePlanet/SinglePlanet";
// Images

// Imports
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Styles


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/planet" element={<SinglePlanet />} />
      </Routes>
    </BrowserRouter>
  );
}