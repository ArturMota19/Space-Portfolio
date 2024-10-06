// Components
import Dashboard from "./components/Dashboard/Dashboard";
// Images

// Imports
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Styles


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}