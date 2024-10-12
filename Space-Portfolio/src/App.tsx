// Components
import Dashboard from "./components/Dashboard/Dashboard";
import Portfolio from "./components/Portfolio/Portfolio";
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
      </Routes>
    </BrowserRouter>
  );
}